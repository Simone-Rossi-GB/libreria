import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [searchAutore, setSearchAutore] = useState('');
  const [searchAutore, setSearchAutore] = useState('');
  const [showForm, setShowForm] = useState(false);

    function loadBooks() {
        consta data = await api.ge
    }

    useEffect(() => {
      loadBooks();
  }, []);

  return (
    <>

    </>
  )
}

export default App
