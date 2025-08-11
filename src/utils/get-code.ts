import * as recast from 'recast';

export function extractImportsAndJSX(code: string): {
  imports: string;
  jsx: string;
} {
  const ast = recast.parse(code) as recast.types.ASTNode;

  const imports: string[] = [];
  let jsxCode = '';

  recast.types.visit(ast, {
    visitImportDeclaration(path) {
      imports.push(recast.print(path.node).code);
      return false;
    },
    visitFunctionDeclaration(path) {
      const fn = path.node;
      for (const stmt of fn.body.body) {
        if (stmt.type === 'ReturnStatement' && stmt.argument) {
          jsxCode = recast.print(stmt.argument).code;
          break;
        }
      }

      return false;
    },
  });

  return {
    imports: imports.join('\n'),
    jsx: jsxCode,
  };
}
