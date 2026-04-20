# `use` Hook on the Client Side with Suspense

A demo project showcasing how to leverage React 19's [`use`](https://react.dev/reference/react/use) hook on the client
side in combination with the [`<Suspense>`](https://react.dev/reference/react/Suspense) component for seamless async
data loading.

**Live demo:** https://rdeak.github.io/react-use-only-client/

## Overview

This project demonstrates a practical pattern where:

1. A `Promise` is created on demand (e.g. on a button click) and stored in component state.
2. The `Promise` is passed as a prop into a child component.
3. The child component consumes it with the `use` hook, which suspends rendering until the data resolves.
4. The parent wraps the child in `<Suspense>`, showing a fallback UI while the promise is pending.

The demo explores the Croatian national football team squad from the 2018 World Cup. Clicking a player's shirt reveals
their details after a simulated async fetch.

## Key Concepts

| Concept                     | Role in this demo                                              |
|-----------------------------|----------------------------------------------------------------|
| `use(promise)`              | Reads a promise inside a component; suspends until it resolves |
| `<Suspense fallback={...}>` | Catches the suspension and renders a fallback (e.g. a loader)  |
| `useState<Promise>`         | Holds the in-flight promise so it can be passed down as a prop |

## Tech Stack

- **React 19** — `use` hook, `<Suspense>`
- **TypeScript**
- **Vite**
- **Tailwind CSS**

## License

MIT