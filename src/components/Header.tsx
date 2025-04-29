import { useState, useEffect } from 'react';
import Link from 'next/link';
import Underline from '@hover/HeaderUnderline';
import Icon from '@components-types/Icon';

import GitHub from '@/components/icons/GitHub';
import Twitter from '@/components/icons/Twitter';
import LinkedIn from '@/components/icons/LinkedIn';
import { Menu, X } from 'lucide-react';

export default function Header() {
  return (
    <header id="header" className='backdrop-blur-sm sticky p-4 md:p-6 lg:px-16 top-0 left-0 right-0 z-30 transition-all duration-300 bg-[#232e3e]/0'>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Branding */}
        <Link href="/">
          <div className="flex items-center space-x-4">
            <img src="logo.svg" alt="Ravium Labs Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold">Ravium <span className='text-[#6c8eaf]'>Labs</span></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            <li className="relative group">
              <Link href="/api" target="_blank" className="text-gray-300 group-hover:text-white transition duration-300">API</Link>
              <Underline> </Underline>
            </li>
            <li className="relative group">
              <a href="#features" className="text-gray-300 group-hover:text-white transition duration-300">
                Fonctionnalités
              </a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#6c8eaf] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="/projects" className="text-gray-300 group-hover:text-white transition duration-300">
                Projets
              </a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#6c8eaf] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#about" className="text-gray-300 group-hover:text-white transition duration-300">
                À propos
              </a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#6c8eaf] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="https://github.com/RaviumLabs" target="_blank" className="text-gray-300 group-hover:text-white transition duration-300">
                GitHub
              </a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#6c8eaf] transition-all duration-300 ease-in-out group-hover:w-full"></span>
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