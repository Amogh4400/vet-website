import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Statement = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stmt-word", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        yPercent: 110,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.06,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const line1 = "They're not just pets.".split(" ");
  const line2 = "They're family.".split(" ");

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-32 md:py-48">
      <div className="blob left-[-5%] top-[20%] h-[300px] w-[300px] bg-sage/25" />
      <div className="blob right-[-5%] bottom-[10%] h-[260px] w-[260px] bg-sky/30" />
      <div className="container relative">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-foreground/50">
          — Our promise
        </p>
        <h2 className="display-font mx-auto max-w-5xl text-center text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.05] tracking-tight">
          <span className="block">
            {line1.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pr-3">
                <span className="stmt-word inline-block">{w}</span>
              </span>
            ))}
          </span>
          <span className="mt-2 block italic text-sage">
            {line2.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pr-3">
                <span className="stmt-word inline-block">{w}</span>
              </span>
            ))}
          </span>
        </h2>
      </div>
    </section>
  );
};