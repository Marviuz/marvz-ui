import { BRAND_NAME } from '~/lib/branding';

export function Footer() {
  return (
    <footer className="border-border border-t py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center gap-2 md:mb-0">
            <span className="text-lg font-bold">{BRAND_NAME}</span>
          </div>
          <div className="text-muted-foreground text-sm">
            {/* TODO: useful links   */}
          </div>
        </div>
      </div>
    </footer>
  );
}
