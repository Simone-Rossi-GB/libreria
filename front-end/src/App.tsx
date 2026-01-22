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

  function handleAddBook()async (book) => {
      await
  }

  function hanleDeleteBook() async (id) => {

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
