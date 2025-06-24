import recommended from '@marviuz/eslint-config/recommended';
import typescript from '@marviuz/eslint-config/typescript';
import react from '@marviuz/eslint-config/react';
import next from '@marviuz/eslint-config/next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['*.config.mjs', '*.source/*'] },
  ...recommended,
  ...typescript,
  ...react,
  ...next,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
];
