import Image from 'next/image';
import Button from '@/components/Button';
import { RiTelegram2Fill } from 'react-icons/ri';
import { BiLogoGmail } from 'react-icons/bi';
import { PiReadCvLogoFill } from 'react-icons/pi';

export default function Home() {
  const bio = `I’m a motion designer producing marketing videos and static creatives, turning creative concepts into polished advertising content.

2+ years of design experience
(graphic design, desktop publishing, marketing)

Based in Lviv, Ukraine · Open to remote collaboration`;

  return (
    <main className="flex flex-col py-6 justify-center pl-6 md:pt-0 md:pl-24 text-[1rem] leading-[1.25rem] min-h-screen">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3 md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[30vw] max-w-[90vw] sm:max-w-[70vw]">
          <div className="flex flex-col gap-6 group">
            <Image
              src="/picture.png"
              alt="Andrii Lytvyn - Motion Designer and Creative"
              width={192}
              height={192}
              priority
              className="rounded-lg max-w-[12rem] h-auto object-cover"
            />
            <h1 className="font-moderniz leading-6 text-[20px]">
              Andrii Lytvyn
            </h1>
          </div>

          <p className="flex flex-col gap-1 text-[20px] leading-6 whitespace-pre-line">
            {bio}
          </p>
        </header>

        <nav aria-label="Portfolio sections" className="flex flex-wrap gap-2">
          <Button
            text="design portfolio"
            href="/design"
            target="_self"
          />
          <Button
            text="webdev projects"
            href="/webdev"
            target="_self"
          />
        </nav>

        <section aria-label="Contact and resume" className="flex flex-wrap gap-2">
          <Button
            text="telegram"
            icon={<RiTelegram2Fill className="w-4 h-4" />}
            href="https://t.me/nneeeooo"
            target="_blank"
          />
          <Button
            text="email"
            icon={<BiLogoGmail className="w-4 h-4" />}
            href="mailto:lytvyn.andrii.contact@gmail.com"
            target="_blank"
          />
          <Button
            text="resume"
            icon={<PiReadCvLogoFill className="w-4 h-4" />}
            href="/Resume_Andrii_Lytvyn_Aug_2026.pdf"
            target="_blank"
          />
        </section>
      </div>
    </main>
  );
}
