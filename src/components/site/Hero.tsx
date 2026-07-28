import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Sparkles, ShieldCheck, Star, PawPrint, Heart } from "lucide-react";
import heroImg from "@/assets/hero-pet.jpg";

export const Hero = () => {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.1 });
      gsap.from(".hero-line", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from(".hero-sub", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.9 });
      gsap.from(".hero-cta > *", { y: 20, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1, delay: 1.05 });
      gsap.from(".hero-card", { y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.5 });
      gsap.from(".trust-badge", { y: 16, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1, delay: 1.3 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-screen overflow-hidden bg-gradient-hero pt-28 md:pt-36"
    >
      {/* Organic blobs */}
      <div className="blob animate-drift left-[-10%] top-[10%] h-[420px] w-[420px] bg-sage/40" />
      <div className="blob animate-drift left-[55%] top-[55%] h-[380px] w-[380px] bg-sky/40" style={{ animationDelay: "-6s" }} />
      <div className="blob animate-drift right-[-8%] top-[5%] h-[300px] w-[300px] bg-cream-deep" style={{ animationDelay: "-12s" }} />

      {/* Sparkles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <Sparkles
          key={i}
          className="animate-sparkle absolute text-sage/60"
          style={{
            left: `${(i * 73) % 95}%`,
            top: `${(i * 41) % 80 + 10}%`,
            width: 10 + (i % 4) * 4,
            height: 10 + (i % 4) * 4,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <div className="container relative grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full bg-foreground/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
            <PawPrint className="h-3.5 w-3.5" /> Premium veterinary care · Est. 2009
          </div>

          <h1 className="display-font mt-6 text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] tracking-tight text-balance">
            <span className="block overflow-hidden">
              <span className="hero-line block">Care they feel.</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block italic text-sage">
                Trust <span className="not-italic text-foreground">you see.</span>
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-8 max-w-xl text-lg leading-relaxed text-foreground/70 text-pretty">
            Premium veterinary care for the ones who mean everything. Gentle, modern,
            and quietly extraordinary — built around your pet's comfort.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all duration-300 hover:shadow-warm"
            >
              Book an appointment
              <span className="grid h-7 w-7 place-items-center rounded-full bg-background/15 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Explore services
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="trust-badge flex items-center gap-2 text-sm text-foreground/70">
              <ShieldCheck className="h-4 w-4 text-sage" /> Certified Veterinarians
            </div>
            <span className="trust-badge h-1 w-1 rounded-full bg-foreground/20" />
            <div className="trust-badge flex items-center gap-2 text-sm text-foreground/70">
              <Heart className="h-4 w-4 text-sage" /> 24/7 Emergency Care
            </div>
            <span className="trust-badge h-1 w-1 rounded-full bg-foreground/20" />
            <div className="trust-badge flex items-center gap-2 text-sm text-foreground/70">
              <Star className="h-4 w-4 fill-sage text-sage" /> 5-Star Rated · 2,400+ reviews
            </div>
          </div>
        </div>

        {/* Hero card */}
        <div className="lg:col-span-5">
          <div className="hero-card relative mx-auto max-w-md">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sage/30 blur-2xl" />
            <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-sky/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-warm">
              <img
                src={heroImg}
                alt="A veterinarian gently holding a happy golden retriever puppy"
                width={1600}
                height={1280}
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            {/* Floating glass cards */}
            <div className="glass animate-float-slow absolute -left-10 top-10 hidden rounded-2xl px-4 py-3 md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-sage/30">
                  <Heart className="h-4 w-4 text-sage" />
                </div>
                <div>
                  <p className="text-xs text-foreground/60">Today's check-in</p>
                  <p className="text-sm font-medium">Bella · Golden Retriever</p>
                </div>
              </div>
            </div>
            <div
              className="glass animate-float-slow absolute -right-6 bottom-12 hidden rounded-2xl px-4 py-3 md:block"
              style={{ animationDelay: "-3s" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {["#cbe3c1","#bcd9e9","#e8d6bd"].map((c) => (
                    <span key={c} className="h-6 w-6 rounded-full border-2 border-card" style={{ background: c }} />
                  ))}
                </div>
                <p className="text-xs">
                  <span className="font-semibold">12 vets</span> on call now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};