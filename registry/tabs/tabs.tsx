'use client';

import { Slot } from '@radix-ui/react-slot';
import * as tabs from '@zag-js/tabs';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import {
  createContext,
  use,
  useId,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { cn } from '~/lib/utils';

type AsChild = {
  asChild?: boolean;
};

const TabsContext = createContext<tabs.Api<PropTypes> | null>(null);

function useTabsApi() {
  const ctx = use(TabsContext);
  if (!ctx) throw new Error('Must be inside a <TabsProvider>');
  return ctx;
}

export type TabsProps = {
  children?: ReactNode;
  id?: string;
} & Omit<tabs.Props, 'id'>;

export function TabsProvider({ children, id: idProp, ...props }: TabsProps) {
  const id = useId();
  const service = useMachine(tabs.machine, {
    id: idProp ?? id,
    ...props,
  });
  const api = tabs.connect(service, normalizeProps);
  return <TabsContext value={api}>{children}</TabsContext>;
}

export function TabsRoot({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useTabsApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('tabs-root', className)}
      data-slot="tabs-root"
      {...api.getRootProps()}
      {...props}
    />
  );
}

export function TabsList({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useTabsApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('tabs-list flex space-x-2', className)}
      data-slot="tabs-list"
      {...api.getListProps()}
      {...props}
    />
  );
}

export function TabsTrigger({
  asChild,
  value,
  disabled,
  className,
  ...props
}: ComponentProps<'button'> & AsChild & tabs.TriggerProps) {
  const api = useTabsApi();
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(
        'tabs-trigger rounded-md px-3 py-1.5 text-sm font-medium',
        'aria-selected:bg-accent aria-selected:text-accent-foreground',
        className,
      )}
      data-slot="tabs-trigger"
      {...api.getTriggerProps({ value, disabled })}
      {...props}
    />
  );
}

export function TabsContent({
  asChild,
  value,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & tabs.ContentProps) {
  const api = useTabsApi();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('tabs-content mt-4', className)}
      data-slot="tabs-content"
      {...api.getContentProps({ value })}
      {...props}
    />
  );
}

export function TabsIndicator({ ...props }: ComponentProps<'div'> & AsChild) {
  const api = useTabsApi();
  return (
    <div data-slot="tabs-indicator" {...api.getIndicatorProps()} {...props} />
  );
}
