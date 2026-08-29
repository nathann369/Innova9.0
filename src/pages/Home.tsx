import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { TechStack } from '../components/TechStack';
// import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { NigeriaPromoPopup } from '../components/NigeriaPromoPopup';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
      <TechStack />
      {/* <Pricing /> */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <NigeriaPromoPopup />
    </main>
  );
}
