import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Microscope, Heart, Phone } from "lucide-react";
import vetImg from "@/assets/trust-vet.jpg";

gsap.registerPlugin(ScrollTrigger);

const points = [
  { icon: ShieldCheck, title: "Experienced veterinarians", desc: "A team with 15+ years of average practice and a love for what they do." },
  { icon: Microscope,  title: "Advanced medical equipment", desc: "Digital imaging, in-house labs and modern surgical suites." },
  { icon: Heart,       title: "Compassion-first approach",  desc: "Low-stress handling and quiet rooms designed for calm." },
  { icon: Phone,       title: "24/7 emergency support",     desc: "Real humans, real fast — anytime your family needs us." },
];

export const Trust = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trust-img", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        scale: 1.1, opacity: 0, duration: 1.2, ease: "power3.out",
      });
      gsap.from(".trust-row", {
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
        x: 30, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-background py-24 md:py-36">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-sage/30 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-sky/40 blur-2xl" />
          <div className="trust-img relative overflow-hidden rounded-[2.5rem] shadow-warm">
            <img src={vetImg} alt="Veterinarian smiling with a patient dog" loading="lazy" width={1280} height={1280} className="h-[620px] w-full object-cover" />
          </div>
          <div className="glass animate-float-slow absolute -bottom-6 left-6 hidden rounded-2xl px-5 py-4 md:block">
            <p className="text-3xl font-light display-font">98%</p>
            <p className="text-xs text-foreground/60">owner satisfaction</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/50">— Why families stay</p>
          <h2 className="display-font text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight">
            Safety, science, and <span className="italic text-sage">a softer touch.</span>
          </h2>
          <p className="mt-5 max-w-md text-foreground/70">
            We obsess over the small details — quieter waiting rooms, warmed exam tables, treats by the door —
            because care is felt, not just delivered.
          </p>

          <ul className="mt-10 space-y-6">
            {points.map((p) => (
              <li key={p.title} className="trust-row flex gap-4">
                <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-sage/15">
                  <p.icon className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-foreground/65">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};