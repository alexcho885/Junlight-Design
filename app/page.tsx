import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Process from '@/components/Process';
import FeaturedWorks from '@/components/FeaturedWorks';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Process />
      <FeaturedWorks />
      <CallToAction />
    </>
  );
}