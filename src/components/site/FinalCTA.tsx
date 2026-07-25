import ctaImg from "@/assets/cta-pets.jpg";
import { ArrowUpRight } from "lucide-react";

export const FinalCTA = () => (
  <section className="relative overflow-hidden bg-background py-12">
    <div className="container">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-warm">
        <img src={ctaImg} alt="A puppy and kitten napping together" loading="lazy" width={1600} height={900}
          className="h-[70vh] min-h-[480px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-foreground/70 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 grid place-items-center px-6">
          <div className="max-w-3xl text-center text-background">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] opacity-70">— Ready when you are</p>
            <h2 className="display-font text-balance text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95]">
              Give them the care <span className="italic">they deserve.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg opacity-80">
              Join 2,400+ families who chose calm, modern, compassionate care for the ones they love most.
            </p>
            <a href="#book"
               className="group mt-10 inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground transition-transform duration-300 hover:scale-[1.03]">
              Book an appointment
              <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground/10 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);