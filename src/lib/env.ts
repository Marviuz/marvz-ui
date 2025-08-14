import z from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  shared: {
    NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL:
      process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
  },
});
