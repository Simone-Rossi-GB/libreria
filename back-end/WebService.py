import uuid

from faker import Faker
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from pydantic.v1 import ValidationError

from models import Libro

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

faker = Faker()
books: list[Libro] = []

def genera_libri_fake():


@app.get("/api/libri")
def getBooks():
    return jsonify([book.model_dump() for book in books]), 200


@app.post("/api/libri")
def createBooks():
    try:
        data = request.get_json()

        # genero l'id del libro

        if 'id' not in data or not data['id']:
            data['id'] = str(uuid.uuid4())

        """
        **dati "spacchetta" il dizionario
        Ogni chiave diventa un parametro nominato
        Pydantic valida automaticamente i dati
        Se tutto OK → crea oggetto Libro
        Se errori → lancia ValidationError
        """
        book = Libro(**data)

        books.append(book)

        return jsonify(book.model_dump()), 201

    except ValidationError as e:
        return jsonify({"error": e.errors()}), 400

@app.delete("/api/libri/<id>")
def deleteBooks(id):
    global books

    book_found = None

    for book in books:
        if book.id == id:
            book_found = book
            break

    if not book_found:
        return jsonify({"error": "Book not found"}), 404

    books.remove(book_found)

    return jsonify({"message": "Book deleted"}), 200

@app.delete("/api/libri")
def deleteAllBooks():

    books.clear()
    
    return jsonify({"message": "All books deleted"}), 200

if __name__ == "__main__":
    genera_libri_fake()
    app.run("0.0.0.0", 11000, debug=True)