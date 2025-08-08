'use client';

import { Slot } from '@radix-ui/react-slot';
import * as colorPicker from '@zag-js/color-picker';
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
import { Card } from '~registry/card/card';

type AsChild = {
  asChild?: boolean;
};

const ColorPicker = createContext<colorPicker.Api<PropTypes> | null>(null);

function useApi() {
  const ctx = use(ColorPicker);
  if (!ctx) throw new Error('Should be inside a <ColorPickerProvider>');
  return ctx;
}

type ColorPickerProps = Partial<colorPicker.Props> & {
  children?: ReactNode;
};

export function ColorPickerProvider({ children, ...props }: ColorPickerProps) {
  const id = useId();
  const service = useMachine(colorPicker.machine, { id, ...props });
  const api = colorPicker.connect(service, normalizeProps);

  return (
    <ColorPicker value={api}>
      {children}
      <input
        data-slot="color-picker-hidden-input"
        {...api.getHiddenInputProps()}
      />
    </ColorPicker>
  );
}

export function ColorPickerRoot({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn('relative', className)}
      data-slot="color-picker-root"
      {...api.getRootProps()}
      {...props}
    />
  );
}

export function ColorPickerLabel({
  className,
  ...props
}: ComponentProps<typeof Label>) {
  const api = useApi();

  return (
    <Label
      className={cn(
        'text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      data-slot="color-picker-label"
      {...api.getLabelProps()}
      {...props}
    />
  );
}

export function ColorPickerControl({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn('flex items-center gap-2', className)}
      data-slot="color-picker-control"
      {...api.getControlProps()}
      {...props}
    />
  );
}

export function ColorPickerTrigger({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const api = useApi();

  return (
    <Button
      className={cn('h-10 w-12 border-2 p-0', className)}
      data-slot="color-picker-trigger"
      variant="outline"
      {...api.getTriggerProps()}
      {...props}
    />
  );
}

export function ColorPickerTransparencyGrid({
  asChild,
  size = '10px',
  className,
  ...props
}: ComponentProps<'div'> & AsChild & colorPicker.TransparencyGridProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn('rounded-md', className)}
      data-slot="color-picker-transparency-grid"
      {...api.getTransparencyGridProps({ size })}
      {...props}
    />
  );
}

export function ColorPickerSwatch({
  asChild,
  respectAlpha,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & Omit<colorPicker.SwatchProps, 'value'>) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn('border-border h-full w-full rounded-md border', className)}
      data-slot="color-picker-swatch"
      {...api.getSwatchProps({ value: api.value, respectAlpha })}
      {...props}
    />
  );
}

export function ColorPickerChannelInput({
  channel,
  orientation,
  className,
  ...props
}: ComponentProps<'input'> & colorPicker.ChannelInputProps) {
  const api = useApi();

  return (
    <Input
      className={cn('h-8 text-xs', className)}
      data-slot="color-picker-channel-input"
      {...api.getChannelInputProps({ channel, orientation })}
      {...props}
    />
  );
}

export const ColorPickerPortal = Portal;

export function ColorPickerPositioner({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn('z-50', className)}
      data-slot="color-picker-positioner"
      {...api.getPositionerProps()}
      {...props}
    />
  );
}

export function ColorPickerContent({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  const api = useApi();

  return (
    <Card
      className={cn(
        'bg-popover text-popover-foreground w-64 border p-4 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className,
      )}
      data-slot="color-picker-content"
      {...api.getContentProps()}
      {...props}
    />
  );
}

export function ColorPickerArea({
  asChild,
  xChannel,
  yChannel,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & colorPicker.AreaProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'border-border relative h-32 w-full cursor-crosshair overflow-hidden rounded-md border',
        className,
      )}
      data-slot="color-picker-area"
      {...api.getAreaProps({ xChannel, yChannel })}
      {...props}
    />
  );
}

export function ColorPickerAreaBackground({
  asChild,
  xChannel,
  yChannel,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & colorPicker.AreaProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn('absolute inset-0 h-full', className)}
      data-slot="color-picker-area-background"
      {...api.getAreaBackgroundProps({ xChannel, yChannel })}
      {...props}
    />
  );
}

export function ColorPickerAreaThumb({
  asChild,
  xChannel,
  yChannel,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & colorPicker.AreaProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'absolute h-4 w-4 rounded-full border-2 border-white shadow-lg',
        '-translate-x-1/2 -translate-y-1/2 transform',
        'focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none',
        className,
      )}
      data-slot="color-picker-area-thumb"
      {...api.getAreaThumbProps({ xChannel, yChannel })}
      {...props}
    />
  );
}

export function ColorPickerChannelSlider({
  asChild,
  channel,
  format,
  orientation,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & colorPicker.ChannelSliderProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'border-border relative h-4 w-full cursor-pointer overflow-hidden rounded-md border',
        className,
      )}
      data-slot="color-picker-channel-slider"
      {...api.getChannelSliderProps({ channel, format, orientation })}
      {...props}
    />
  );
}

export function ColorPickerChannelSliderTrack({
  asChild,
  channel,
  format,
  orientation,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & colorPicker.ChannelSliderProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn('absolute inset-0 h-full', className)}
      data-slot="color-picker-channel-slider-track"
      {...api.getChannelSliderTrackProps({ channel, format, orientation })}
      {...props}
    />
  );
}

export function ColorPickerChannelSliderThumb({
  asChild,
  channel,
  format,
  orientation,
  className,
  ...props
}: ComponentProps<'div'> & AsChild & colorPicker.ChannelSliderProps) {
  const api = useApi();
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'absolute top-1/2 h-4 w-4 rounded-full border-2 shadow-lg',
        '-translate-x-1/2 -translate-y-1/2 transform',
        'focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none',
        className,
      )}
      data-slot="color-picker-channel-slider-thumb"
      {...api.getChannelSliderThumbProps({ channel, format, orientation })}
      {...props}
    />
  );
}
