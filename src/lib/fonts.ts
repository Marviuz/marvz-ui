import { Geist, JetBrains_Mono } from 'next/font/google';

export const jetbrains = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jetbrains-mono',
});

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
