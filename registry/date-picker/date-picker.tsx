'use client';

import { Slot } from '@radix-ui/react-slot';
import * as datePicker from '@zag-js/date-picker';
import { normalizeProps, Portal, useMachine } from '@zag-js/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  type ComponentProps,
  createContext,
  type ReactNode,
  useContext,
  useId,
} from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';
import { Card } from '~registry/card/card';

type AsChild = {
  asChild?: boolean;
};

const DatePickerContext = createContext<ReturnType<
  typeof datePicker.connect
> | null>(null);
const useDatePicker = () => {
  const ctx = useContext(DatePickerContext);
  if (!ctx) throw new Error('Must be used within <DatePickerProvider>');
  return ctx;
};

type DatePickerProviderProps = Omit<datePicker.Props, 'id'> & {
  children?: ReactNode;
  id?: string;
};

export function DatePickerProvider({
  children,
  id: customId,
  ...props
}: DatePickerProviderProps) {
  const id = useId();
  const service = useMachine(datePicker.machine, {
    id: customId ?? id,
    ...props,
  });
  const api = datePicker.connect(service, normalizeProps);
  return <DatePickerContext value={api}>{children}</DatePickerContext>;
}

export function DatePickerRoot({
  asChild,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useDatePicker();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp data-slot="date-picker-root" {...api.getRootProps()} {...props} />
  );
}

export function DatePickerControl({
  asChild,
  className,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useDatePicker();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={cn('flex gap-2', className)}
      data-slot="date-picker-control"
      {...api.getControlProps()}
      {...props}
    />
  );
}

export function DatePickerInput({
  fixOnBlur,
  index,
  ...props
}: ComponentProps<typeof Input> & datePicker.InputProps) {
  const api = useDatePicker();
  return (
    <Input
      data-slot="date-picker-input"
      {...api.getInputProps({ fixOnBlur, index })}
      {...props}
    />
  );
}

export function DatePickerTrigger(props: ComponentProps<typeof Button>) {
  const api = useDatePicker();
  return <Button {...api.getTriggerProps()} {...props} />;
}

export function DatePickerPositioner({
  asChild,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useDatePicker();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      data-slot="date-picker-positioner"
      {...api.getPositionerProps()}
      {...props}
    />
  );
}

export function DatePickerContent({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  const api = useDatePicker();
  return (
    <Card
      className={cn('p-0', className)}
      data-slot="date-picker-content"
      {...api.getContentProps()}
      {...props}
    />
  );
}

export function DatePickerDayView() {
  const api = useDatePicker();
  return (
    <div className="grid gap-2 p-2" hidden={api.view !== 'day'}>
      <div
        className="flex items-center justify-between gap-2"
        {...api.getViewControlProps({ view: 'year' })}
      >
        <Button
          {...api.getPrevTriggerProps()}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ChevronLeft />
        </Button>
        <Button
          {...api.getViewTriggerProps()}
          size="sm"
          type="button"
          variant="ghost"
        >
          {api.visibleRangeText.start}
        </Button>
        <Button
          {...api.getNextTriggerProps()}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ChevronRight />
        </Button>
      </div>

      <table {...api.getTableProps({ view: 'day' })}>
        <thead {...api.getTableHeaderProps({ view: 'day' })}>
          <tr {...api.getTableRowProps({ view: 'day' })}>
            {api.weekDays.map((day, i) => (
              <th aria-label={day.long} key={i} scope="col">
                {day.narrow}
              </th>
            ))}
          </tr>
        </thead>
        <tbody {...api.getTableBodyProps({ view: 'day' })}>
          {api.weeks.map((week, weekIdx) => (
            <tr key={weekIdx} {...api.getTableRowProps({ view: 'day' })}>
              {week.map((value, i) => (
                <td key={i} {...api.getDayTableCellProps({ value })}>
                  <Button
                    className="text-right"
                    size="icon"
                    type="button"
                    variant="ghost"
                    {...api.getDayTableCellTriggerProps({ value })}
                  >
                    {value.day}
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DatePickerMonthView() {
  const api = useDatePicker();
  return (
    <div className="grid gap-2 p-2" hidden={api.view !== 'month'}>
      <div
        className="flex items-center justify-between gap-2"
        {...api.getViewControlProps({ view: 'month' })}
      >
        <Button
          {...api.getPrevTriggerProps({ view: 'month' })}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ChevronLeft />
        </Button>
        <Button
          {...api.getViewTriggerProps({ view: 'month' })}
          size="sm"
          type="button"
          variant="ghost"
        >
          {api.visibleRange.start.year}
        </Button>
        <Button
          {...api.getNextTriggerProps({ view: 'month' })}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ChevronRight />
        </Button>
      </div>

      <table {...api.getTableProps({ view: 'month', columns: 4 })}>
        <tbody {...api.getTableBodyProps({ view: 'month' })}>
          {api
            .getMonthsGrid({ columns: 4, format: 'short' })
            .map((months, row) => (
              <tr key={row} {...api.getTableRowProps()}>
                {months.map((month, index) => (
                  <td
                    key={index}
                    {...api.getMonthTableCellProps({
                      ...month,
                      columns: 4,
                    })}
                  >
                    <Button
                      className="w-full"
                      type="button"
                      variant="ghost"
                      {...api.getMonthTableCellTriggerProps({
                        ...month,
                        columns: 4,
                      })}
                    >
                      {month.label}
                    </Button>
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export function DatePickerYearView() {
  const api = useDatePicker();
  return (
    <div className="grid gap-2 p-2" hidden={api.view !== 'year'}>
      <div
        className="flex items-center justify-between gap-2"
        {...api.getViewControlProps({ view: 'year' })}
      >
        <Button
          {...api.getPrevTriggerProps({ view: 'year' })}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ChevronLeft />
        </Button>
        <span className="text-sm font-medium">
          {api.getDecade().start} - {api.getDecade().end}
        </span>
        <Button
          {...api.getNextTriggerProps({ view: 'year' })}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ChevronRight />
        </Button>
      </div>

      <table {...api.getTableProps({ view: 'year', columns: 4 })}>
        <tbody {...api.getTableBodyProps()}>
          {api.getYearsGrid({ columns: 4 }).map((years, row) => (
            <tr key={row} {...api.getTableRowProps({ view: 'year' })}>
              {years.map((year, index) => (
                <td
                  key={index}
                  {...api.getYearTableCellProps({
                    ...year,
                    columns: 4,
                  })}
                >
                  <Button
                    className="w-full"
                    size="sm"
                    type="button"
                    variant="ghost"
                    {...api.getYearTableCellTriggerProps({
                      ...year,
                      columns: 4,
                    })}
                  >
                    {year.label}
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const DatePickerPortal = Portal;

export function DatePickerCalendar() {
  return (
    <DatePickerContent>
      <DatePickerDayView />
      <DatePickerMonthView />
      <DatePickerYearView />
    </DatePickerContent>
  );
}
