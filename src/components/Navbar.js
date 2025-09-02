import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  LinkedInIcon,
  MailIcon,
  IconGithubnav,
} from './Icons';

import logo from '../../public/images/logo.png';
import Image from 'next/image';
const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-1 rounded inline-block bg-white -bottom-0.5 w-0 absolute right-0
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="sticky text-white p-4 shadow-md z-10  top-0 flex items-center justify-around ">
      <Link href="/"><Image src={logo} alt="S Kabri" className="w-14" /></Link>
      <nav>
        <CustomLink href="/" title="Home" className="ml-4 md:hidden" />
        <CustomLink href="/about" title="About" className="mx-4" />
       <CustomLink href="/project" title="Projects" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="mx-4" />
      </nav>
      <div>
        <nav className="flex flex-row  hover:cursor-pointer items-center md:hidden  ">
          <Link
            href="https://www.linkedin.com/in/axita-dash-63b246366/"
            className="mr-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            target="_blank"
          >
            <LinkedInIcon />{' '}
          </Link>{' '}
          <Link
            href="/contact"
            className="mr-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            target="_blank"
          >
            <MailIcon />{' '}
          </Link>
          <Link
            href="https://github.com/Axitadash"
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          >
            <IconGithubnav />{' '}
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
