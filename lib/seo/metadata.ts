import type { Metadata } from 'next';

import { siteConfig } from '@/lib/seo/site';

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: 'en_US',
      url: path,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      description,
    },
  };
}
