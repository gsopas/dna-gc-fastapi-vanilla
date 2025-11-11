# Cat Facts (FastAPI + Vanilla JS)

Backend: FastAPI
- GET /ping -> {"ok": true}
- GET /catfact -> {"fact": "..."}

Frontend: simple HTML/JS that fetches from /catfact

Render Start command:
uvicorn backend.app:app --host 0.0.0.0 --port $PORT

