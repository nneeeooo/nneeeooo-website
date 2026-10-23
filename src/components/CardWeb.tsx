import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';
import type { SanityImage } from '@/sanity/types';

interface CardWebProps {
  title: string;
  description: string;
  stack: string;
  link: string;
  thumbDesktop: SanityImage;
  thumbMobile: SanityImage;
}

export default function CardWeb({
  title,
  description,
  stack,
  link,
  thumbDesktop,
  thumbMobile,
}: CardWebProps) {
  const desktopUrl = urlFor(thumbDesktop).width(1280).height(720).quality(90).url();
  const mobileUrl = urlFor(thumbMobile).width(800).height(600).quality(90).url();

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex h-fit aspect-[4/3] lg:aspect-video border border-[#3f3f3f] rounded-lg overflow-hidden group"
    >
      <div className="relative w-full h-full hidden lg:block">
        <Image
          src={desktopUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="relative w-full h-full lg:hidden">
        <Image
          src={mobileUrl}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute flex flex-col gap-1 bottom-6 left-6 text-[#000000] z-10 bg-white/80 p-3 rounded backdrop-blur-sm">
        <span className="font-moderniz text-[1rem] leading-5 [font-variant-ligatures:none]">
          {title}
        </span>
        <span className="text-sm">
          {description}
          <br />
          {stack}
        </span>
      </div>
    </Link>
  );
}
