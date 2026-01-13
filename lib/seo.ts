import { Metadata } from 'next';

export interface LocalizedMetadata {
  locale: 'en-GB' | 'ro' | 'en';
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

const localeConfig: Record<string, LocalizedMetadata> = {
  'en-GB': {
    locale: 'en-GB',
    title: 'Ioana Web Studio | Portfolio Websites for Small Brands & Creators',
    description: 'Helping small brands & creators stand out online with simple, stylish portfolio websites—thoughtful design, client-focused, growth-oriented, and fast & reliable.',
    keywords: [
      'portfolio website design UK',
      'small brand web design',
      'creator portfolio sites',
      'freelance web developer UK',
      'web designer London',
      'custom portfolio website',
      'professional web design',
      'Ioana Web Studio',
    ],
  },
  'ro': {
    locale: 'ro',
    title: 'Ioana Web Studio | Site-uri Portfolio pentru Mărcile Mici & Creatori',
    description: 'Ajutând mărcile mici și creatorii să se remarce online cu site-uri portfolio simple, elegante și orientate spre creștere. Design gândit, rapid și fiabil.',
    keywords: [
      'design site portfolio',
      'website pentru brand mic',
      'site creator',
      'web designer România',
      'servicii design web',
      'portofoliu online',
      'site web profesional',
      'Ioana Web Studio',
    ],
  },
  'en': {
    locale: 'en',
    title: 'Ioana Web Studio | Portfolio Websites for Small Brands & Creators',
    description: 'Custom portfolio websites for small brands and creators worldwide. Stand out online with stylish, modern, and high-performing designs.',
    keywords: [
      'portfolio website design',
      'small brand web design',
      'creator portfolio sites',
      'freelance web developer',
      'custom portfolio website',
      'professional web design',
      'Ioana Web Studio',
    ],
  },
};

export function getLocalizedMetadata(locale: 'en-GB' | 'ro' | 'en' = 'en-GB'): Metadata {
  const config = localeConfig[locale];
  const baseUrl = 'https://ioanawebstudio.com';
  const localeUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'Ioana Web Studio', url: baseUrl }],
    creator: 'Ioana Web Studio',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: localeUrl,
      languages: {
        'en-GB': `${baseUrl}/en-gb`,
        'ro': `${baseUrl}/ro`,
        'en': baseUrl,
        'x-default': baseUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: localeUrl,
      siteName: 'Ioana Web Studio',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Ioana Web Studio - Portfolio Website Design',
        },
      ],
      locale: locale === 'ro' ? 'ro_RO' : 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@IoanaWebStudio',
      creator: '@IoanaWebStudio',
      title: config.title,
      description: config.description,
      images: [`${baseUrl}/og-image.jpg`],
    },
  };
}

export function getSchemaOrgData(locale: 'en-GB' | 'ro' | 'en' = 'en-GB') {
  const baseUrl = 'https://ioanawebstudio.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ioana Web Studio',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: localeConfig[locale].description,
    sameAs: [
      'https://twitter.com/IoanaWebStudio',
      'https://linkedin.com/company/ioana-web-studio',
      'https://instagram.com/ioanapweb',
    ],
    areaServed: locale === 'ro' ? 'RO' : locale === 'en-GB' ? 'GB' : 'Worldwide',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@ioanawebstudio.com',
      url: baseUrl,
    },
    foundingDate: '2023',
    serviceType: 'Web Design & Development',
  };
}

export function getLocalBusinessSchema(locale: 'en-GB' | 'ro' | 'en' = 'en-GB') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ioana Web Studio',
    image: 'https://ioanawebstudio.com/logo.png',
    description: localeConfig[locale].description,
    url: 'https://ioanawebstudio.com',
    telephone: locale === 'ro' ? '+40...' : '+44...',
    email: 'hello@ioanawebstudio.com',
    areaServed: locale === 'ro' ? 'RO' : 'GB',
  };
}
