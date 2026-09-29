import type { Metadata } from 'next';

import { ProjectsView } from '@/components/discover/projects-view';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { JsonLd } from '@/components/seo/json-ld';
import {
  breadcrumbSchema,
  collectionPageSchema,
  homeBreadcrumb,
} from '@/lib/seo/schema';

const PROJECTS_DESCRIPTION =
  'Explore the products being built across the Boundless ecosystem.';

export const metadata: Metadata = {
  title: 'Projects',
  description: PROJECTS_DESCRIPTION,
};

const projectsSchema = collectionPageSchema({
  name: 'Projects',
  description: PROJECTS_DESCRIPTION,
  path: '/projects',
});
const projectsBreadcrumbs = breadcrumbSchema([
  homeBreadcrumb,
  { name: 'Projects', path: '/projects' },
]);

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsSchema} />
      <JsonLd data={projectsBreadcrumbs} />

      <SiteHeader />
      <ProjectsView />
      <SiteFooter />
    </>
  );
}
