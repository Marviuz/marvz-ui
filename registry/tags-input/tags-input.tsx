import { Slot } from '@radix-ui/react-slot';
import { normalizeProps, useMachine } from '@zag-js/react';
import * as tagsInput from '@zag-js/tags-input';
import {
  createContext,
  use,
  useId,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { Badge } from '~/components/ui/badge';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

type AsChild = {
  asChild?: boolean;
};

const TagsInputContext = createContext<ReturnType<
  typeof tagsInput.connect
> | null>(null);

const useTagsInput = () => {
  const ctx = use(TagsInputContext);
  if (!ctx) throw new Error('Must be used within <TagsInputProvider>');
  return ctx;
};

type TagsInputProviderProps = Omit<tagsInput.Props, 'id'> & {
  children?: ReactNode;
  id?: string;
};

export function TagsInputProvider({
  children,
  id: customId,
  ...props
}: TagsInputProviderProps) {
  const id = useId();
  const service = useMachine(tagsInput.machine, {
    id: customId ?? id,
    ...props,
  });
  const api = tagsInput.connect(service, normalizeProps);
  return <TagsInputContext value={api}>{children}</TagsInputContext>;
}

export function TagsInputRoot({
  asChild,
  ...props
}: ComponentProps<'div'> & AsChild) {
  const api = useTagsInput();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp data-slot="tags-input-root" {...api.getRootProps()} {...props} />
  );
}

type TagsInputItemProps = {
  render: (item: string, index: number) => ReactNode;
};

export function TagsInputItems({ render }: TagsInputItemProps) {
  const api = useTagsInput();
  return api.value.map((item, index) => render(item, index));
}

export function TagsInputItem({
  index,
  value,
  disabled,
  ...props
}: ComponentProps<typeof Badge> & tagsInput.ItemProps) {
  const api = useTagsInput();
  return (
    <Badge
      data-slot="tags-input-input"
      {...api.getItemProps({ index, value, disabled })}
      {...props}
    />
  );
}

export function TagsInputItemPreview({
  asChild,
  index,
  value,
  disabled,
  ...props
}: ComponentProps<'div'> & AsChild & tagsInput.ItemProps) {
  const api = useTagsInput();
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      data-slot="tags-input-preview"
      {...api.getItemPreviewProps({ index, value, disabled })}
      {...props}
    />
  );
}

export function TagsInputItemDeleteTrigger({
  asChild,
  index,
  value,
  disabled,
  ...props
}: ComponentProps<'button'> & AsChild & tagsInput.ItemProps) {
  const api = useTagsInput();
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      data-slot="tags-input-delete-trigger"
      {...api.getItemDeleteTriggerProps({ index, value, disabled })}
      {...props}
    />
  );
}

export function TagsInputItemInput({
  index,
  value,
  disabled,
  ...props
}: ComponentProps<typeof Input> & tagsInput.ItemProps) {
  const api = useTagsInput();
  return (
    <Input
      data-slot="tags-input-input"
      {...api.getItemInputProps({ index, value, disabled })}
      {...props}
    />
  );
}

export function TagsInputSeparator(props: ComponentProps<typeof Label>) {
  const api = useTagsInput();
  return (
    <Label
      data-slot="tags-input-separator"
      {...api.getLabelProps()}
      {...props}
    />
  );
}

export function TagsInputInput(props: ComponentProps<typeof Input>) {
  const api = useTagsInput();
  return (
    <Input data-slot="tags-input-input" {...api.getInputProps()} {...props} />
  );
}
