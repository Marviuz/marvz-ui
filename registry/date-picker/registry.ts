import {
  getRegistryInstallPath,
  getRegistryItem,
  type RegistryItem,
} from '~/utils/registry-utils';

export const datePickerRegistry: RegistryItem = {
  name: 'date-picker',
  type: 'registry:component',
  files: [
    {
      path: getRegistryItem(import.meta.url, 'date-picker.tsx'),
      type: 'registry:ui',
      dependencies: [
        '@radix-ui/react-slot',
        '@zag-js/date-picker',
        '@zag-js/react',
        'lucide-react',
      ],
    },
  ],
  registryDependencies: [
    'button',
    'input',
    'label',
    getRegistryInstallPath('card'),
  ],
};
