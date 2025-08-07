/* eslint-disable no-console -- debug replaceRegistry */

import { writeFile } from 'node:fs/promises';
import { relative } from 'node:path';
import { type RegistryItem } from '~/utils/registry-utils';
import { cardRegistry } from '~registry/card/registry';
import { combobxRegistry } from '~registry/combobox/registry';
import { datePickerRegistry } from '~registry/date-picker/registry';
import { tabsRegistry } from '~registry/tabs/registry';

const registries = [
  combobxRegistry,
  cardRegistry,
  tabsRegistry,
  datePickerRegistry,
].sort(
  (a, b) => a.name.localeCompare(b.name), // Sort by name... just make it look nice in registry.json
);

export const initialRegistry = {
  $schema: 'https://ui.shadcn.com/schema/registry.json',
  name: 'ui.marviuz.me',
  homepage: 'https://example.com',
  items: [] as RegistryItem[],
} as const;

for (const r of registries) {
  initialRegistry.items.push(r);
}

const newRegistry = JSON.stringify(initialRegistry, null, 2);

async function replaceRegistry() {
  await writeFile(relative(process.cwd(), 'registry.json'), newRegistry);
}

replaceRegistry()
  .then(() => console.log('Registry updated!'))
  .catch((err) => console.error(err));

/* eslint-enable no-console -- re-enable */
