import React from 'react';
import Button from './Button';
import { MdArrowBack } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between pb-3 md:pb-4">
      <Button
        text="homepage"
        icon={<MdArrowBack className="w-3.5 h-3.5" />}
        href="/"
        target="_self"
      />
      <span className="pt-1 pr-4 font-moderniz">Andrii Lytvyn</span>
    </div>
  );
}
