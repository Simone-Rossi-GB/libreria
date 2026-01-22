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

  function loadBooks() {
        const data = await api.getBooks();
        setBooks(data);
    }

  function showAddBookForm() {
      setShowForm(true);
      return <>
        <addBookForm></addBookForm>
      </>
  }

  return (
    <>
        <
    </>
  )
}

export default App
