import { env } from '~/lib/env';

export function getBaseUrl() {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const base = env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  return `${protocol}://${base}`;
}
