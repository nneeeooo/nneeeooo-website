import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
  icon?: React.ReactNode;
  target?: '_blank' | '_self';
}

export default function Button({
  text,
  href,
  icon,
  target = '_self',
}: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.endsWith('.pdf');
  const targetAttr = target === '_blank' || isExternal ? '_blank' : '_self';
  const relAttr = targetAttr === '_blank' ? 'noopener noreferrer' : undefined;

  return (
    <Link
      href={href}
      target={targetAttr}
      rel={relAttr}
      className="flex px-4 py-2.5 rounded-lg bg-[#ffffff] text-[#000000] w-fit items-center gap-2 hover:-translate-y-0.5 transition-transform"
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      <span>{text}</span>
    </Link>
  );
}
