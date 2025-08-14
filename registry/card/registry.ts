import { getRegistryItem, type RegistryItem } from '~/utils/registry-utils';

export const cardRegistry: RegistryItem = {
  name: 'card',
  type: 'registry:component',
  files: [
    {
      path: getRegistryItem(import.meta.url, 'card.tsx'),
      type: 'registry:ui',
      dependencies: ['@radix-ui/react-slot'],
    },
  ],
};
