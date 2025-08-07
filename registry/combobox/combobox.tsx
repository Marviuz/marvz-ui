/* eslint-disable @typescript-eslint/no-unsafe-assignment -- items can be anything */

'use client';

import { Slot } from '@radix-ui/react-slot';
import * as combobox from '@zag-js/combobox';
import {
  normalizeProps,
  Portal,
  useMachine,
  type PropTypes,
} from '@zag-js/react';
import {
  createContext,
  use,
  useId,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { cn } from '~/lib/utils';

type AsChild = {
  asChild?: boolean;
};

const ComboboxContext = createContext<combobox.Api<PropTypes> | null>(null);

function useApi() {
  const ctx = use(ComboboxContext);
  if (!ctx) throw new Error('Should be inside a <ComboboxProvider>');
  return ctx;
}

export type ComboboxProps = {
  children?: ReactNode;
  id?: string;
  collection: Parameters<typeof combobox.collection>[0];
} & Omit<combobox.Props, 'id' | 'collection'>;

export function ComboboxProvider({
  children,
  id: idProp,
  collection,
  ...props
}: ComboboxProps) {
  const id = useId();
  const service = useMachine(combobox.machine, {
    id: idProp ?? id,
    collection: combobox.collection(collection),
    ...props,
  });
  const api = combobox.connect(service, normalizeProps);
  return <ComboboxContext value={api}>{children}</ComboboxContext>;
}

export function ComboboxRoot({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('grid gap-2', className)}
      data-slot="combobox-root"
      {...api.getRootProps()}
      {...props}
    />
  );
}

export function ComboboxLabel(props: ComponentProps<typeof Label>) {
  const api = useApi();
  return (
    <Label data-slot="combobox-label" {...api.getLabelProps()} {...props} />
  );
}

export function ComboboxControl({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('flex gap-2', className)}
      data-slot="combobox-control"
      {...api.getControlProps()}
      {...props}
    />
  );
}

export function ComboboxTrigger({
  focusable,
  ...props
}: ComponentProps<typeof Button> & combobox.TriggerProps) {
  const api = useApi();
  return (
    <Button
      data-slot="combobox-trigger"
      {...api.getTriggerProps({ focusable })}
      {...props}
    />
  );
}

export function ComboboxClearTrigger(props: ComponentProps<typeof Button>) {
  const api = useApi();
  return (
    <Button
      data-slot="combobox-clear-trigger"
      {...api.getClearTriggerProps()}
      {...props}
    />
  );
}

export function ComboboxInput(props: ComponentProps<typeof Input>) {
  const api = useApi();
  return <Input {...api.getInputProps()} {...props} />;
}

export const ComboboxPortal = Portal;

export function ComboboxPositioner({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('mt-1 w-full', className)}
      data-slot="combobox-positioner"
      {...api.getPositionerProps()}
      {...props}
    />
  );
}

export function ComboboxContent({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn(
        'bg-popover text-popover-foreground w-[var(--reference-width)] rounded-md border shadow-md',
        className,
      )}
      data-slot="combobox-content"
      {...api.getContentProps()}
      {...props}
    />
  );
}

export function ComboboxList({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('max-h-60 overflow-y-auto p-1', className)}
      data-slot="combobox-list"
      {...api.getListProps()}
      {...props}
    />
  );
}

export function ComboboxItemGroup({
  asChild,
  ...props
}: ComponentProps<'div'> & AsChild & combobox.ItemGroupProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      data-slot="combobox-item-group"
      {...api.getItemGroupProps({ id: props.id })}
      {...props}
    />
  );
}

export function ComboboxItemGroupLabel({
  className,
  ...props
}: ComponentProps<typeof Label> & combobox.ItemGroupLabelProps) {
  const api = useApi();
  return (
    <Label
      className={cn(
        'text-muted-foreground px-2 py-1.5 text-xs font-semibold',
        className,
      )}
      data-slot="combobox-item-group-label"
      {...api.getItemGroupLabelProps({ htmlFor: props.htmlFor })}
      {...props}
    />
  );
}

export function ComboboxItem({
  asChild,
  item,
  persistFocus,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & combobox.ItemProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn(
        'group flex cursor-default items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none select-none',
        'aria-selected:bg-accent aria-selected:text-accent-foreground',
        className,
      )}
      data-slot="combobox-item"
      {...api.getItemProps({ item, persistFocus })}
      {...props}
    />
  );
}

export function ComboboxItemText({
  asChild,
  item,
  persistFocus,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & combobox.ItemProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('group-hover:text-accent-foreground', className)}
      data-slot="combobox-item-text"
      {...api.getItemTextProps({ item, persistFocus })}
      {...props}
    />
  );
}

export function ComboboxItemIndicator({
  asChild,
  item,
  persistFocus,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & combobox.ItemProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('text-primary ml-2', className)}
      data-slot="combobox-item-indicator"
      {...api.getItemIndicatorProps({ item, persistFocus })}
      {...props}
    />
  );
}

/* eslint-enable @typescript-eslint/no-unsafe-assignment -- re-enable */
