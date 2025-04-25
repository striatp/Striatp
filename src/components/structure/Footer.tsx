import { JSX } from 'react';
import Link from 'next/link'

import Container from '@components/Container';

export default function Footer(): JSX.Element {
  return (
    <footer className='bg-[#1e293b] text-white pt-4 pr-0 pl-0 pb-2'>
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 mb-12">
          <div>
            <h4>Ravium Labs</h4>
            <p>Développement de solutions open source innovantes et accessibles.</p>
            <div>
              <Link href={"#"}></Link>
              <Link href={"#"}></Link>
              <Link href={"#"}></Link>
            </div>
          </div>
          <div>
            <h4>Liens</h4>
            <ul>
              <li><Link href={"#features"}>Fonctionnalités</Link></li>
              <li><Link href={"#projects"}>Projets</Link></li>
              <li><Link href={"#about"}>A propos</Link></li>
              <li><Link href={"https://github.com/RaviumLabs"}>GitHub</Link></li>
            </ul>
          </div>
          <div>
            <h4>Ressources</h4>
            <ul>
              <li><Link href={"#"}>Documentation</Link></li>
              <li><Link href={"#"}>Tutoriels</Link></li>
              <li><Link href={"#"}>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Link href={"mailto:contact@raviumlabs.com"}>contact@raviumlabs.com</Link></li>
              <li><Link href={"#"}>Twitter</Link></li>
              <li><Link href={"#"}>Discord</Link></li>
            </ul>
          </div>
        </div>
        <div className='text-center pt-8 pb-8 border-t border-white/10 text-gray-400 text-sm'>© 2025 Ravium Labs. Tous droits réservés.</div>
      </Container>
    </footer>
  );
}