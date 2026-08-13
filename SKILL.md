---
name: cartographer
status: stub
description: >-
  Visual codebase and architecture diagram generator. Consumes dependency graphs
  from trellis and file structures to generate clean, readable Mermaid diagrams
  for architectural documentation. Use when you need a visual map of module
  dependencies or project structure. Never rebuild the dependency graph yourself
  -- consume trellis output; never use for runtime call tracing.
---

# Cartographer

**Mermaid diagram formatter for an already-built graph.** Doesn't build a dependency graph or read the filesystem — takes a `{ nodes, edges }` structure the caller already assembled and formats it as a `graph TD` Mermaid block.

## What it actually does
`generateMermaidDiagram(graphIndex)` walks `nodes`/`edges`, sanitizes IDs, emits `graph TD` syntax
with edge labels from `edge.tier` when present. That's the entire implementation.

## What it does not do (despite the name)
- **No graph construction** — no parser, no filesystem scan, no import resolution.
- **No `trellis` integration in code** — despite the doc claim, nothing imports `trellis` or
  reads its output files. You must build the `{ nodes, edges }` structure yourself.
- **Only `graph TD`** — no class/sequence diagrams, no interactive output.

## Usage (library, not a CLI)

```js
import { CartographerDiagrammer } from './lib/cartographer.js';

// You must supply the graph -- cartographer builds nothing itself.
const graph = { nodes: [{ id: 'a' }, { id: 'b' }], edges: [{ from: 'a', to: 'b', tier: 0 }] };
const { mermaid } = new CartographerDiagrammer().generateMermaidDiagram(graph);
```

## When to use

- You already have a `{ nodes, edges }` graph (hand-built or `trellis`-shaped) and want it
  rendered as Mermaid without writing the formatting code yourself.

## When NOT to use

- **The graph needs building from source** — nothing here reads a codebase; build it first.
- **Anything beyond a flowchart** — class/sequence diagrams, interactive canvas: not implemented.
