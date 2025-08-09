import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { registry as allRegistry, type Registry } from '~registry/__all__';
import {
  TabsContent,
  TabsList,
  TabsProvider,
  TabsRoot,
  TabsTrigger,
} from '~registry/tabs/tabs';

type InstallPackageProps = {
  registry: keyof Registry;
};

const packageManagers = [
  { pm: 'pnpm', cmd: 'pnpm add' },
  { pm: 'npm', cmd: 'npm install' },
  { pm: 'yarn', cmd: 'yarn add' },
  { pm: 'bun', cmd: 'bun add' },
];

function checkDeps(deps: unknown): string[] | null {
  if (Array.isArray(deps)) {
    return deps.filter((d) => typeof d === 'string');
  }

  return null;
}

export function InstallPackage({ registry }: InstallPackageProps) {
  if (!('dependencies' in allRegistry[registry])) {
    throw new Error(`Unknown registry: ${registry}`);
  }

  const deps = checkDeps(allRegistry[registry].dependencies);

  if (!deps) {
    return null;
  }

  return (
    <TabsProvider defaultValue="pnpm">
      <TabsRoot className="w-full">
        <TabsList>
          {packageManagers.map(({ pm }) => (
            <TabsTrigger className="font-mono" key={pm} value={pm}>
              {pm}
            </TabsTrigger>
          ))}
        </TabsList>

        {packageManagers.map(({ pm, cmd }) => (
          <TabsContent key={pm} value={pm}>
            <DynamicCodeBlock
              code={`${cmd} ${deps.join(' ')}`}
              lang="bash"
              options={{ theme: 'poimandres' }}
            />
          </TabsContent>
        ))}
      </TabsRoot>
    </TabsProvider>
  );
}
