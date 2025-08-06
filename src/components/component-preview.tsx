import fs from 'node:fs/promises';
import { registry, type Registry } from '~registry/__all__';
import {
  TabsContent,
  TabsList,
  TabsProvider,
  TabsRoot,
  TabsTrigger,
} from '~registry/tabs/tabs';

type ComponentPreviewProps = {
  registry: keyof Registry;
};

export function ComponentPreview({
  registry: registryKey,
}: ComponentPreviewProps) {
  const Comp = registry[registryKey].Example;

  const getFile = async () => {
    'use server';

    const file = registry[registryKey].path;
    const content = await fs.readFile(file);
    return content.toString();
  };

  return (
    <TabsProvider defaultValue="preview">
      <TabsRoot>
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Comp />
        </TabsContent>

        <TabsContent value="code">
          <pre>
            <code>{getFile()}</code>
          </pre>
        </TabsContent>
      </TabsRoot>
    </TabsProvider>
  );
}
