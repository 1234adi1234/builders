import './globals.css';

import type { Metadata } from 'next';
import { Bebas_Neue, Plus_Jakarta_Sans } from 'next/font/google';

import { JsonLd } from '@/components/seo/json-ld';
import { organizationSchema, webSiteSchema } from '@/lib/seo/schema';
import { siteConfig } from '@/lib/seo/site';
import { Providers } from '@/providers';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${jakarta.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
