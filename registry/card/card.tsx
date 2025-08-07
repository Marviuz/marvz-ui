import { Slot } from '@radix-ui/react-slot';
import { type ComponentProps } from 'react';
import { cn } from '~/lib/utils';

type DivProps = ComponentProps<'div'> & {
  asChild?: boolean;
};

export function Card({ asChild, className, ...props }: DivProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn(
        'svg-bg-noise-grain bg-card text-card-foreground rounded-md border shadow-sm',
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
      className={cn('p-6', className)}
      data-slot="card-content"
      {...props}
    />
  );
}

export function CardHeader({ asChild, className, ...props }: DivProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('px-6 pt-6', className)}
      data-slot="card-header"
      {...props}
    />
  );
}
