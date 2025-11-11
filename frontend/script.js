// Replace this after deploying the backend on Render:
const API_BASE = "https://catfacts-fastapi-vanilla.onrender.com";

const btn = document.getElementById("btn");
const out = document.getElementById("output");

btn.addEventListener("click", async () => {
  out.textContent = "Loading...";
  try {
    const r = await fetch(`${API_BASE}/catfact`);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    out.textContent = data.fact;
  } catch (e) {
    out.textContent = `Error: ${e.message}`;
  }
});

