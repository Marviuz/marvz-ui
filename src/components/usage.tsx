import { highlight } from 'fumadocs-core/highlight';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { extractImportsAndJSX } from '~/utils/get-code';
import { getRegistryContent } from '~/utils/registry-utils';
import { registry as allRegistries, type Registry } from '~registry/__all__';

type UsageProps = {
  registry: keyof Registry;
};

export async function Usage({ registry }: UsageProps) {
  const content = await getRegistryContent(allRegistries[registry].usagePath);
  const { imports, jsx } = extractImportsAndJSX(content);

  const importsCode = await highlight(imports, {
    lang: 'tsx',
    theme: 'poimandres',
    components: {
      pre: Pre,
    },
  });

  const componentsCode = await highlight(jsx, {
    lang: 'tsx',
    theme: 'poimandres',
    components: {
      pre: Pre,
    },
  });

  return (
    <>
      <CodeBlock className="[&_pre]:py-4 [&>:has(>pre)]:py-0">
        {importsCode}
      </CodeBlock>
      <CodeBlock className="[&_pre]:py-4 [&>:has(>pre)]:py-0">
        {componentsCode}
      </CodeBlock>
    </>
  );
}
