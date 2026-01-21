from faker import Faker
from flask import Flask, render_template
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

faker = Faker()

print(os.path.dirname(os.path.realpath('../front-end/index.html')))

@app.route("/")
def index():
    return render_template('../front-end/index.html')

if __name__ == "__main__":
    app.run("0.0.0.0", 11000, debug=True)