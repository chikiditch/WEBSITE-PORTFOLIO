# WEBSITE-PORTFOLIO — Codebase Overview (metadata.json + vite config + removing Gemini key)

## Summary
This repo is a **Vite + React (TypeScript/TSX)** single-page portfolio site. The UI is mostly **hardcoded** in `src/App.tsx` (with placeholders like `[Your Name]`), styled with **Tailwind CSS**, and animated with **motion/react**. The runtime React code in `src/` does **not** appear to call Gemini or read `metadata.json`; “Gemini” wiring exists only in build/config + dependencies + README instructions.

## Architecture
- **Pattern**: simple SPA with one React root component.
- **Major subsystems**
  - `src/main.tsx`: mounts React to `#root`
  - `src/App.tsx`: entire portfolio page content (header, hero, about, skills, projects, contact, footer)
  - `vite.config.ts`: Vite build/dev configuration (React + Tailwind plugins, alias, dev-server HMR toggle, and an unused Gemini env define)
  - `metadata.json`: manifest-style metadata (name/description/capabilities) likely intended for an external hosting/platform integration
- **Execution start (runtime)**
  1. Browser loads `index.html`
  2. `index.html` loads `/src/main.tsx`
  3. `src/main.tsx` renders `<App />` into the DOM

## Directory Structure
```txt
project-root/
├── src/
│   ├── main.tsx        — React entrypoint
│   ├── App.tsx         — Portfolio UI (hardcoded sections)
│   └── index.css       — Tailwind + base styles/theme
├── index.html          — Static HTML shell + hardcoded <title>
├── vite.config.ts      — Vite plugins/alias/env define/HMR config
├── metadata.json       — Platform metadata (not consumed by React code in this repo)
├── package.json        — Dependencies/scripts
└── README.md           — Run instructions (includes Gemini API key step)
```

## Key Abstractions

### `App` (React component)
- **File**: `src/App.tsx`
- **Responsibility**: Owns all visible portfolio sections and layout.
- **Interface**: `export default function App() { ... }` (no props)
- **Lifecycle**: Rendered once by the root bootstrap.
- **Used by**: `src/main.tsx`

### React bootstrap
- **File**: `src/main.tsx`
- **Responsibility**: Mounts the app.
- **Interface**: `createRoot(...).render(<StrictMode><App/></StrictMode>)`
- **Used by**: Browser via `<script type="module" src="/src/main.tsx">`

### Vite configuration
- **File**: `vite.config.ts`
- **Responsibility**: Configure dev/build for React + Tailwind, aliasing, and optionally inject env vars.
- **Key settings**
  - `plugins: [react(), tailwindcss()]`
  - `resolve.alias: { '@': path.resolve(__dirname, '.') }`
  - `server.hmr` toggled by `DISABLE_HMR`
  - `define` currently injects `process.env.GEMINI_API_KEY` (but the React app does not reference it)

### `metadata.json`
- **File**: `metadata.json`
- **Responsibility**: Stores portfolio/site metadata:
  - `name`, `description`
  - `requestFramePermissions`, `majorCapabilities` (both empty arrays)
- **Used by**: Not used by React/Vite code in `src/` (based on filename/contents searches we performed).

## Data Flow
1. `index.html` (hardcoded title) → loads `src/main.tsx`
2. `src/main.tsx` mounts `<App />`
3. `src/App.tsx` renders static content and animations
4. No Gemini/tool API calls were found in `src/` during inspection

## Non-Obvious Behaviors & Design Decisions

### Gemini API key wiring exists but appears unused by the frontend
- `vite.config.ts` injects `process.env.GEMINI_API_KEY` using Vite’s `define`.
- However, searches in `src/` did not reveal any usage of `@google/genai` or `GEMINI_API_KEY`.
- **Meaning**: removing this wiring should not affect the current static portfolio UI.

### `metadata.json` is not consumed by the React app
- `index.html` uses a hardcoded `<title>` and `src/App.tsx` uses hardcoded placeholders.
- `metadata.json` contains metadata that looks intended for an external platform (e.g., AI Studio/deployment manifest), but it’s not read by the React runtime in this repo.

## Direct Answers

### What is `metadata.json` for?
It’s a **manifest-style metadata file** describing the site/app:
- `name` and `description` for display/registration/SEO-like summaries
- `requestFramePermissions` and `majorCapabilities` for platform capability declaration  
In this repo’s current frontend code, it is **not referenced**.

### What is `vite.config.ts` for?
It configures Vite’s behavior:
- enables React and Tailwind plugins
- defines the `@` import alias
- controls dev-server HMR (can be disabled with `DISABLE_HMR=true`)
- contains an unused env-var injection for `GEMINI_API_KEY`

### If you don’t need Gemini API key / `.env` for live preview, what to remove?
Based on the repo references found:
1. **`vite.config.ts`**
   - Remove the `define` entry that injects `process.env.GEMINI_API_KEY`
   - Optionally remove `loadEnv` usage/import if it becomes unused.
2. **`package.json`**
   - Remove `@google/genai` dependency if the frontend truly doesn’t import it.
3. **`README.md`**
   - Remove the step instructing you to set `GEMINI_API_KEY` in `.env.local`.

## Suggested Reading Order
1. `src/main.tsx` — how the app starts
2. `src/App.tsx` — what the UI is
3. `vite.config.ts` — build/dev config and Gemini env injection
4. `index.html` — static shell/title
5. `metadata.json` — what platform metadata is stored
6. `README.md` — local run instructions and the Gemini step
