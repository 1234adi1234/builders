/**
 * Shared site configuration for Boundless Builders.
 *
 * This is the single source of truth for the site name, URLs, description, and
 * brand assets. Page metadata and JSON-LD structured data both read from here,
 * so the same strings are never duplicated across routes.
 */
export const siteConfig = {
  /** Public name of this showcase app. */
  name: 'Boundless Builders',
  /** The organization behind the app, used by the Organization schema. */
  organizationName: 'Boundless',
  /** Canonical origin for this app. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    'https://builders.boundlessfi.xyz',
  /** Default description shared by metadata and structured data. */
  description:
    'Discover the builders, projects, and teams shipping on Stellar through Boundless. A public showcase of the people and products of the ecosystem.',
  /** X (formerly Twitter) handle, including the leading at sign. */
  twitterHandle: '@boundless_fi',
  /** The main Boundless app, where builders sign up and create. */
  parentUrl:
    process.env.NEXT_PUBLIC_BOUNDLESS_APP_URL ?? 'https://boundlessfi.xyz',
  /** Public path to the white Boundless logo used by structured data. */
  logoPath: '/brand/boundless-logo-white.svg',
} as const;
