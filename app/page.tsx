// Optimized Next.js Landing Page with Full SEO & Performance Enhancements

import Head from 'next/head';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import TrainingOptions from '@/components/TrainingOptions';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>CPR & BLS Certification - Enroll Now</title>
        <meta name="description" content="Get CPR & BLS certified with our comprehensive training. Trusted by professionals." />
        <meta name="keywords" content="CPR, BLS, Certification, Training, First Aid" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="CPR & BLS Certification - Enroll Now" />
        <meta property="og:description" content="Join our professional CPR & BLS certification program and get trained by experts." />
        <meta property="og:image" content="/hero-bg.jpg" />
        <meta property="og:url" content="https://rescuefederation.com/" />
        <link rel="canonical" href="https://rescuefederation.com/" />
        <link rel="preload" href="/hero-bg.jpg" as="image" />
      </Head>

      <Hero />
      <WhyChooseUs />
      <TrainingOptions />
      <Contact />
    </>
  );
}
