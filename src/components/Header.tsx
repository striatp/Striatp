import Link from 'next/link';
import Image from 'next/image';

import Underline from '@hover/Underline';
import Icon from '@components-types/Icon';

import GitHub from '@/components/icons/GitHub';
import Twitter from '@/components/icons/Twitter';
import LinkedIn from '@/components/icons/LinkedIn';

export default function Header() {
  return (
    <header id="header" className='backdrop-blur-sm sticky p-4 lg:px-16 top-0 left-0 right-0 z-30 transition-all duration-300 bg-[#232e3e]/0'>
      <div className="max-w-7xl mx-auto flex flex-col gap-3 lg:flex-row justify-between items-center lg:transition-all lg:duration-300">
        {/* Branding */}
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image src="logo.svg" alt="Ravium Labs Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold">Ravium <span className='text-[#6c8eaf]'>Labs</span></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="">
          <ul className="hidden space-x-6 flex-wrap sm:flex">
            <li className="relative group">
              <Link href="/api" target="_blank" className="text-gray-300 group-hover:text-white transition duration-300"><Underline>API</Underline></Link> 
            </li>
            <li className="relative group">
              <Link href="#features" className="text-gray-300 hover:text-white transition duration-300"><Underline>Fonctionnalités</Underline></Link>
            </li>
            <li className="relative group">
              <Link href="/projects" className="text-gray-300 group-hover:text-white transition duration-300"><Underline>Projets</Underline></Link>
            </li>
            <li className="relative group">
              <Link href="/about" className="text-gray-300 group-hover:text-white transition duration-300"><Underline>À propos</Underline></Link>
            </li>
            <li className="relative group">
              <Link href="https://github.com/RaviumLabs" target="_blank" className="text-gray-300 group-hover:text-white transition duration-300"><Underline>GitHub</Underline></Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Social Links */}
        <div className='hidden lg:flex gap-2 shrink-0'>
          <Link href="https://github.com/RaviumLabs" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
            <Icon><GitHub /></Icon>
          </Link>
          <Link href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
            <Icon><LinkedIn /></Icon>
          </Link>
          <Link href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
            <Icon><Twitter /></Icon>
          </Link>
        </div>
      </div>
    </header>
  );
}