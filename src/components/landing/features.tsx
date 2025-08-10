import { GitBranch, Layers, Rocket, Zap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~registry/card/card';

export function LandingFeatures() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Copy, paste, own your components
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Carefully crafted components that work together seamlessly
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="gap-4 py-8 md:col-span-2 lg:row-span-2">
            <CardHeader className="px-8">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-xl">
                <Rocket className="text-primary-foreground h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Copy &amp; Paste Components
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                No package manager required. Copy the component code directly
                into your project and customize it to fit your needs. You own
                the code.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8">
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-primary">
                  $ npx shadcn@latest add button
                </div>
                <div className="text-muted-foreground mt-1">
                  ✓ Added button component
                </div>
                <div className="text-muted-foreground">
                  ✓ Updated dependencies
                </div>
                <div className="text-green-500">✓ Ready to customize! 🎨</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-base">Fully Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built with CSS variables and Tailwind. Change colors, spacing,
                and behavior to match your design.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                <Layers className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-base">Composable Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Mix and match components to create complex interfaces. Built
                with composition in mind.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                <GitBranch className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-base">Consistent Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every component follows the same design principles and works
                together seamlessly (or do they?).
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="py-8 md:col-span-2">
            <CardContent className="px-8">
              <div className="flex items-center justify-between">
                <div className="grid gap-4">
                  <CardTitle>Purpose-Built</CardTitle>
                  <CardDescription>
                    Engineered for demanding applications, offering unique
                    solutions for complex needs. (or rather, Re-using existing
                    ones and styling them)
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-primary text-3xl font-bold">50+</div>
                  <div className="text-muted-foreground text-sm">
                    Components
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
