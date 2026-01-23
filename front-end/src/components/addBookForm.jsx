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
        e.preventDefault();
        onAdd(formData);
        setFormData({
            titolo: '',
            autore: '',
            anno: '',
            genere: ''
        });
    };

    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> ➕ Nuovo libro </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className={}
                    </form>
                </div>
            </div>
        </>
    )
}