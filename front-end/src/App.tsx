import {useEffect, useState} from 'react'
import './App.css';
import {api} from './services/api.js';
import bookCard from './components/bookCard';
import addBookForm from './components/addBookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [searchAutore, setSearchAutore] = useState('');
  const [searchGenere, setSearchGenere] = useState('');
  const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      loadBooks();
    }, []);

  const loadBooks = async () => {
        const data = await api.getBooks();
        setBooks(data);
    }

  const handleAddBook = async (newBook) => {
      const book = await api.createBook(newBook);
      // @ts-ignore
        setBooks([...books, book]);
      setShowForm(false);
  }

  const hanleDeleteBook = async (id) => {
      if (window.confirm('Confermi di voler eliminare il libro?')) {
          await api.deleteBook(id);
          setBooks(books.filter(book => book.id !== id));
      }
  }

  const handleDeleteLibrary = async () => {
      if (window.confirm('Confermi di voler eliminare l\'intera libreria?')) {
          await api.deleteAllBooks();
          setBooks([])
      }
  }

  const filteredBooks = books.filter(book => {
      const matchAutore = searchAutore === '' || book.autore.toLowerCase().includes(searchAutore.toLowerCase());
      const matchGenere = searchGenere === '' || book.genere.toLowerCase().includes(searchGenere.toLowerCase());

      return matchAutore && matchGenere;
  });

  return (
    <>
        <div className="min-h-screen bg-base-200 p-6">
            <div className="max-w-7xl mx-auto">

                {/* headers */}
                <div className="navbar bg-base-100 shadow-xl rounded-box mb-6">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bald">📚 Gestione Libreria</h1>
                    </div>
                    <div className="flex-none">
                        <button
                            className="btn btn-primary"
                            onClick={() => { setShowForm(!showForm) }}
                        >
                            {showForm ? '❌ Chiudi' : '➕ Aggiungi Libro'}
                        </button>
                    </div>
                </div>

                {showForm && (
                    <div className="mb-6">
                        <addBookForm onAdd={handleAddBook} />
                    </div>
                )}

                {/* spazio per i filtri di ricerca per autore e genere */}
                <div className="card bg-base-100 shadow-xl mb-6">
                    <div className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input>
                                
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default App
