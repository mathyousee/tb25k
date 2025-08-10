import { Metadata } from 'next';
import { getSEOConfig } from './content';

interface SEOPageData {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMetadata(pageData: SEOPageData = {}): Metadata {
  const seoConfig = getSEOConfig();
  
  const title = pageData.title 
    ? seoConfig.titleTemplate.replace('%s', pageData.title)
    : seoConfig.defaultTitle;
    
  const description = pageData.description || seoConfig.description;
  const url = seoConfig.url + (pageData.path || '');
  const image = pageData.image || seoConfig.image;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      type: seoConfig.openGraph.type,
      locale: seoConfig.openGraph.locale,
      url,
      title,
      description,
      siteName: seoConfig.openGraph.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: seoConfig.twitter.cardType,
      site: seoConfig.twitter.site,
      creator: seoConfig.twitter.handle,
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateEventStructuredData() {
  const siteConfig = require('../config/site.json');
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: siteConfig.name,
    startDate: `${siteConfig.date}T${siteConfig.time}-05:00`,
    location: {
      '@type': 'Place',
      name: siteConfig.location.venue,
      address: siteConfig.location.address,
    },
    description: siteConfig.tagline,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: process.env.NODE_ENV === 'production' ? 'https://mntacobell25k.com' : 'http://localhost:3000',
  };
}