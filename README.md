# This Next Thing

Using [Astro]() and [Vue.js]() to build a modern, performant website.

## Running locally

`npm run dev` to get a local server with live-reloading etc.

## Deployment

The site is served by GitHub Pages from the `gh-pages` branch. Deploys are built locally and shipped with:

```
npm run deploy
```

which runs `astro build` and pushes `dist/` to `gh-pages`. The custom domain comes from `public/CNAME`.