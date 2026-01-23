Documentazione per la configurazione del progetto:

# Configurazione Progetto Libreria

## Configurazione Front-end

Per configurare il front-end, è necessario modificare alcuni file di configurazione.

1. Aprire il file `src/config.js` e modificare le impostazioni come segue:
   ```javascript
   const config = {
       API_URL: 'http://localhost:8000/api',
       // altre impostazioni...
   };

   export default config;
   ```

## Configurazione Back-end

Per configurare il back-end, è necessario modificare i file di configurazione.

1. Aprire il file `.env` e modificare le impostazioni come segue:
   ```plaintext
   DATABASE_URL=postgres://username:password@localhost/dbname
   SECRET_KEY=your_secret_key
   DEBUG=True
   ```