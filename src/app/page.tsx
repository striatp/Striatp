"use client"

import { JSX } from 'react';

import Header from '@components/Header';
import Hero from '@components/Hero';
import Features from '@/components/Features';
import Projects from '@components/Projects';
import Container from '@/components/Container';
import Link from 'next/link';
import Stats from '@components/Stats';
import Footer from '@components/Footer';

import Body from '@components/Body';

export default function Home(): JSX.Element {
  return (
    <Body>
        <Header></Header>
        <div className='flex justify-center items-center flex-col'>
          <Hero></Hero>
          <Features></Features>
          <Projects></Projects>
          <Container>
            <section>
              <div>
                <h2>Rejoignez notre communauté</h2>
                <p>Contribuez à nos projets open source et participez à l'innovation technologique.</p>
                <Link href={"https://github.com/RaviumLabs"}>Découvrir sur GitHub</Link>
              </div>
              <Stats></Stats>
            </section>
          </Container>
        </div>
        <Footer></Footer>
    </Body>
  );
}