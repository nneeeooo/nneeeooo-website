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

export const metadata: Metadata = {
  title: 'Andrii Lytvyn',
  description: 'Motion designer producing marketing videos and static creatives.',
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
      <body>{children}</body>
    </html>
  );
}
