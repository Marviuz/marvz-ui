import { getRegistryItem, type RegistryItem } from '~/utils/registry-utils';

export const tabsRegistry: RegistryItem = {
  name: 'tabs',
  type: 'registry:component',
  files: [
    {
      path: getRegistryItem(import.meta.url, 'tabs.tsx'),
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-slot', '@zag-js/tabs', '@zag-js/react'],
    },
  ],
};
