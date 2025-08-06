import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function DocBadge({ href }: { href: string }) {
  return (
    <Button asChild className="text-xs" size="sm" variant="secondary">
      <Link href={href} target="_blank">
        Docs
        <ExternalLink className="size-3" />
      </Link>
    </Button>
  );
}
