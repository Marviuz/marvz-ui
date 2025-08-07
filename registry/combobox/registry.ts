import { getRegistryItem, type RegistryItem } from '~/utils/registry-utils';

export const combobxRegistry: RegistryItem = {
  name: 'combobox',
  type: 'registry:component',
  files: [
    {
      path: getRegistryItem(import.meta.url, 'combobox.tsx'),
      type: 'registry:ui',
      dependencies: [
        '@radix-ui/react-slot',
        '@zag-js/combobox',
        '@zag-js/react',
      ],
    },
  ],
};
