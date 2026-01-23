import { useState } from 'react';

export default function addBookForm({ onAdd }) {
    const [formData, setFormData] = useState({
        titolo: '',
        autore: '',
        anno: '',
        genere: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        
    }
}