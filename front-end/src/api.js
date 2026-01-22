const API_URL = 'localhost:11000/api';

export const api = {
    async getBooks(){
        // preferisco specificare che metodo è anche se la fetch di default usa metodo get
        const response = fetch(`${API_URL}/libri`, {
            method: 'GET'
        });

        if (!response.ok) throw new Error('Errore nel caricamento dei libri');
        
    }
}