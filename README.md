# DNA GC% Calculator — FastAPI + Vanilla JS

- Backend: FastAPI (`/ping`, `POST /gc`) on Railway  
- Frontend: HTML/CSS/JS on GitHub Pages (`/docs`)

## Local
pip install -r backend/requirements.txt
uvicorn backend.app:app --host 0.0.0.0 --port 8000

Set in docs/script.js:
const API_BASE = "http://localhost:8000"

## Railway
Build: pip install -r backend/requirements.txt
Start: uvicorn backend.app:app --host 0.0.0.0 --port $PORT
Health: /ping

