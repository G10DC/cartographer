import fs from 'fs';
import path from 'path';

/**
 * Cartographer Architecture & Graph Generator
 */
export class Cartographer {
  parseImports(fileContent, filePath) {
    const imports = [];
    const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
    let match;

    while ((match = importRegex.exec(fileContent)) !== null) {
      imports.push(match[1]);
    }
    return imports;
  }

  generateMermaidGraph(fileMap) {
    let mermaid = '```mermaid\ngraph TD\n';
    const sanitizeNode = name => name.replace(/[^a-zA-Z0-9_]/g, '_');

    for (const [file, imports] of Object.entries(fileMap)) {
      const sourceNode = sanitizeNode(file);
      if (imports.length === 0) {
        mermaid += `    ${sourceNode}["${file}"]\n`;
      } else {
        imports.forEach(imp => {
          const targetNode = sanitizeNode(imp);
          mermaid += `    ${sourceNode}["${file}"] --> ${targetNode}["${imp}"]\n`;
        });
      }
    }

    mermaid += '```\n';
    return mermaid;
  }
}

// CLI Handler
if (process.argv[1] && process.argv[1].endsWith('cartographer.js')) {
  const args = process.argv.slice(2);
  const cartographer = new Cartographer();
  const dirIdx = args.indexOf('--dir');
  const targetDir = dirIdx !== -1 && args[dirIdx + 1] ? path.resolve(args[dirIdx + 1]) : process.cwd();

  const fileMap = {};
  if (fs.existsSync(targetDir)) {
    const files = fs.readdirSync(targetDir).filter(f => /\.(js|mjs|ts|jsx|tsx)$/.test(f));
    files.forEach(f => {
      const content = fs.readFileSync(path.join(targetDir, f), 'utf8');
      fileMap[f] = cartographer.parseImports(content, f);
    });
  }

  console.log(cartographer.generateMermaidGraph(fileMap));
}
