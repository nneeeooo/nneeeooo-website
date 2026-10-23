import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const coolvetica = localFont({
  src: '../fonts/coolvetica rg.otf',
  variable: '--font-coolvetica',
  display: 'swap',
});

const helvetica = localFont({
  src: '../fonts/Helvetica.ttf',
  variable: '--font-helvetica',
  display: 'swap',
});

const moderniz = localFont({
  src: '../fonts/Moderniz.otf',
  variable: '--font-moderniz',
  display: 'swap',
});

const stretchPro = localFont({
  src: '../fonts/Stretch Pro.otf',
  variable: '--font-stretch',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://andriilytvyn.pp.ua';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Andrii Lytvyn · Motion Designer & Creative',
    template: '%s · Andrii Lytvyn',
  },
  description:
    'Motion designer producing marketing videos and static creatives, turning concepts into polished advertising content. Based in Lviv, Ukraine.',
  keywords: [
    'Andrii Lytvyn',
    'nneeeooo',
    'Motion Designer',
    'Graphic Designer',
    'Marketing Videos',
    'Static Creatives',
    'Desktop Publishing',
    'Web Development',
    'Portfolio',
    'Lviv',
    'Ukraine',
  ],
  authors: [{ name: 'Andrii Lytvyn', url: siteUrl }],
  creator: 'Andrii Lytvyn',
  publisher: 'Andrii Lytvyn',
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Andrii',
    lastName: 'Lytvyn',
    username: 'nneeeooo',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Andrii Lytvyn Portfolio',
    title: 'Andrii Lytvyn · Motion Designer & Creative',
    description:
      'Motion designer producing marketing videos and static creatives, turning concepts into polished advertising content.',
    images: [
      {
        url: '/picture.png',
        width: 800,
        height: 800,
        alt: 'Andrii Lytvyn - Motion Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrii Lytvyn · Motion Designer & Creative',
    description:
      'Motion designer producing marketing videos and static creatives, turning concepts into polished advertising content.',
    images: ['/picture.png'],
    creator: '@nneeeooo',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Andrii Lytvyn',
      alternateName: 'nneeeooo',
      jobTitle: 'Motion Designer & Creative',
      description:
        'Motion designer producing marketing videos and static creatives, based in Lviv, Ukraine.',
      url: siteUrl,
      image: `${siteUrl}/picture.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lviv',
        addressCountry: 'UA',
      },
      sameAs: [
        'https://t.me/nneeeooo',
        'https://github.com/nneeeooo',
        'https://www.linkedin.com/in/andrii-lytvyn-profile',
        'mailto:lytvyn.andrii.contact@gmail.com',
      ],
      knowsAbout: [
        'Motion Design',
        'Marketing Videos',
        'Static Creatives',
        'Graphic Design',
        'Desktop Publishing',
        'Web Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Andrii Lytvyn Portfolio',
      description:
        'Portfolio of Andrii Lytvyn — motion designer producing marketing videos and static creatives.',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${coolvetica.variable} ${helvetica.variable} ${moderniz.variable} ${stretchPro.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
