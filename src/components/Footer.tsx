import { JSX } from 'react';
import Link from 'next/link';

import Container from '@components/Container';
import GitHub from '@icons/GitHub';
import LinkedIn from '@icons/LinkedIn';
import Twitter from '@icons/Twitter';

export default function Footer(): JSX.Element {
  return (
    <footer className='bg-[#1e293b] text-white pt-4 pr-0 pl-0 pb-2'>
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 mb-12 pt-7">
          <div>
            <h4 className='text-xl mb-6 font-semibold'>Ravium Labs</h4>
            <p className='block my-4 mx-0'>Développement de solutions open source innovantes et accessibles.</p>
            <div className='flex gap-4 mt-6'>
              <Link href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
                <GitHub></GitHub>
              </Link>
              <Link href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
                <LinkedIn></LinkedIn>
              </Link>
              <Link href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
                <Twitter></Twitter>
              </Link>
            </div>
          </div>
          <div>
            <h4 className='text-xl mb-6 font-semibold'>Liens</h4>
            <ul className="block my-4 text-gray-300">
              <li className='pb-2'><Link href={"/features"} className='hover:text-white transition duration-200 hover:underline'>Fonctionnalités</Link></li>
              <li className='pb-2'><Link href={"/projects"} className='hover:text-white transition duration-200 hover:underline'>Projets</Link></li>
              <li className='pb-2'><Link href={"/about"} className='hover:text-white transition duration-200 hover:underline'>A propos</Link></li>
              <li className='pb-2'><Link href={"https://github.com/RaviumLabs"} className='hover:text-white transition duration-200 hover:underline'>GitHub</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-xl mb-6 font-semibold'>Ressources</h4>
            <ul className="block my-4 text-gray-300">
              <li className='pb-2'><Link href={"/documentation"} className='hover:text-white transition duration-200 hover:underline'>Documentation</Link></li>
              <li className='pb-2'><Link href={"/learn"} className='hover:text-white transition duration-200 hover:underline'>Tutoriels</Link></li>
              <li className='pb-2'><Link href={"/blog"} className='hover:text-white transition duration-200 hover:underline'>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-xl mb-6 font-semibold'>Contact</h4>
            <ul className="block my-4 text-gray-300">
              <li className='pb-2'><Link href={"mailto:contact@raviumlabs.com"} className='hover:text-white transition duration-200 hover:underline'>contact@raviumlabs.com</Link></li>
              <li className='pb-2'><Link href={"#"} className='hover:text-white transition duration-200 hover:underline'>Twitter</Link></li>
              <li className='pb-2'><Link href={"#"} className='hover:text-white transition duration-200 hover:underline'>Discord</Link></li>
            </ul>
          </div>
        </div>
        <div className='text-center pt-8 pb-8 border-t border-white/10 text-gray-400 text-sm'>© { new Date().getFullYear() } Ravium Labs. Tous droits réservés.</div>
      </Container>
    </footer>
  );
}