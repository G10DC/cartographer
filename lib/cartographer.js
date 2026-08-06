/**
 * Cartographer — Visual Codebase & Architecture Diagram Generator
 */
export class CartographerDiagrammer {
  /**
   * Converts a Trellis graph index into a structured Mermaid diagram string.
   */
  generateMermaidDiagram(trellisGraphIndex = {}) {
    const nodes = trellisGraphIndex.nodes || [];
    const edges = trellisGraphIndex.edges || [];

    let mermaid = 'graph TD\n';

    if (nodes.length === 0) {
      mermaid += '    Empty["No AST nodes indexed"]\n';
    } else {
      for (const node of nodes) {
        const cleanId = String(node.id || node).replace(/[^a-zA-Z0-9_]/g, '_');
        const label = node.label || node.id || node;
        mermaid += `    ${cleanId}["${label}"]\n`;
      }

      for (const edge of edges) {
        const fromClean = String(edge.from).replace(/[^a-zA-Z0-9_]/g, '_');
        const toClean = String(edge.to).replace(/[^a-zA-Z0-9_]/g, '_');
        const link = edge.tier ? `-- "tier ${edge.tier}" -->` : '-->';
        mermaid += `    ${fromClean} ${link} ${toClean}\n`;
      }
    }

    return {
      mermaid,
      nodeCount: nodes.length,
      edgeCount: edges.length,
      honest: 'Consumes trellis graph indexes directly; visual nodes simplified for scannability.'
    };
  }
}
