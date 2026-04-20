# Libreria

A full-stack library management app. The backend exposes a REST API for CRUD operations on books; the frontend lets users browse and add titles.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)

---

## Features

- Browse a catalog of books (title, author, year, genre)
- Add new books via a form
- Backend generates 20 fake books on startup using Faker (for demo/testing)
- Pydantic validation on all incoming data

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| Backend | Python, Flask, Pydantic |
| Fake data | `faker` library |
| API | REST (JSON) |

---

## Getting Started

### Backend

```bash
cd back-end
pip install flask flask-cors pydantic faker
python WebService.py
```

The API runs at `http://localhost:5000`.

### Frontend

```bash
cd front-end
npm install
npm run dev
```

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/libri` | Get all books |
| `POST` | `/api/libri` | Add a new book |

**Book schema:**
```json
{
  "id": "uuid",
  "titolo": "string",
  "autore": "string",
  "anno": "string",
  "genere": "string"
}
```

---

## Project context

School project at IIS B. Castelli, Brescia.  
Focus: building a REST web service in Python and consuming it from a React frontend with TypeScript.

**Author:** Simone Rossi
