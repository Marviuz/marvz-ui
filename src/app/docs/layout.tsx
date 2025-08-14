import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { REPO_URL } from '~/lib/branding';
import { source } from '../../lib/source';
import { baseOptions } from '../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      githubUrl={REPO_URL}
      sidebar={{ defaultOpenLevel: 1 }}
    >
      {children}
    </DocsLayout>
  );
}
