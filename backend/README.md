# Backend for Portfolio (Express)

This backend adds:
- Secret upload page at **/upload** for uploading resume & creating posts
- Resume endpoints: `GET /api/resume`, `GET /resume/download`, static `/uploads/resume.pdf`
- Posts endpoints: `GET /api/posts` (reads from `backend/uploads/posts.json`), media served from `/uploads/posts-media/*`
- Projects endpoint: `GET /api/projects` (fetches from GitHub for `GITHUB_USERNAME`)

## Run locally

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Then open the secret admin: http://localhost:8080/upload

> Keep the URL private (no auth as requested).

## Build & serve frontend from backend (optional)

Build the React app from the project root:

```bash
npm install
npm run build
```

If the `dist/` folder exists, the backend will serve it automatically.

## Deploy (free)

- **Render**: Create a new Web Service from the `backend/` folder. Set `Start Command` to `npm start`. Add env vars:
  - `GITHUB_USERNAME=vendotha` (or your username)
  - Optional: `ALLOWED_ORIGIN=https://your-frontend-domain`
- **Netlify/Vercel**: Deploy the React frontend separately. Point the frontend to the backend domain for `/api/*` and `/uploads/*`.

## Frontend wiring (no UI changes)

- **Resume**: Call `GET /api/resume` to get the file URL to show + enable "Download" linking to `/resume/download`.
- **Posts**: Call `GET /api/posts` and render in your LinkedIn-styled component.
- **Projects**: Call `GET /api/projects` and map to your Projects grid/cards.
