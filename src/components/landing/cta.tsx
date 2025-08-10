import { ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export function LandingCTA() {
  return (
    <section className="bg-primary text-primary-foreground py-24">
      <div className="container text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-5xl font-bold">
            Find the missing pieces for your UI.
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Explore our collection of open-source components, designed to
            address unique use cases and empower your custom interfaces.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="rounded-xl px-8 py-6 text-lg"
              size="lg"
              variant="secondary"
            >
              <Link href="/docs/components/card">
                <Terminal className="mr-2 h-5 w-5" />
                Browse Components
              </Link>
            </Button>
            <Button
              asChild
              className="text-background rounded-xl px-8 py-6 text-lg"
              size="lg"
              variant="link"
            >
              <Link href="/docs/get-started/introduction">
                Read Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
