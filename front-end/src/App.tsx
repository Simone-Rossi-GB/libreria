import {useEffect, useState} from 'react'
import './App.css';
import {api} from './services/api';

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

  return (
    <>

    </>
  )
}

export default App
