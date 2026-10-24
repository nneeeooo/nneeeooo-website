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
    default: 'Andrii Lytvyn · Marketing Motion Designer · AI Video Ads',
    template: '%s · Andrii Lytvyn',
  },
  description:
    'Marketing motion designer specializing in performance video ads and high-converting static creatives for mobile subscription apps. Based in Lviv, Ukraine.',
  keywords: [
    'Andrii Lytvyn',
    'nneeeooo',
    'Marketing Motion Designer',
    'AI Video Ads',
    'Motion Design',
    'Performance Creatives',
    'After Effects',
    'Seedance',
    'Higgsfield',
    'Generative AI',
    'Mobile Ads',
    'Graphic Designer',
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
    title: 'Andrii Lytvyn · Marketing Motion Designer · AI Video Ads',
    description:
      'Marketing motion designer specializing in performance video ads and high-converting static creatives for mobile subscription apps.',
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
    title: 'Andrii Lytvyn · Marketing Motion Designer · AI Video Ads',
    description:
      'Marketing motion designer specializing in performance video ads and high-converting static creatives for mobile subscription apps.',
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
      jobTitle: 'Marketing Motion Designer · AI Video Ads',
      description:
        'Marketing motion designer specializing in performance video ads and high-converting static creatives for mobile subscription apps.',
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
        'https://www.linkedin.com/in/andrii-lytvyn-profile/',
        'https://djinni.co/q/b51ed0dd48/',
        'mailto:lytvyn.andrii.contact@gmail.com',
      ],
      knowsAbout: [
        'Motion Design',
        'AI Video Ads',
        'Performance Creatives',
        'After Effects',
        'Seedance',
        'Higgsfield',
        'Generative AI',
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
      suppressHydrationWarning
      className={`${coolvetica.variable} ${helvetica.variable} ${moderniz.variable} ${stretchPro.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
