import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import d1 from "@/assets/doc-1.jpg";
import d2 from "@/assets/doc-2.jpg";
import d3 from "@/assets/doc-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { img: d1, name: "Dr. Eliza Hart",  role: "Lead Veterinarian",     bio: "Internal medicine specialist with 14 years of practice. Believes in slow exams and lots of treats." },
  { img: d2, name: "Dr. Owen Carter", role: "Surgery & Emergency",   bio: "Trauma-trained surgeon and lifelong dog dad. The calm in any storm." },
  { img: d3, name: "Dr. Mei Tanaka",  role: "Feline & Exotic Care",  bio: "Cat whisperer, rabbit advocate, and a low-stress handling certified specialist." },
];

export const Team = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 50, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="team" className="relative bg-background py-24 md:py-36">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/50">— Meet the humans</p>
          <h2 className="display-font text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
            Warm faces who treat <span className="italic text-sage">every pet like their own.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="team-card group relative overflow-hidden rounded-[2rem] bg-secondary">
              <div className="relative h-[460px] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" width={800} height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-70">{m.role}</p>
                  <h3 className="display-font mt-2 text-2xl font-light">{m.name}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-90">
                    {m.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};