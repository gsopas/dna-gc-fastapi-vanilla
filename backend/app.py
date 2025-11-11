from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# For learning, we allow all origins. Later you can restrict this.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ping")
def ping():
    return {"ok": True}

@app.get("/catfact")
def catfact():
    r = httpx.get("https://catfact.ninja/fact", timeout=10)
    r.raise_for_status()
    data = r.json()
    return {"fact": data.get("fact", "No fact")}

