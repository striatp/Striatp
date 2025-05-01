"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Underline from '@hover/Underline';
import Icon from '@components-types/Icon';

import GitHub from '@/components/icons/GitHub';
import Twitter from '@/components/icons/Twitter';
import LinkedIn from '@/components/icons/LinkedIn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  return (
    <header id="header" className='backdrop-blur-sm sticky p-4 lg:px-16 top-0 left-0 right-0 z-30 transition-all duration-300 bg-[#232e3e]/0'>
      <div className={`max-w-7xl mx-auto flex flex-col gap-3 ${ window.innerWidth > 560 ? "flex-row" : "flex-col" } justify-between items-center lg:transition-all lg:duration-300`}>
        {/* Branding */}
        <Link href="/">
          <div className="flex items-center space-x-4">
            <img src="logo.svg" alt="Ravium Labs Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold">Ravium <span className='text-[#6c8eaf]'>Labs</span></span>
          </div>
        </Link>

        {/* Branding and Mobile Menu Button */}
        <div>
          
          {/* Mobile Menu Button */}
          <button 
            id="menu-button"
            className="sm:hidden text-gray-300 hover:text-white focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="sm:hidden w-full py-2 mt-2 bg-gray-800/90 backdrop-blur-md rounded-lg">
            <nav className="flex flex-col px-4">
              <ul className="space-y-3">
                <li>
                  <Link href="/api" target="_blank" className="block py-2 text-gray-300 hover:text-white transition duration-300">API</Link> 
                </li>
                <li>
                  <Link href="#features" className="block py-2 text-gray-300 hover:text-white transition duration-300">Fonctionnalités</Link>
                </li>
                <li>
                  <Link href="/projects" className="block py-2 text-gray-300 hover:text-white transition duration-300">Projets</Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 text-gray-300 hover:text-white transition duration-300">À propos</Link>
                </li>
                <li>
                  <Link href="https://github.com/RaviumLabs" target="_blank" className="block py-2 text-gray-300 hover:text-white transition duration-300">GitHub</Link>
                </li>
              </ul>
              
              {/* Mobile Social Links */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-700">
                <Link href="https://github.com/RaviumLabs" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15">
                  <Icon><GitHub /></Icon>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15">
                  <Icon><LinkedIn /></Icon>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15">
                  <Icon><Twitter /></Icon>
                </Link>
              </div>
            </nav>
          </div>
        )}

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