import type { Metadata } from 'next';
import { Suspense } from 'react';

import {
  BuildersView,
  BuildersViewFallback,
} from '@/components/discover/builders-view';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { JsonLd } from '@/components/seo/json-ld';
import {
  breadcrumbSchema,
  collectionPageSchema,
  homeBreadcrumb,
} from '@/lib/seo/schema';

const BUILDERS_DESCRIPTION =
  'Discover people building across the Boundless ecosystem.';

export const metadata: Metadata = {
  title: 'Builders',
  description: BUILDERS_DESCRIPTION,
};

const buildersSchema = collectionPageSchema({
  name: 'Builders',
  description: BUILDERS_DESCRIPTION,
  path: '/builders',
});
const buildersBreadcrumbs = breadcrumbSchema([
  homeBreadcrumb,
  { name: 'Builders', path: '/builders' },
]);

export default function BuildersPage() {
  return (
    <>
      <JsonLd data={buildersSchema} />
      <JsonLd data={buildersBreadcrumbs} />

      <SiteHeader />
      <Suspense fallback={<BuildersViewFallback />}>
        <BuildersView />
      </Suspense>
      <SiteFooter />
    </>
  );
}
