import { AboutInfo } from '@/components/about';
import { Cta } from '@/components/cta';
import { Head } from '@/components/head';
import { MeetDirectors } from '@/components/meet-directors';
import { OurClients } from '@/components/testimonials';

export function About() {
  return (
    <>
      <Head description='About MyTeam Multipage' title='About' />
      <AboutInfo />
      <MeetDirectors />
      <OurClients />
      <Cta />
    </>
  );
}
