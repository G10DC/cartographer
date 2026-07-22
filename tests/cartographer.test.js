import { describe, it } from 'node:test';
import assert from 'node:assert';
import { Cartographer } from '../lib/cartographer.js';

describe('Cartographer', () => {
  it('parses import statements from JS code', () => {
    const cartographer = new Cartographer();
    const code = `import fs from 'fs';\nimport { helper } from './utils.js';`;
    const imports = cartographer.parseImports(code, 'app.js');
    assert.deepStrictEqual(imports, ['fs', './utils.js']);
  });

  it('generates valid mermaid graph syntax', () => {
    const cartographer = new Cartographer();
    const fileMap = {
      'app.js': ['./utils.js'],
      'utils.js': []
    };
    const mermaid = cartographer.generateMermaidGraph(fileMap);
    assert.match(mermaid, /```mermaid/);
    assert.match(mermaid, /app_js\["app\.js"\] --> __utils_js\["\.\/utils\.js"\]/);
  });
});
