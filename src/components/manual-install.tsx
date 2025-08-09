import { highlight } from 'fumadocs-core/highlight';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { getRegistryContent } from '~/utils/registry-utils';
import { registry as allRegistries, type Registry } from '~registry/__all__';

type ManualInstallProps = {
  registry: keyof Registry;
};

export async function ManualInstall({ registry }: ManualInstallProps) {
  const content = await getRegistryContent(
    allRegistries[registry].componentPath,
  );

  const rendered = await highlight(content, {
    lang: 'tsx',
    theme: 'poimandres',
    components: {
      pre: Pre,
    },
  });

  return (
    <CodeBlock className="[&_pre]:py-4 [&>:has(>pre)]:py-0" lang="tsx">
      {rendered}
    </CodeBlock>
  );
}
