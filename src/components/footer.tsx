import { SiGithub } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { BRAND_NAME, REPO_URL } from '~/lib/branding';

export function Footer() {
  return (
    <footer className="border-border border-t py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center gap-2 md:mb-0">
            <span className="text-lg font-bold">{BRAND_NAME}</span>
          </div>
          <div>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={REPO_URL}
              target="_blank"
            >
              <SiGithub className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
