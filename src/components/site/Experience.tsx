import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { img: g1, caption: "Gentle care for every visit", tag: "Feline wellness" },
  { img: g2, caption: "Calm minds, wagging tails", tag: "Puppy program" },
  { img: g3, caption: "Compassion in every touch", tag: "Exotic & small pets" },
  { img: g4, caption: "Comfort that feels like home", tag: "Senior care" },
];

export const Experience = () => {
  const ref = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = () => track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="relative overflow-hidden bg-secondary"
    >
      <div className="container pt-24 md:pt-32">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/50">— A pet's eye view</p>
        <h2 className="display-font max-w-3xl text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
          Quiet rooms, soft hands, <span className="italic text-sage">moments to remember.</span>
        </h2>
      </div>

      <div className="relative h-screen overflow-hidden">
        <div ref={trackRef} className="absolute left-0 top-1/2 flex -translate-y-1/2 gap-6 pl-[5vw] will-change-transform">
          {items.map((it, i) => (
            <figure
              key={i}
              className="relative w-[78vw] max-w-[640px] flex-shrink-0 overflow-hidden rounded-[2rem] shadow-warm"
            >
              <img
                src={it.img}
                alt={it.caption}
                width={1024}
                height={1280}
                loading="lazy"
                className="h-[70vh] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-7 text-background">
                <span className="inline-block rounded-full bg-background/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                  {it.tag}
                </span>
                <p className="display-font mt-3 text-2xl font-light md:text-3xl">{it.caption}</p>
              </figcaption>
            </figure>
          ))}
          <div className="flex w-[20vw] flex-shrink-0 items-center justify-center text-foreground/40">
            <span className="display-font text-2xl italic">— end of reel</span>
          </div>
        </div>
      </div>
    </section>
  );
};