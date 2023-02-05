import { Cta } from '@/components/cta';
import { Feature } from '@/components/feature';
import { Footer } from '@/components/footer';
import { Head } from '@/components/head';
import { Hero } from '@/components/hero';
import { Testimonials } from '@/components/testimonials';

export function IndexPage() {
  return (
    <>
      <Head description='Welcome to MyTeam Multipage react app' />
      <Hero />
      <Feature />
      <Testimonials />
      <Cta />
    </>
  );
}
