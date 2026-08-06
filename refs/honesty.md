# Cartographer Visual Architecture Honesty Layer

The honesty layer is the operational expression of the **G10DC Trellis Standard**: **the processing engine reasons over verified evidence with stated confidence, never hallucinates capabilities or impact.**

## Domain & Scope
**Domain**: Mermaid Diagram Code Graph Rendering

## Core Epistemic Rules

1. **Visual Simplification: Diagrams simplify complex AST graphs into node clusters to maintain visual scannability.**
2. **Source Provenance: Consumes trellis index graphs directly — does NOT re-parse AST independently.**
3. **Confidence Rating: High (derived from tier-2 trellis graph), Medium (tier-1 manifest graph), Low (inferred nodes).**

## Three-Tier Confidence Model

- **High Confidence**: Full AST/schema validation passing, deterministic evidence available, verified state.
- **Medium Confidence**: Heuristic analysis or partial indexing; requires agent verification step.
- **Low Confidence**: Inferred or unindexed target; candidate output ONLY, never auto-committed.

## Epistemic Invariant

> Absence of evidence is not evidence of absence. Output is presented as a structured candidate set with confidence scores so caveats cannot be silently dropped downstream.
