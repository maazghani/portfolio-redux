# Maaz Ghani — Terminal Portfolio

A Catppuccin Frappé terminal-inspired personal portfolio built with Next.js and
OpenNext for deployment through Sites.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
npm run build:worker
npm run bundle:sites
```

`bundle:sites` performs Wrangler's final compatibility bundling pass and writes
the production-ready worker to `.sites-bundle/worker.js`.
