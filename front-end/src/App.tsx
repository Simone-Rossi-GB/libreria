import {useEffect, useState} from 'react'
import './App.css';
import {api} from './services/api.js';
import addBookForm from './components/addBookForm'

function App() {
  const [books, setBooks] = useState([]);
  const [searchAutore, setSearchAutore] = useState('');
  const [searchAutore, setSearchAutore] = useState('');
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

  return (
    <>
        <div></div>
    </>
  )
}

export default App
