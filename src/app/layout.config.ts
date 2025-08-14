import { type BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BRAND_NAME, REPO_URL } from '~/lib/branding';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: BRAND_NAME,
  },
  githubUrl: REPO_URL,
};
