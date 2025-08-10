import Link from 'next/link';
import { BRAND_NAME } from '~/lib/branding';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 transform px-4">
      <nav className="bg-background/80 border-border rounded-full border px-6 py-3 shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{BRAND_NAME}</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/docs/get-started/introduction"
            >
              Docs
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              href="/docs/components/card"
            >
              Components
            </Link>
          </div>
          <Button asChild className="rounded-full" size="sm">
            <Link href="/docs/get-started/introduction">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
