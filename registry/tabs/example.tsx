import {
  TabsProvider,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './tabs';

export default function TabsExample() {
  return (
    <TabsProvider defaultValue="account">
      <TabsRoot className="mx-auto w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <p>This is the Account tab content.</p>
        </TabsContent>

        <TabsContent value="password">
          <p>This is the Password tab content.</p>
        </TabsContent>
      </TabsRoot>
    </TabsProvider>
  );
}
