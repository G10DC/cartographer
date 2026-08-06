import test from 'node:test';
import assert from 'node:assert/strict';
import { CartographerDiagrammer } from '../lib/cartographer.js';

test('CartographerDiagrammer generates valid Mermaid diagram from Trellis index', () => {
  const diag = new CartographerDiagrammer();
  const mockTrellisIndex = {
    nodes: [{ id: 'app.js', label: 'App Module' }, { id: 'db.js', label: 'DB Client' }],
    edges: [{ from: 'app.js', to: 'db.js', tier: 2 }]
  };

  const res = diag.generateMermaidDiagram(mockTrellisIndex);
  assert.equal(res.nodeCount, 2);
  assert.equal(res.edgeCount, 1);
  assert.ok(res.mermaid.includes('app_js["App Module"]'));
  assert.ok(res.mermaid.includes('app_js -- "tier 2" --> db_js'));
});
