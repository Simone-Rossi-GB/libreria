from faker import Faker
from flask import Flask, render_template
from flask_cors import CORS
from models import Libro

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

faker = Faker()
libri: list[Libro] = []

def genera_libri_fake():


@app.get("/libri")
def getLibri():




if __name__ == "__main__":
    genera_libri_fake()
    app.run("0.0.0.0", 11000, debug=True)