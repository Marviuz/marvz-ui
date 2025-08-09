import { resolve } from 'node:path';
import CardExample from './card/example';
import { ColorPickerExample } from './color-picker/example';
import ComboboxExample from './combobox/example';
import DatePickerExample from './date-picker/example';
import TabsExample from './tabs/example';
import { colorPickerRegistry } from './color-picker/registry';

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
  DatePicker: {
    Example: DatePickerExample,
    path: getPath('./date-picker/example.tsx'),
  },
  ColorPicker: {
    Example: ColorPickerExample,
    path: getPath('./color-picker/example.tsx'),
    dependencies: colorPickerRegistry.files
      .map((f) => f.dependencies ?? [])
      .flat(),
  },
} as const;

export type Registry = typeof registry;
