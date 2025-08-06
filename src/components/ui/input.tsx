import { cva } from 'class-variance-authority';
import type * as React from 'react';
import { cn } from '~/lib/utils';

const inputVariants = cva(
  'flex w-full min-w-0 text-base md:text-sm bg-transparent outline-none file:text-sm file:font-medium',
  {
    variants: {
      variant: {
        base: [
          'border-0 p-0 m-0',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          'file:border-0 file:bg-transparent file:cursor-pointer',
          'placeholder:text-muted-foreground',
        ],
        default: [
          'file:text-foreground placeholder:text-muted-foreground',
          'selection:bg-primary selection:text-primary-foreground',
          'dark:bg-input/30 border-input',
          'h-9 rounded-md border px-3 py-1',
          'shadow-xs transition-[color,box-shadow]',
          'file:inline-flex file:h-7 file:border-0 file:bg-transparent',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
          'aria-invalid:border-destructive',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(inputVariants({ className }))}
      data-slot="input"
      type={type}
      {...props}
    />
  );
}

export { Input, inputVariants };
