import '~/styles/globals.css';

import { RootProvider } from 'fumadocs-ui/provider';
import { type Metadata } from 'next';
import { geistSans, jetbrains } from '~/lib/fonts';
import { cn } from '~/lib/utils';

export const metadata: Metadata = {
  title: 'Marvz UI',
  description: 'Tailored UI for your unique Needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          jetbrains.variable,
          'scroll-smooth antialiased',
        )}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
