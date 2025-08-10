import { Slot } from '@radix-ui/react-slot';
import { type ComponentProps } from 'react';
import { cn } from '~/lib/utils';

type AsChild = {
  asChild?: boolean;
};

type DivProps = ComponentProps<'div'> & AsChild;

export function Card({ asChild, className, ...props }: DivProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn(
        'svg-bg-noise-grain bg-card text-card-foreground grid gap-2 rounded-md border py-6 shadow-sm',
        className,
      )}
      data-slot="card"
      {...props}
    />
  );
}

export function CardContent({ asChild, className, ...props }: DivProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('px-6', className)}
      data-slot="card-content"
      {...props}
    />
  );
}

export function CardHeader({ asChild, className, ...props }: DivProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('grid gap-4 px-6', className)}
      data-slot="card-header"
      {...props}
    />
  );
}

export function CardTitle({
  asChild,
  className,
  ...props
}: ComponentProps<'h3'> & AsChild) {
  const Comp = asChild ? Slot : 'h3';
  return (
    <Comp
      className={cn('text-2xl font-bold', className)}
      data-slot="card-title"
      {...props}
    />
  );
}

export function CardDescription({
  asChild,
  className,
  ...props
}: ComponentProps<'p'> & AsChild) {
  const Comp = asChild ? Slot : 'h3';
  return (
    <Comp
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="card-description"
      {...props}
    />
  );
}
