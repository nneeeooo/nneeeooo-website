import Image from 'next/image';
import Button from '@/components/Button';
import {
  RiTelegram2Fill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiBehanceFill,
  RiDribbbleFill,
} from 'react-icons/ri';
import { BiLogoGmail } from 'react-icons/bi';
import { PiReadCvLogoFill } from 'react-icons/pi';
import { GiMagicLamp } from 'react-icons/gi';
import { MdOutlineLink } from 'react-icons/md';
import { getProfile } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';

function getCustomLinkIcon(title: string, url: string) {
  const t = title.toLowerCase();
  const u = url.toLowerCase();
  if (t.includes('linkedin') || u.includes('linkedin.com')) {
    return <RiLinkedinBoxFill className="w-4 h-4" />;
  }
  if (t.includes('djinni') || u.includes('djinni.co')) {
    return <GiMagicLamp className="w-4 h-4" />;
  }
  if (t.includes('github') || u.includes('github.com')) {
    return <RiGithubFill className="w-4 h-4" />;
  }
  if (t.includes('behance') || u.includes('behance.net')) {
    return <RiBehanceFill className="w-4 h-4" />;
  }
  if (t.includes('dribbble') || u.includes('dribbble.com')) {
    return <RiDribbbleFill className="w-4 h-4" />;
  }
  if (t.includes('instagram') || u.includes('instagram.com')) {
    return <RiInstagramFill className="w-4 h-4" />;
  }
  if (
    t.includes('twitter') ||
    t === 'x' ||
    u.includes('twitter.com') ||
    u.includes('x.com')
  ) {
    return <RiTwitterXFill className="w-4 h-4" />;
  }
  if (t.includes('youtube') || u.includes('youtube.com')) {
    return <RiYoutubeFill className="w-4 h-4" />;
  }
  return <MdOutlineLink className="w-4 h-4" />;
}

const defaultBio = `Marketing Motion Designer specializing in performance video ads and high-converting static creatives for mobile subscription apps, primarily on Meta.

Combines high-velocity generative AI pipelines (Seedance 2.5, Higgsfield, Nano Banana, ElevenLabs) with precise After Effects post-production, multi-layer compositing, visual pacing, and sound design.

BSc in Computer Science & Artificial Intelligence (Lviv Polytechnic).
Based in Lviv, Ukraine · Open to remote collaboration.`;

export default async function Home() {
  const profile = await getProfile();

  const name = profile?.name || 'Andrii Lytvyn';
  const bio = profile?.bio || defaultBio;
  const avatarUrl = profile?.avatar
    ? urlFor(profile.avatar).width(384).height(384).quality(90).url()
    : '/picture.png';

  const telegramHref = profile?.telegram || 'https://t.me/nneeeooo';
  const rawEmail = profile?.email || 'lytvyn.andrii.contact@gmail.com';
  const emailHref = rawEmail.startsWith('mailto:')
    ? rawEmail
    : `mailto:${rawEmail}`;

  const resumeHref =
    profile?.resumeFileUrl ||
    profile?.resumeUrl ||
    '/Resume_Andrii_Lytvyn_Oct_2026.pdf';

  return (
    <main className="flex flex-col py-6 justify-center pl-6 md:pt-0 md:pl-24 text-[1rem] leading-[1.25rem] min-h-screen">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3 md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[30vw] max-w-[90vw] sm:max-w-[70vw]">
          <div className="flex flex-col gap-6 group">
            <Image
              src={avatarUrl}
              alt={`${name} - Motion Designer and Creative`}
              width={192}
              height={192}
              priority
              className="rounded-lg max-w-[12rem] h-auto object-cover"
            />
            <h1 className="font-moderniz leading-6 text-[20px]">{name}</h1>
          </div>

          <p className="flex flex-col gap-1 text-[20px] leading-6 whitespace-pre-line">
            {bio}
          </p>
        </header>

        <section
          aria-label="Contact and links"
          className="flex flex-wrap gap-2"
        >
          {telegramHref && (
            <Button
              text="telegram"
              icon={<RiTelegram2Fill className="w-4 h-4" />}
              href={telegramHref}
              target="_blank"
            />
          )}
          {rawEmail && (
            <Button
              text="email"
              icon={<BiLogoGmail className="w-4 h-4" />}
              href={emailHref}
              target="_blank"
            />
          )}
          {resumeHref && (
            <Button
              text="resume"
              icon={<PiReadCvLogoFill className="w-4 h-4" />}
              href={resumeHref}
              target="_blank"
            />
          )}
          {profile?.customLinks?.map((link) => (
            <Button
              key={link.title}
              text={link.title}
              icon={getCustomLinkIcon(link.title, link.url)}
              href={link.url}
              target="_blank"
            />
          ))}
        </section>
      </div>
    </main>
  );
}
