---
name: cartographer
description: >-
  Visual codebase and architecture diagram generator. Consumes dependency graphs
  from trellis and file structures to generate clean, readable Mermaid diagrams
  for architectural documentation. Use when you need a visual map of module
  dependencies or project structure. Never rebuild the dependency graph yourself
  -- consume trellis output; never use for runtime call tracing.
---

# ️ Cartographer

Automated Visual Codebase & Architecture Mapper. Cartographer extracts module structures, class hierarchies, and file imports from a codebase and renders clean Mermaid diagrams (`graph TD`, `sequenceDiagram`, `classDiagram`).

## Features

1. **Dependency Graphs**: Renders module-level import/export graphs.
2. **Directory Trees**: Generates visual architecture flow diagrams.
3. **Mermaid Output**: Produces GitHub-flavored Markdown compatible diagram blocks.

## Execution Guide

Scan directory and output architecture diagram:
```bash
node lib/cartographer.js --dir "."
```


---

## Spark Breakthrough Enhancement

- **Feature**: **3D Interactive Mermaid Visualizer**
- **Description**: Transforms static architecture graphs into interactive, click-to-code visual canvases.
- **Synergy**: Integrated with `artisan` (dashboard UI) & `trellis` (reachability).
- **Framework**: Applied via the `spark` 4-Lens Lateral Ideation Engine.


## When to use

- Primary domain workflow execution as specified in frontmatter description.


## When NOT to use

- Tasks outside declared skill scope or handled by specialized sibling skills.
