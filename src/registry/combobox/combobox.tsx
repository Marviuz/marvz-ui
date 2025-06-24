"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as combobox from "@zag-js/combobox";
import {
  normalizeProps,
  Portal,
  useMachine,
  type PropTypes,
} from "@zag-js/react";
import {
  createContext,
  use,
  useId,
  type ComponentProps,
  type ReactNode,
} from "react";

type AsChild = {
  asChild?: boolean;
};

const ComboboxContext = createContext<combobox.Api<PropTypes> | null>(null);

function useApi() {
  const ctx = use(ComboboxContext);
  if (!ctx) throw new Error("Should be inside a <ComboboxProvider>");
  return ctx;
}

export interface ComboboxProps extends Omit<combobox.Props, "id"> {
  children?: ReactNode;
  id?: string;
}

export function ComboboxProvider({
  children,
  id: idProp,
  ...props
}: ComboboxProps) {
  const id = useId();
  const service = useMachine(combobox.machine, { id: idProp ?? id, ...props });
  const api = combobox.connect(service, normalizeProps);

  return <ComboboxContext value={api}>{children}</ComboboxContext>;
}

export function ComboboxRoot({
  asChild,
  className,
  ...props
}: ComponentProps<"div"> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...api.getRootProps()}
      className={cn("relative w-64", className)}
      {...props}
    />
  );
}

export function ComboboxLabel({
  asChild,
  ...props
}: ComponentProps<"label"> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : "label";

  return <Comp {...api.getLabelProps()} {...props} />;
}

export function ComboboxTrigger({
  asChild,
  focusable,
  ...props
}: ComponentProps<"button"> & AsChild & combobox.TriggerProps) {
  const api = useApi();
  const Comp = asChild ? Slot : "button";

  return <Comp {...api.getTriggerProps({ focusable })} {...props} />;
}

export function ComboboxClearTrigger({
  asChild,
  ...props
}: ComponentProps<"button"> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : "button";

  return <Comp {...api.getClearTriggerProps()} {...props} />;
}

export function ComboboxInput({
  asChild,
  ...props
}: ComponentProps<"input"> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : "input";

  return <Comp {...api.getInputProps()} {...props} />;
}

export const ComboboxPortal = Portal;

export function ComboboxPositioner({
  asChild,
  className,
  ...props
}: ComponentProps<"div"> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...api.getPositionerProps()}
      className={cn("z-50 mt-1 w-full", className)}
      {...props}
    />
  );
}

export function ComboboxContent({
  asChild,
  className,
  ...props
}: ComponentProps<"div"> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...api.getContentProps()}
      className={cn(
        "rounded-md border bg-popover text-popover-foreground shadow-md",
        className,
      )}
      {...props}
    />
  );
}

export function ComboboxList({
  asChild,
  className,
  ...props
}: ComponentProps<"div"> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...api.getListProps()}
      className={cn("max-h-60 overflow-y-auto p-1", className)}
      {...props}
    />
  );
}

export function ComboboxItemGroup({
  asChild,
  ...props
}: ComponentProps<"div"> & AsChild & combobox.ItemGroupProps) {
  const api = useApi();
  const Comp = asChild ? Slot : "div";

  return <Comp {...api.getItemGroupProps({ id: props.id })} {...props} />;
}

export function ComboboxItemGroupLabel({
  asChild,
  className,
  ...props
}: ComponentProps<"label"> & AsChild & combobox.ItemGroupLabelProps) {
  const api = useApi();
  const Comp = asChild ? Slot : "label";

  return (
    <Comp
      {...api.getItemGroupLabelProps({ htmlFor: props.htmlFor })}
      className={cn(
        "px-2 py-1.5 text-xs font-semibold text-muted-foreground",
        className,
      )}
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
}: ComponentProps<"div"> & AsChild & combobox.ItemProps) {
  const api = useApi();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...api.getItemProps({ item, persistFocus })}
      className={cn(
        "group flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
        className,
      )}
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
}: ComponentProps<"div"> & AsChild & combobox.ItemProps) {
  const api = useApi();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...api.getItemTextProps({ item, persistFocus })}
      className={cn("group-hover:text-accent-foreground", className)}
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
}: ComponentProps<"div"> & AsChild & combobox.ItemProps) {
  const api = useApi();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...api.getItemIndicatorProps({ item, persistFocus })}
      className={cn("ml-2 text-primary", className)}
      {...props}
    />
  );
}
