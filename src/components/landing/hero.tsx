import { SiGithub } from '@icons-pack/react-simple-icons';
import { Layers, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { HomepageCodeExample } from './homepage-code-example';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-br via-transparent" />
      <div className="bg-primary/10 absolute top-20 right-10 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-secondary/10 absolute bottom-10 left-10 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative container">
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
          <div className="grid gap-8">
            <Badge variant="secondary">🚧 Under Development</Badge>
            <div className="grid gap-6">
              <h1 className="text-5xl leading-tight font-bold lg:text-7xl">
                <span className="block">Tailored UI for</span>
                <span className="text-primary block">Unique Needs.</span>
              </h1>
              <p className="text-muted-foreground max-w-lg text-xl leading-relaxed">
                open-source components designed for modern web development.
                Copy, paste, and customize the code to fit your unique project
                needs.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="rounded-xl px-8 py-6 text-lg"
                size="lg"
              >
                <Link href="/docs/components/card">
                  <Terminal className="mr-2 h-5 w-5" />
                  Browse Components
                </Link>
              </Button>
              <Button
                className="rounded-xl bg-transparent px-8 py-6 text-lg"
                size="lg"
                variant="outline"
              >
                <SiGithub className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>

            {/* <div className="flex items-center gap-8 pt-4"> */}
            {/* TODO: get stars from github */}
            {/*   <div className="flex items-center gap-2"> */}
            {/*     <Star className="h-5 w-5 fill-current text-yellow-500" /> */}
            {/*     <span className="font-semibold">25k+</span> */}
            {/*     <span className="text-muted-foreground">stars</span> */}
            {/*   </div> */}
            {/*   <div className="flex items-center gap-2"> */}
            {/*     <Download className="h-5 w-5 text-blue-500" /> */}
            {/*     <span className="font-semibold">100k+</span> */}
            {/*     <span className="text-muted-foreground">downloads</span> */}
            {/*   </div> */}
            {/* </div> */}
          </div>

          {/* Interactive Code Preview with Shiki */}
          <div className="relative">
            <div className="bg-card border-border rounded-2xl border p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <Badge variant="secondary">button.tsx</Badge>
              </div>
              <div className="grid gap-4">
                <div className="text-muted-foreground font-mono text-sm">
                  Install component
                </div>
                <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                  <span className="text-primary">$</span> npx shadcn@latest add
                  button
                </div>
                <div className="text-muted-foreground font-mono text-sm">
                  Use in your app
                </div>

                <HomepageCodeExample />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="bg-primary text-primary-foreground absolute -top-4 -right-4 rounded-full p-3 shadow-lg">
              <Zap className="h-6 w-6" />
            </div>
            <div className="bg-secondary text-secondary-foreground absolute -bottom-4 -left-4 rounded-full p-3 shadow-lg">
              <Layers className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
