// set this after you deploy the backend on Railway
const API_BASE = "https://YOUR-RAILWAY-APP.up.railway.app";

const form = document.getElementById("dna-form");
const seqEl = document.getElementById("seq");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  result.textContent = "Working...";
  const seq = seqEl.value.trim();
  try {
    const r = await fetch(`${API_BASE}/gc`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ seq })
    });
    if (!r.ok) {
      const err = await r.json().catch(()=>({}));
      throw new Error(err.detail || `HTTP ${r.status}`);
    }
    const data = await r.json();
    result.textContent = `GC% = ${data.gc_percent}`;
  } catch (e) {
    result.textContent = `Error: ${e.message}`;
  }
});

