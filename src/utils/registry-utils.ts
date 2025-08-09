import { relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';

export type RegistryItem = {
  name: string;
  type: 'registry:component';
  files: {
    path: string;
    type: 'registry:ui';
    dependencies?: string[];
  }[];
};

/**
 * Get the path to a registry item.
 *
 * @param value - The URL of the registry item.
 * @param component - The component name.
 * @returns The path to the registry item.
 */
export function getRegistryItem(value: string, component: string) {
  const fn = fileURLToPath(value);
  const registry = fn.replace('registry.ts', component);
  return relative(process.cwd(), registry);
}

export async function getRegistryContent(file: string) {
  const content = await fs.readFile(file);
  return content.toString();
}
