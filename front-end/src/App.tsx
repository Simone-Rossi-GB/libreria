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
                            <input
                                type="text"
                                placeholder="🔍 cerca per autore..."
                                className="input input-bordered w-full"
                                value={searchAutore}
                                onChange={(e) => setSearchAutore(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="🔍 cerca per genere..."
                                className="input input-bordered w-full"
                                value={searchGenere}
                                onChange={(e) => setSearchGenere(e.target.value)}
                            />
                            <button
                                className="btn btn-error"
                                onClick={handleDeleteLibrary}
                            >
                                🗑️ Elimina la libreria
                            </button>
                        </div>
                    </div>
                </div>

                {/* spazio della UI per il libri.  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map(book => (
                        <bookCard key={book.id} book={book} onDelete={hanleDeleteBook}></bookCard>
                    ))}
                </div>

                {filteredBooks.length === 0 && (
                    <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>
                                {books.length === 0
                                    ? 'Nessun libro presente nella libreria. Aggiungi il primo libro'
                                    : 'Nessun libro trovato con questi filtri'
                                }
                            </span>
                        </div>
                    </div>
                )}

                {/* footers */}
                <div className="stats shadow mt-6 w-fullstats shadow mt-6 w-full">
                    <div className="stat">
                        <div className="stat-title">Totale libri</div>
                        <div className="stat-value text-primary">{books.length}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Visualizzati</div>
                        <div className="stat-value text-primary"> {filteredBooks.length}</div>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}

export default App
