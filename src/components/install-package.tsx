import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { getBaseUrl } from '~/lib/get-base-url';
import { registry as allRegistry, type Registry } from '~registry/__all__';
import {
  TabsContent,
  TabsList,
  TabsProvider,
  TabsRoot,
  TabsTrigger,
} from '~registry/tabs/tabs';

type CmdType = 'install' | 'execute';

type InstallPackageProps = {
  cmdType: CmdType;
  registry: keyof Registry;
};

type PackageManager = Record<'pm' | CmdType, string>;

const packageManagers: PackageManager[] = [
  { pm: 'pnpm', install: 'pnpm add', execute: 'pnpx' },
  { pm: 'npm', install: 'npm install', execute: 'npx' },
  { pm: 'yarn', install: 'yarn add', execute: 'yarn dlx' },
  { pm: 'bun', install: 'bun add', execute: 'bunx' },
];

function checkDeps(deps: unknown): string[] | null {
  if (Array.isArray(deps)) {
    return deps.filter((d) => typeof d === 'string');
  }

  return null;
}

export function InstallPackage({
  registry,
  cmdType = 'execute',
}: InstallPackageProps) {
  const regItem = allRegistry[registry];
  const deps = checkDeps(regItem.dependencies);

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

        {packageManagers.map(({ pm, install, execute }) => (
          <TabsContent key={pm} value={pm}>
            {cmdType === 'install' ? (
              <DynamicCodeBlock
                code={`${install} ${deps.join(' ')}`}
                lang="bash"
                options={{ theme: 'poimandres' }}
              />
            ) : (
              <DynamicCodeBlock
                code={`${execute} shadcn@latest add ${getBaseUrl()}/r/${regItem.name}.json`}
                lang="bash"
                options={{ theme: 'poimandres' }}
              />
            )}
          </TabsContent>
        ))}
      </TabsRoot>
    </TabsProvider>
  );
}
