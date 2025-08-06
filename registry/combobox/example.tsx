'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import {
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
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
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

export default function ComboboxExample() {
  const [options, setOptions] = useState(originalOptions);
  const [value, setValue] = useState<string[]>([]);

  return (
    <ComboboxProvider
      collection={{
        items: options,
      }}
      value={value}
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
        <ComboboxControl>
          <ComboboxInput />
          <ComboboxTrigger size="icon" variant="ghost">
            <ChevronDown />
          </ComboboxTrigger>
          <ComboboxClearTrigger size="icon" variant="ghost">
            <X />
          </ComboboxClearTrigger>
        </ComboboxControl>
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
  );
}
