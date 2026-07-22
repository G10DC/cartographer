---
name: cartographer
description: Visual codebase and architecture diagram generator. Scans codebase dependencies, file structures, and imports to generate clean, readable Mermaid diagrams for architectural documentation.
---

# 🗺️ Cartographer

Automated Visual Codebase & Architecture Mapper. Cartographer extracts module structures, class hierarchies, and file imports from a codebase and renders clean Mermaid diagrams (`graph TD`, `sequenceDiagram`, `classDiagram`).

## 🎯 Features

1. **Dependency Graphs**: Renders module-level import/export graphs.
2. **Directory Trees**: Generates visual architecture flow diagrams.
3. **Mermaid Output**: Produces GitHub-flavored Markdown compatible diagram blocks.

## 🚀 Execution Guide

Scan directory and output architecture diagram:
```bash
node C:/Users/GdC/.gemini/config/skills/cartographer/lib/cartographer.js --dir "."
```
