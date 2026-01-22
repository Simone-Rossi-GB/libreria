# 🤖 Auto-Commit con AI

Script Python che automatizza commit e push con messaggi generati da intelligenza artificiale.

## 📦 Installazione

### Opzione 1: Con Claude API (più accurato)

```bash
# Installa dipendenze
pip install anthropic

# Configura API key
export ANTHROPIC_API_KEY='sk-ant-api03-...'
```

### Opzione 2: Con Ollama (gratis, locale)

```bash
# Installa Ollama (se non ce l'hai già)
# https://ollama.ai

# Scarica un modello
ollama pull llama3.2

# Avvia il server
ollama serve

# Installa dipendenze Python
pip install requests
```

## 🚀 Uso

### Esecuzione continua (ogni 30 minuti)
```bash
# Con Claude
python auto-commit.py --provider claude --interval 30

# Con Ollama
python auto-commit.py --provider ollama --interval 30
```

### Commit singolo (una volta sola)
```bash
# Con Claude
python auto-commit.py --provider claude --once

# Con Ollama
python auto-commit.py --provider ollama --once
```

### Personalizza intervallo (es. ogni 15 minuti)
```bash
python auto-commit.py --interval 15
```

## 📋 Parametri

- `--provider` : `claude` o `ollama` (default: claude)
- `--interval` : Minuti tra un commit e l'altro (default: 30)
- `--once` : Esegui una volta sola e termina

## ✨ Esempi di messaggi generati

```
Aggiunto validator per campo autore nel modello Libro con controllo nome/cognome
```

```
Implementato endpoint POST /libri con validazione Pydantic e gestione errori
```

```
Corretto bug nella validazione anno pubblicazione e aggiornato range valori
```

## 🔧 Come funziona

1. **Controlla modifiche**: Esegue `git status` per vedere se ci sono modifiche
2. **Analizza diff**: Raccoglie le differenze con `git diff HEAD`
3. **Genera messaggio**: Invia diff all'AI per generare un messaggio descrittivo
4. **Commit & Push**: Esegue automaticamente:
   - `git add .`
   - `git commit -m "messaggio generato"`
   - `git push`

## ⚠️ Note importanti

- Lo script committa **TUTTO** (`git add .`) - controlla sempre cosa viene incluso!
- Se non ci sono modifiche, salta il commit
- In caso di errore AI, usa un messaggio fallback con timestamp
- Interrompi con `Ctrl+C`

## 🎯 Consigli d'uso

### Durante sviluppo attivo (ogni 15-30 min)
```bash
python auto-commit.py --interval 15
```

### Prima di pausa/fine giornata (una volta)
```bash
python auto-commit.py --once
```

### In background (macOS/Linux)
```bash
# Avvia in background
nohup python auto-commit.py --interval 30 > auto-commit.log 2>&1 &

# Controlla log
tail -f auto-commit.log

# Ferma processo
pkill -f auto-commit.py
```

## 🛡️ Sicurezza

- ✅ API key tramite variabili d'ambiente (non hardcoded)
- ✅ Ollama è completamente locale (nessun dato inviato online)
- ✅ Claude ha accesso solo al diff git (non a file sensibili)
- ⚠️ Non committare file con segreti (.env, credenziali, ecc.)

## 🐛 Troubleshooting

**"ANTHROPIC_API_KEY non trovata"**
```bash
export ANTHROPIC_API_KEY='tua-api-key'
# O aggiungi a ~/.bashrc o ~/.zshrc
```

**"Ollama non in esecuzione"**
```bash
ollama serve
```

**"Errore durante push"**
- Controlla che la branch abbia un remote configurato
- Verifica di avere permessi di push sul repository

## 💡 Migliorie future

- [ ] Supporto per Conventional Commits (feat:, fix:, ecc.)
- [ ] Filtro file da escludere (gitignore custom)
- [ ] Notifiche desktop quando viene fatto il commit
- [ ] Dashboard web per monitorare i commit
- [ ] Integrazione con altri LLM (GPT-4, Gemini)
