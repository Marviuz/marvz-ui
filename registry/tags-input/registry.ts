import { getRegistryItem, type RegistryItem } from '~/utils/registry-utils';

export const tagsInputRegistry: RegistryItem = {
  name: 'tags-input',
  type: 'registry:component',
  files: [
    {
      path: getRegistryItem(import.meta.url, 'tags-input.tsx'),
      type: 'registry:ui',
      dependencies: [
        '@radix-ui/react-slot',
        '@zag-js/tags-input',
        '@zag-js/react',
      ],
    },
  ],
  registryDependencies: ['input', 'label', 'badge'],
};
