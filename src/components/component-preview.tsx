import fs from 'node:fs/promises';
import { codeToHtml } from 'shiki';
import parse from 'html-react-parser';
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

export async function ComponentPreview({
  registry: registryKey,
}: ComponentPreviewProps) {
  const Comp = registry[registryKey].Example;

  const file = registry[registryKey].path;
  const content = await fs.readFile(file);

  const html = await codeToHtml(content.toString(), {
    lang: 'javascript',
    theme: 'vitesse-dark',
  });

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

        <TabsContent value="code">{parse(html.trim())}</TabsContent>
      </TabsRoot>
    </TabsProvider>
  );
}
