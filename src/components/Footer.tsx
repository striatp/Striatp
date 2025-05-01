import { JSX } from 'react';
import Link from 'next/link';

import Container from '@components/Container';
import GitHub from '@/components/icons/GitHub';
import LinkedIn from '@/components/icons/LinkedIn';
import Twitter from '@/components/icons/Twitter';

import Icon from "@components-types/Icon";

import ComponentMetadata from '@/types/componentTypes';

const componentMetadata: ComponentMetadata = {
  title: "Footer Component",
  description: "This is the footer component for the Ravium Labs website.",
  author: "Ravium Labs",
  componentName: "Footer",
  category: "Layout",
  usage: "Beta",
  createdAt: "2025-04-25",
  updatedAt: "2025-04-29",
  version: "1.0.0",
  private: false,
  visibleInNav: false,
  requiresAuth: false,
  keywords: ["Footer", "Ravium Labs", "React", "Next.js", "Component"],
  embed: {
    color: "#0f172a",
    image: "https://example.com/footer-image.png",
  },
};

export default function Footer(): JSX.Element {
  return (
    <footer className='bg-[#1e293b] text-white pt-30 pb-2' style={{
      backgroundImage: `url('footer-background/footer-bg1.svg')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
    }}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 pt-14">
          {/* Ravium Labs */}
          <div>
            <h4 className='text-2xl mb-6 font-semibold'>Ravium Labs</h4>
            <p className='block my-4 mx-0'>Développement de solutions open source innovantes et accessibles.</p>
            <div className='flex gap-4 mt-6'>
              <Link href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
                <Icon><GitHub></GitHub></Icon>
                </Link>
              <Link href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
                <Icon><LinkedIn></LinkedIn></Icon>
              </Link>
              <Link href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition duration-200 hover:bg-white/15'>
                <Icon><Twitter></Twitter></Icon>
              </Link>
            </div>
          </div>
          {/* Liens */}
          <div>
            <h4 className='text-2xl mb-6 font-semibold'>Liens</h4>
            <ul className="block my-4 text-gray-300">
              <li className='pb-2'><Link href={"#features"} className='hover:text-white transition duration-200 hover:underline'>Fonctionnalités</Link></li>
              <li className='pb-2'><Link href={"/projects"} className='hover:text-white transition duration-200 hover:underline'>Projets</Link></li>
              <li className='pb-2'><Link href={"/about"} className='hover:text-white transition duration-200 hover:underline'>À propos</Link></li>
              <li className='pb-2'><Link href={"https://github.com/RaviumLabs"} className='hover:text-white transition duration-200 hover:underline'>GitHub</Link></li>
            </ul>
          </div>
          {/* Ressources */}
          <div>
            <h4 className='text-2xl mb-6 font-semibold'>Ressources</h4>
            <ul className="block my-4 text-gray-300">
              <li className='pb-2'><Link href={"/documentation"} className='hover:text-white transition duration-200 hover:underline'>Documentation</Link></li>
              <li className='pb-2'><Link href={"/learn"} className='hover:text-white transition duration-200 hover:underline'>Tutoriels</Link></li>
              <li className='pb-2'><Link href={"/blog"} className='hover:text-white transition duration-200 hover:underline'>Blog</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className='text-2xl mb-6 font-semibold'>Contact</h4>
            <ul className="block my-4 text-gray-300">
              <li className='pb-2'><Link href={"mailto:contact@raviumlabs.com"} className='hover:text-white transition duration-200 hover:underline'>E-Mail</Link></li>
              <li className='pb-2'><Link href={"#"} className='hover:text-white transition duration-200 hover:underline'>Twitter</Link></li>
              <li className='pb-2'><Link href={"/discord"} className='hover:text-white transition duration-200 hover:underline'>Discord</Link></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className='text-2xl mb-6 font-semibold'>Aide</h4>
            <ul className="block my-4 text-gray-300">
              <li className='pb-2'><Link href={"/community"} className='hover:text-white transition duration-200 hover:underline'>Communauté</Link></li>
              <li className='pb-2'><Link href={"#"} className='hover:text-white transition duration-200 hover:underline'>Twitter</Link></li>
              <li className='pb-2'><Link href={"/discord"} className='hover:text-white transition duration-200 hover:underline'>Discord</Link></li>
            </ul>
          </div>
          {/* Legals */}
          <div>
            <h4 className='text-2xl mb-6 font-semibold'>Mentions légales</h4>
            <ul className="block my-4 text-gray-300">
              <li className='pb-2'><Link href={"/legals/terms-of-service"} className='hover:text-white transition duration-200 hover:underline'>Conditions d'utilisation</Link></li>
              <li className='pb-2'><Link href={"/legals/privacy-policy"} className='hover:text-white transition duration-200 hover:underline'>Politique de confidentialité</Link></li>
              <li className='pb-2'><Link href={"/legals/license"} className='hover:text-white transition duration-200 hover:underline'>Licence</Link></li>
            </ul>
          </div>
        </div>
        <div className='text-center pt-8 pb-8 border-t border-white/10 text-gray-400 text-sm'>© { new Date().getFullYear() } Ravium Labs. Tous droits réservés.</div>
      </Container>
    </footer>
  );
}