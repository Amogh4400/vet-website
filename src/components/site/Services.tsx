import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Stethoscope, Syringe, Scissors, Sparkles, HeartPulse, Bone, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Stethoscope, title: "General Checkups", desc: "Comprehensive wellness exams that catch issues before they grow.", tone: "sage", span: "md:col-span-2 md:row-span-2" },
  { icon: Syringe,     title: "Vaccinations",     desc: "Tailored vaccine plans for every life stage.", tone: "sky",  span: "md:col-span-2" },
  { icon: HeartPulse,  title: "Emergency Care",   desc: "24/7 critical care when seconds matter most.", tone: "cream", span: "md:col-span-2" },
  { icon: Scissors,    title: "Surgery",          desc: "Modern surgical suites with the gentlest hands.", tone: "sky", span: "md:col-span-2" },
  { icon: Sparkles,    title: "Grooming Spa",     desc: "A calm spa day for shiny coats and happy tails.", tone: "sage", span: "md:col-span-2" },
  { icon: Bone,        title: "Dental Care",      desc: "Healthy mouths, healthier hearts, happier pets.", tone: "cream", span: "md:col-span-2" },
] as const;

const toneBg = (t: string) =>
  t === "sage" ? "bg-sage/15" : t === "sky" ? "bg-sky/25" : "bg-cream-deep";

export const Services = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-card", {
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
        y: 60, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.08,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="services" className="relative bg-background py-24 md:py-36">
      <div className="container">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/50">Services</p>
            <h2 className="display-font max-w-2xl text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
              Everything they need, <span className="italic text-sage">under one warm roof.</span>
            </h2>
          </div>
          <a href="#book" className="group inline-flex items-center gap-2 text-sm font-medium">
            View all services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)]">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`svc-card group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft ${toneBg(s.tone)} ${s.span ?? ""}`}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-background/40 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-background/70 shadow-soft transition-transform duration-500 group-hover:-rotate-6">
                  <s.icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-xs text-foreground/40">0{i + 1}</span>
              </div>
              <div className="relative mt-12">
                <h3 className={`display-font font-light leading-tight tracking-tight ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/70">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};