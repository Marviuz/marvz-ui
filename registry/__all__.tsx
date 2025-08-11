import { resolve } from 'node:path';
import CardExample from './card/example';
import { ColorPickerExample } from './color-picker/example';
import ComboboxExample from './combobox/example';
import DatePickerExample from './date-picker/example';
import TabsExample from './tabs/example';
import { colorPickerRegistry } from './color-picker/registry';
import { datePickerRegistry } from './date-picker/registry';
import { cardRegistry } from './card/registry';
import { tabsRegistry } from './tabs/registry';
import { comboboxRegistry } from './combobox/registry';

function getPath(path: string) {
  return resolve(process.cwd(), 'registry', path);
}

export const registry = {
  Combobox: {
    Example: ComboboxExample,
    path: getPath('./combobox/example.tsx'),
    componentPath: getPath('./combobox/combobox.tsx'),
    usagePath: getPath('./combobox/example.tsx'),
    dependencies: comboboxRegistry.files
      .map((f) => f.dependencies ?? [])
      .flat(),
  },
  Tabs: {
    Example: TabsExample,
    path: getPath('./tabs/example.tsx'),
    componentPath: getPath('./tabs/tabs.tsx'),
    usagePath: getPath('./tabs/example.tsx'),
    dependencies: tabsRegistry.files.map((f) => f.dependencies ?? []).flat(),
  },
  Card: {
    Example: CardExample,
    path: getPath('./card/example.tsx'),
    componentPath: getPath('./card/card.tsx'),
    usagePath: getPath('./card/usage.tsx'),
    dependencies: cardRegistry.files.map((f) => f.dependencies ?? []).flat(),
  },
  DatePicker: {
    Example: DatePickerExample,
    path: getPath('./date-picker/example.tsx'),
    componentPath: getPath('./date-picker/date-picker.tsx'),
    usagePath: getPath('./date-picker/example.tsx'),
    dependencies: datePickerRegistry.files
      .map((f) => f.dependencies ?? [])
      .flat(),
  },
  ColorPicker: {
    Example: ColorPickerExample,
    path: getPath('./color-picker/example.tsx'),
    componentPath: getPath('./color-picker/color-picker.tsx'),
    usagePath: getPath('./color-picker/example.tsx'),
    dependencies: colorPickerRegistry.files
      .map((f) => f.dependencies ?? [])
      .flat(),
  },
} as const;

export type Registry = typeof registry;
