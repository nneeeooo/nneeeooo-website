import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { getDesign } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';

export const metadata: Metadata = {
  title: 'Andrii Lytvyn - Design',
};

export default async function DesignPage() {
  const designData = await getDesign();
  const posts = designData?.flatMap((item) => item.posts || []) || [];

  return (
    <div className="w-full flex-col px-2 py-2 md:p-6 flex md:h-screen h-[110vh] overflow-y-auto grid-bg">
      <Navbar />
      <div className="grid grid-cols-1 pb-24 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:pb-0">
        {posts.map((post, idx) => {
          if (!post.preview) return null;
          const imageUrl = urlFor(post.preview)
            .format('webp')
            .height(1000)
            .quality(95)
            .url();

          const content = (
            <img
              src={imageUrl}
              alt="Design artwork"
              className="w-full border rounded-lg overflow-hidden border-[#3f3f3f] object-cover"
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
    </div>
  );
}
