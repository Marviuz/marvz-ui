import { type Registry } from '~registry/__all__';
import {
  TabsContent,
  TabsList,
  TabsProvider,
  TabsRoot,
  TabsTrigger,
} from '~registry/tabs/tabs';
import { InstallPackage } from './install-package';
import { ManualInstall } from './manual-install';

type ComponentInstallProps = {
  registry: keyof Registry;
};

export function ComponentInstall({ registry }: ComponentInstallProps) {
  return (
    <TabsProvider defaultValue="cli">
      <TabsRoot className="grid gap-4">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        <TabsContent value="cli">
          <InstallPackage registry={registry} />
        </TabsContent>
        <TabsContent value="manual">
          <p className="text-muted-foreground text-lg">
            Copy and paste the code below into your project and update imports
            as needed.
          </p>
          <ManualInstall registry={registry} />
        </TabsContent>
      </TabsRoot>
    </TabsProvider>
  );
}
