'use client';

import { collection } from '@zag-js/combobox';
import {
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxList,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxProvider,
  ComboboxRoot,
  ComboboxTrigger,
} from '~registry/combobox/combobox';

export default function Home() {
  return (
    <main>
      <ComboboxProvider
        collection={collection({
          items: [
            { value: '1', label: 'File 1' },
            { value: '2', label: 'File 2' },
          ],
        })}
      >
        <ComboboxRoot>
          <ComboboxLabel>Select file label</ComboboxLabel>
          <ComboboxInput />
          <ComboboxTrigger>Select file</ComboboxTrigger>
          <ComboboxClearTrigger>X</ComboboxClearTrigger>
          <ComboboxPortal>
            <ComboboxPositioner>
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxItemGroup id="some_id">
                    <ComboboxItemGroupLabel htmlFor="some_id">
                      Group 1
                    </ComboboxItemGroupLabel>
                    <ComboboxItem item={{ value: '1', label: 'File 1' }}>
                      <ComboboxItemText item={{ value: '1', label: 'File 1' }}>
                        File 1
                      </ComboboxItemText>
                      <ComboboxItemIndicator
                        item={{ value: '1', label: 'File 1' }}
                      />
                    </ComboboxItem>
                    <ComboboxItem item={{ value: '2', label: 'File 2' }}>
                      <ComboboxItemText item={{ value: '2', label: 'File 2' }}>
                        File 2
                      </ComboboxItemText>
                      <ComboboxItemIndicator
                        item={{ value: '2', label: 'File 2' }}
                      />
                    </ComboboxItem>
                  </ComboboxItemGroup>
                </ComboboxList>
              </ComboboxContent>
            </ComboboxPositioner>
          </ComboboxPortal>
        </ComboboxRoot>
      </ComboboxProvider>
    </main>
  );
}
