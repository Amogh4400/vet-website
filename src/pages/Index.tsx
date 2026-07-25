import { useLenis } from "@/hooks/useLenis";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Statement } from "@/components/site/Statement";
import { Services } from "@/components/site/Services";
import { Experience } from "@/components/site/Experience";
import { Trust } from "@/components/site/Trust";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Team } from "@/components/site/Team";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  useLenis();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Statement />
      <Services />
      <Experience />
      <Trust />
      <Process />
      <Testimonials />
      <Booking />
      <Team />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
