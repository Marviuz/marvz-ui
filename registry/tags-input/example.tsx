'use client';

import { X } from 'lucide-react';
import {
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItems,
  TagsInputProvider,
  TagsInputRoot,
} from './tags-input';

export default function TagsInputExample() {
  return (
    <TagsInputProvider defaultValue={['hello', 'world']}>
      <TagsInputRoot>
        <TagsInputItems
          render={(item, index) => (
            <TagsInputItem index={index} key={index} value={item}>
              <TagsInputItemPreview index={index} value={item}>
                {item}
              </TagsInputItemPreview>
              <TagsInputItemDeleteTrigger index={index} value={item}>
                <X />
              </TagsInputItemDeleteTrigger>
              <TagsInputItemInput index={index} value={item} />
            </TagsInputItem>
          )}
        />
        <TagsInputInput />
      </TagsInputRoot>
    </TagsInputProvider>
  );
}
