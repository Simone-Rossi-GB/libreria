Documentazione per l'installazione del progetto:

# Installazione Progetto Libreria

## Requisiti Sistematici

Per utilizzare la libreria, è necessario avere i seguenti requisiti:

- Python 3.8 o successivo
- PostgreSQL 12 o successivo
- Node.js 14 o successivo

## Passaggi di Installazione

### Installazione Front-end

1. Navegare alla cartella del progetto:
   ```sh
   cd /Users/simo/PycharmProjects/libreria/libreria-frontend
   ```

2. Installare le dipendenze npm:
   ```sh
   npm install
   ```

3. Eseguire l'installazione:
   ```sh
   npm run install
   ```

### Installazione Back-end

1. Navegare alla cartella del progetto:
   ```sh
   cd /Users/simo/PycharmProjects/libreria/libreria-backend
   ```

2. Creare un file `.env` copiando il contenuto di `.env.example`:

   ```sh
   cp .env.example .env
   ```

3. Installare le dipendenze pip:
   ```sh
   pip install -r requirements.txt
   ```

4. Eseguire l'installazione:
   ```sh
   python manage.py migrate
   python manage.py createsuperuser
   ```