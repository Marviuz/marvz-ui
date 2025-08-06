import { resolve } from 'node:path';
import ComboboxExample from './combobox/example';
import TabsExample from './tabs/example';
import CardExample from './card/example';

function getPath(path: string) {
  return resolve(process.cwd(), 'registry', path);
}

export const registry = {
  Combobox: {
    Example: ComboboxExample,
    path: getPath('./combobox/example.tsx'),
  },
  Tabs: {
    Example: TabsExample,
    path: getPath('./tabs/example.tsx'),
  },
  Card: {
    Example: CardExample,
    path: getPath('./card/example.tsx'),
  },
} as const;

export type Registry = typeof registry;
