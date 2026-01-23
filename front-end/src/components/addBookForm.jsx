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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Titolo</span>
                                </label>
                                <input
                                    type="text"
                                    name="titolo"
                                    placeholder="Es. 1984"
                                    className="input input-bordered"
                                    value={formData.titolo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Autore</span>
                                </label>
                                <input
                                    type="text"
                                    name="autore"
                                    placeholder="Es. George Orwell"
                                    className="input input-bordered"
                                    value={formData.autore}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Anno</span>
                                </label>
                                <input
                                    type="text"
                                    name="anno"
                                    placeholder="Es. 1949"
                                    className="input input-bordered"
                                    value={formData.anno}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Genere</span>
                                </label>
                                <input
                                    type="text"
                                    name="genere"
                                    placeholder="Es. Distopia"
                                    className="input input-bordered"
                                    value={formData.genere}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className="card-actions justify-end">
                            <button type="submit" className={}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}