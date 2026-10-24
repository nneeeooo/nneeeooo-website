import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CardWeb from '@/components/CardWeb';
import { sanity } from '@/sanity/client';

type WebdevItem = {
  thumbnail169: any;
  thumbnail43: any;
  title: string;
  description: string;
  stack: string;
  link?: string;
};

type WebdevDocument = {
  webdev?: WebdevItem[];
};

const query = `*[_type == "webdev"][0] { webdev }`;

export const metadata: Metadata = {
  title: 'Web Development Projects',
  description:
    'Selected web applications, interfaces, and frontend development projects built by Andrii Lytvyn.',
  alternates: {
    canonical: '/webdev',
  },
  openGraph: {
    title: 'Web Development Projects · Andrii Lytvyn',
    description:
      'Selected web applications, interfaces, and frontend development projects built by Andrii Lytvyn.',
    url: '/webdev',
  },
};

export default async function WebdevPage() {
  const data = await sanity.fetch<WebdevDocument | null>(query);
  const webdevItems = data?.webdev || [];

  return (
    <main className="flex flex-col px-2 py-3 md:p-6 md:h-screen h-[110vh] overflow-y-auto">
      <Navbar />
      <h1 className="sr-only">Web Development Projects · Andrii Lytvyn</h1>
      <div className="grid gap-4 lg:grid-cols-2 pb-12">
        {webdevItems.map((item) => (
          <CardWeb
            key={item.title}
            title={item.title}
            description={item.description}
            stack={item.stack}
            link={item.link}
            thumbDesktop={item.thumbnail169}
            thumbMobile={item.thumbnail43}
          />
        ))}
      </div>
    </main>
  );
}
