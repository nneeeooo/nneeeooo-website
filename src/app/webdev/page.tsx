import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CardWeb from '@/components/CardWeb';
import { getWebdev } from '@/sanity/queries';

export const metadata: Metadata = {
  title: 'Andrii Lytvyn - Webdev',
};

export default async function WebdevPage() {
  const data = await getWebdev();
  const webdevItems = data?.webdev || [];

  return (
    <div className="flex flex-col px-2 py-3 md:p-6 md:h-screen h-[110vh] overflow-y-auto">
      <Navbar />
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
    </div>
  );
}
