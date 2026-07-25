import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarHeart, Stethoscope, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { n: "01", icon: CalendarHeart, title: "Book your appointment", desc: "Pick a time that works in seconds — no calls, no waiting on hold." },
  { n: "02", icon: Stethoscope,   title: "Visit the clinic",      desc: "Calm waiting rooms, friendly faces, gentle exams from start to finish." },
  { n: "03", icon: Sparkles,      title: "Happy, healthy pet",    desc: "Leave with a clear plan, peace of mind, and a tail-wagging best friend." },
];

export const Process = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 50, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.15,
      });
      gsap.from(".timeline-line", {
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
        scaleX: 0, transformOrigin: "left center", duration: 1.4, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-secondary py-24 md:py-36">
      <div className="blob right-[-10%] top-[20%] h-[360px] w-[360px] bg-sage/30" />
      <div className="container relative">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/50">— How it works</p>
          <h2 className="display-font text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
            A calm journey, <span className="italic text-sage">from click to cuddle.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="timeline-line absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="step-card relative">
                <div className="relative grid h-24 w-24 place-items-center rounded-full bg-background shadow-soft">
                  <s.icon className="h-7 w-7 text-sage" />
                  <span className="absolute -right-2 -top-2 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-medium text-background">{s.n}</span>
                </div>
                <h3 className="display-font mt-8 text-2xl font-light">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm text-foreground/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};