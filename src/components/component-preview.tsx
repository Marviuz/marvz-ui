// import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { highlight } from 'fumadocs-core/highlight';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { getRegistryContent } from '~/utils/registry-utils';
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
  const content = await getRegistryContent(file);

  const rendered = await highlight(content.toString().trim(), {
    lang: 'tsx',
    theme: 'poimandres',
    components: {
      pre: Pre,
    },
  });

  return (
    <TabsProvider defaultValue="preview">
      <TabsRoot>
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          {/* TODO: make this a card */}
          <div className="bg-card not-prose my-4 rounded-xl border p-1">
            <div className="svg-bg-dots bg-background grid h-full min-h-80 place-items-center-safe rounded-xl border p-8">
              <Comp />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          {/* TODO: make this option for changing themes  */}
          {/* import { bundledThemes } from 'shiki'; */}
          {/* <pre>{JSON.stringify(Object.keys(bundledThemes), null, 2)}</pre> */}

          {/* NOTE: server component. Real colors but weird padding Y  */}
          <CodeBlock className="[&_pre]:py-4 [&>:has(>pre)]:py-0" lang="tsx">
            {rendered}
          </CodeBlock>

          {/* NOTE: client component. No problem with colors */}
          {/* <DynamicCodeBlock */}
          {/*   code={content.toString().trim()} */}
          {/*   lang="tsx" */}
          {/*   options={{ theme: 'poimandres' }} */}
          {/* /> */}
        </TabsContent>
      </TabsRoot>
    </TabsProvider>
  );
}
