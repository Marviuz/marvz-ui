import { getRegistryItem, type RegistryItem } from '~/utils/registry-utils';

export const colorPickerRegistry: RegistryItem = {
  name: 'color-picker',
  type: 'registry:component',
  files: [
    {
      path: getRegistryItem(import.meta.url, 'color-picker.tsx'),
      type: 'registry:ui',
      dependencies: [
        '@radix-ui/react-slot',
        '@zag-js/color-picker',
        '@zag-js/react',
      ],
    },
  ],
};
