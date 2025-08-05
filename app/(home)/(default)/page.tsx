import Hero from '@/components/Hero';
import HeroCarousel from '@/components/HeroCarousel';
import NimaayaNavbar from '@/app/navbar/navbar';
import About from '@/app/about/page';
import DiagnosticService from '@/app/diagnostic-services/page';
import IntervantionalRadiology from '@/components/intervantionalRadiology';
export default function Page() {
  return (
     <div className="">
      <NimaayaNavbar />
      <HeroCarousel />
      <DiagnosticService />
      <IntervantionalRadiology />
      <About />

    </div>
 
  );
}
