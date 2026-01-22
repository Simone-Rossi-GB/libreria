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

  function loadBooks() async () => {
        const data = await api.getBooks();
        setBooks(data);
    }

  function handleAddBook()async (newBook) => {
      const book = await api.createBook(newBook);
      // @ts-ignore
        setBooks([...books, book]);
      setShowForm(false);
  }

  function hanleDeleteBook() async (id) => {
      if (window.confirm('Confermi di voler eliminare il libro?')) {
          await api.deleteBook(id);
          setBooks(books.filter(book => book.id !== id))
      }
  }

  function handleDeleteLibrary() async () => {

  }

  return (
    <>
        <div></div>
    </>
  )
}

export default App
