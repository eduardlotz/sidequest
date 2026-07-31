# Sidequest

A local-first mood deck for answering “what should I play?” with one bounded,
game-agnostic quest. Choose a mood, pick one of three cards, and earn points
for completed quests and optional modifiers.

## Run locally

```bash
bun install
bun dev
```

Progress is saved in the browser. There is no account or backend in this first
review version. Mood selections reset after four hours; points, active quests,
and completion history persist locally.

## Scripts

- `bun dev` — start Vite on the project dev port
- `bun run check` — type-check the project
- `bun run build` — produce a production build

## Deployment

Sidequest is a client-only Vite app with browser-local persistence. It does not
need a server runtime, API routes, environment variables, or a database.

- Build command: `bun run build`
- Output directory: `dist`
- Runtime: static hosting
- SPA rewrites: not required while the app has only the root route

`vite.config.ts` uses a relative base URL, so the generated `dist` folder works
on a root domain, a preview URL, or a repository subpath. Vercel, Netlify,
Cloudflare Pages, GitHub Pages, and similar static hosts can all deploy it with
the build and output settings above.
