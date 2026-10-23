import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { getDesign } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';

export const metadata: Metadata = {
  title: 'Design Portfolio',
  description:
    'Selected motion design works, marketing posters, and static visual creatives produced by Andrii Lytvyn.',
  alternates: {
    canonical: '/design',
  },
  openGraph: {
    title: 'Design Portfolio · Andrii Lytvyn',
    description:
      'Selected motion design works, marketing posters, and static visual creatives produced by Andrii Lytvyn.',
    url: '/design',
  },
};

export default async function DesignPage() {
  const designData = await getDesign();
  const posts = designData?.flatMap((item) => item.posts || []) || [];

  return (
    <main className="w-full flex-col px-2 py-2 md:p-6 flex md:h-screen h-[110vh] overflow-y-auto grid-bg">
      <Navbar />
      <h1 className="sr-only">Design Portfolio · Andrii Lytvyn</h1>
      <div className="grid grid-cols-1 pb-24 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:pb-0">
        {posts.map((post, idx) => {
          if (!post.preview) return null;
          const imageUrl = urlFor(post.preview)
            .format('webp')
            .width(1200)
            .quality(80)
            .url();

          const content = (
            <Image
              src={imageUrl}
              alt={`Graphic and motion design creative ${idx + 1} by Andrii Lytvyn`}
              width={600}
              height={800}
              sizes="(min-width: 1536px) 25vw, (min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full h-auto border rounded-lg overflow-hidden border-[#3f3f3f] object-cover"
              loading="lazy"
            />
          );

          if (post.link) {
            return (
              <Link
                key={post.preview.asset?._ref || idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </Link>
            );
          }

          return <div key={post.preview.asset?._ref || idx}>{content}</div>;
        })}
      </div>
    </main>
  );
}
