import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();

// CORS (allow frontend requests from Vite/Render)
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------- Health Check -----------------
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend running" });
});

// ----------------- Projects API (GitHub) -----------------
app.get('/api/projects', async (req, res) => {
  const username = process.env.GITHUB_USERNAME || 'vendotha';
  try {
    const headers = { 'Accept': 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const resp = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers }
    );
    const data = await resp.json();

    if (!Array.isArray(data)) return res.status(500).json([]);

    const projects = data.map(r => ({
      id: r.id ?? 0,
      name: r.name ?? '',
      description: r.description ?? '',
      html_url: r.html_url ?? '',
      homepage: r.homepage ?? '',
      stars: r.stargazers_count ?? 0,
      forks: r.forks_count ?? 0,
      language: r.language ?? '',
      topics: Array.isArray(r.topics) ? r.topics : [],
      updated_at: r.updated_at ?? ''
    }));

    res.json(projects);
  } catch (e) {
    console.error(e);
    res.status(500).json([]);
  }
});

// ----------------- Serve React Frontend -----------------
const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
