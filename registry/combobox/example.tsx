'use client';

import { useState } from 'react';
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
} from './combobox';

const originalOptions = [
  { value: '1', label: 'File 1' },
  { value: '2', label: 'File 2' },
];

export default function ComboboxExample() {
  const [options, setOptions] = useState(originalOptions);
  const [value, setValue] = useState<string[]>([]);

  return (
    <div>
      <div>{value.join(', ')}</div>
      <ComboboxProvider
        collection={{
          items: options,
        }}
        onInputValueChange={({ inputValue }) => {
          const filtered = originalOptions.filter((item) =>
            item.label.toLowerCase().includes(inputValue.toLowerCase()),
          );
          setOptions(filtered.length > 0 ? filtered : originalOptions);
        }}
        onOpenChange={() => setOptions(originalOptions)}
        onSelect={(selectedValue) => setValue(selectedValue.value)}
      >
        <ComboboxRoot>
          <ComboboxLabel>Select file label</ComboboxLabel>
          <ComboboxInput />
          <ComboboxTrigger>Select file trigger</ComboboxTrigger>
          <ComboboxClearTrigger>X</ComboboxClearTrigger>
          <ComboboxPortal>
            <ComboboxPositioner>
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxItemGroup id="some_id">
                    <ComboboxItemGroupLabel htmlFor="some_id">
                      Group 1
                    </ComboboxItemGroupLabel>
                    {options.map((option) => (
                      <ComboboxItem item={option} key={option.value}>
                        <ComboboxItemText item={option}>
                          {option.label}
                        </ComboboxItemText>
                        <ComboboxItemIndicator item={option} />
                      </ComboboxItem>
                    ))}
                  </ComboboxItemGroup>
                </ComboboxList>
              </ComboboxContent>
            </ComboboxPositioner>
          </ComboboxPortal>
        </ComboboxRoot>
      </ComboboxProvider>
    </div>
  );
}
