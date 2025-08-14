import { highlight } from 'fumadocs-core/highlight';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

export async function HomepageCodeExample() {
  const content = `import { Card } from "@/components/ui/card"

export function MyComponent() {
  return <Card>Dark mode is the only mode!</Card>
}`;

  const rendered = await highlight(content, {
    lang: 'tsx',
    theme: 'poimandres',
    components: {
      pre: Pre,
    },
  });

  return (
    <CodeBlock className="my-0 [&_pre]:py-4 [&>:has(>pre)]:py-0">
      {rendered}
    </CodeBlock>
  );
}
