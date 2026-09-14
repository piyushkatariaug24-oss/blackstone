'use client';

import ParticleNetwork from '@/components/sentinel/ParticleNetwork';
import LoadingScreen from '@/components/sentinel/LoadingScreen';
import ScrollProgress from '@/components/sentinel/ScrollProgress';
import CursorGlow from '@/components/sentinel/CursorGlow';
import Navbar from '@/components/sentinel/Navbar';
import Hero from '@/components/sentinel/Hero';
import About from '@/components/sentinel/About';
import Services from '@/components/sentinel/Services';
import Sectors from '@/components/sentinel/Sectors';
import Credentials from '@/components/sentinel/Credentials';
import Clients from '@/components/sentinel/Clients';
import Contact from '@/components/sentinel/Contact';
import Footer from '@/components/sentinel/Footer';
import FloatingButtons from '@/components/sentinel/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-dot-grid-masked pointer-events-none z-0" />
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Credentials />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
