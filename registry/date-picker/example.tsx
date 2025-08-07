import { ChevronDown } from 'lucide-react';
import {
  DatePickerCalendar,
  DatePickerControl,
  DatePickerInput,
  DatePickerPortal,
  DatePickerPositioner,
  DatePickerProvider,
  DatePickerTrigger,
} from './date-picker';

export default function DatePickerExample() {
  return (
    <DatePickerProvider>
      <DatePickerControl>
        <DatePickerInput placeholder="Select a date" />
        <DatePickerTrigger size="icon" variant="ghost">
          <ChevronDown />
        </DatePickerTrigger>
      </DatePickerControl>

      <DatePickerPortal>
        <DatePickerPositioner>
          <DatePickerCalendar />
        </DatePickerPositioner>
      </DatePickerPortal>
    </DatePickerProvider>
  );
}
