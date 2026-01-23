import { useState, useEffect } from 'react';
import { api } from './services/api';
import BookCard from './components/bookCard';
import AddBookForm from './components/addBookForm';

export default function App() {
  const [books, setBooks] = useState([]);
  const [searchAutore, setSearchAutore] = useState('');
  const [searchGenere, setSearchGenere] = useState('');
  const [showForm, setShowForm] = useState(false);

  // useEffect: Carica libri all'avvio (requisito PDF)
  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await api.getBooks();
      setBooks(data);
    } catch (error) {
      console.error('Errore nel caricamento:', error);
    }
  };

  const handleAdd = async (book) => {
    try {
      const newBook = await api.createBook(book);
      setBooks([...books, newBook]);
      setShowForm(false);
    } catch (error) {
      console.error('Errore nella creazione:', error);
      alert('Error: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Vuoi eliminare questo libro?')) {
      try {
        await api.deleteBook(id);
        setBooks(books.filter(book => book.id !== id));
      } catch (error) {
        console.error('Errore nell\'eliminazione:', error);
      }
    }
  };

  const handleDeleteAll = async () => {
    if (window.confirm('Vuoi eliminare l\'intera libreria?')) {
      try {
        await api.deleteAllBooks();
        setBooks([]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // Filtro per AUTORE o GENERE (lato client - requisito PDF)
  const filteredBooks = books.filter(book => {
    const matchAutore = searchAutore === '' ||
      book.autore.toLowerCase().includes(searchAutore.toLowerCase());

    const matchGenere = searchGenere === '' ||
      book.genere.toLowerCase().includes(searchGenere.toLowerCase());

    return matchAutore && matchGenere;
  });

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="navbar bg-base-100 shadow-xl rounded-box mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">📚 Gestione Libreria</h1>
          </div>
          <div className="flex-none">
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? '❌ Chiudi' : '➕ Aggiungi Libro'}
            </button>
          </div>
        </div>

          {/*
          Operatore && (AND logico):
            Se filteredBooks.length === 0 è true → esegue il codice dopo &&
            Se filteredBooks.length === 0 è false → non mostra nulla
          */}
        {showForm && (
          <div className="mb-6">
            <AddBookForm onAdd={handleAdd} />
          </div>
        )}

        <div className="card bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="🔍 Cerca per autore..."
                className="input input-bordered w-full"
                value={searchAutore}
                onChange={(e) => setSearchAutore(e.target.value)}
              />
              <input
                type="text"
                placeholder="🔍 Cerca per genere..."
                className="input input-bordered w-full"
                value={searchGenere}
                onChange={(e) => setSearchGenere(e.target.value)}
              />
              <button
                className="btn btn-error"
                onClick={handleDeleteAll}
              >
                🗑️ Elimina tutti
              </button>
            </div>
          </div>
        </div>

        {/* Lista libri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} onDelete={handleDelete} />
          ))}
        </div>

        {/* Messaggio vuoto */}
        {filteredBooks.length === 0 && (
          <div className="alert alert-info shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>
                {books.length === 0
                  ? 'Nessun libro presente. Aggiungi il primo!'
                  : 'Nessun libro trovato con questi filtri.'}
              </span>
            </div>
          </div>
        )}

        {/* Footers */}
        <div className="stats shadow mt-6 w-full">
          <div className="stat">
            <div className="stat-title">Totale libri</div>
            <div className="stat-value text-primary">{books.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Visualizzati</div>
            <div className="stat-value text-secondary">{filteredBooks.length}</div>
          </div>
        </div>

      </div>
    </div>
  );
}
