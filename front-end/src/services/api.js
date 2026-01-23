const API_URL = 'http://localhost:11005/api';

export const api = {
    async getBooks(){
        // preferisco specificare che metodo è anche se la fetch di default usa metodo get
        const response = await fetch(`${API_URL}/libri`, {
            method: 'GET'
        });

        if (!response.ok) throw new Error('Errore nel caricamento dei libri');
        return response.json()
    },

    async createBook(book) {
        const response = await fetch(`${API_URL}/libri`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        });

        if (!response.ok) throw new Error('Errore nella creazione del libro');
        return response.json()
    },

    async updateBook(book) {
        const response = await fetch(`${API_URL}/libri/${id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(book)
            });

        if (!response.ok) throw new Error('Errore nella modifica del libro');
        return response.json()
    },

    async deleteBook(id) {
        const response = await fetch(`${API_URL}/libri/${id}`, {
                method: 'DELETE'
            });

        if (!response.ok) throw new Error('Errore nell\'eliminazione del libro');
        return response.json()
    },

    async deleteAllBooks() {
        const response = await fetch(`${API_URL}/libri`, {
                method: 'DELETE'
            });

        if (!response.ok) throw new Error('Errore nell\'eliminazione della libreria');
        return response.json()
    }
};