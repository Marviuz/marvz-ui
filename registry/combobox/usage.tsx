/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/ban-ts-comment -- usage file only */
// @ts-nocheck -- usage file only

'use client';

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

export default function ComboboxUsage() {
  return (
    <ComboboxProvider>
      <ComboboxRoot>
        <ComboboxLabel>Pick Option</ComboboxLabel>
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

/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/ban-ts-comment -- usage file only */
