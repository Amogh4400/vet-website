import { Star } from "lucide-react";

const data = [
  { name: "Emma & Biscuit", pet: "Golden Retriever", text: "It feels like the team genuinely loves Biscuit as much as we do. Every visit is calm, kind, and unrushed.", color: "bg-sage/15" },
  { name: "Marcus & Luna",  pet: "Maine Coon",        text: "Luna used to hate the vet. Now she walks in like she owns the place. The space is unreal.", color: "bg-sky/20" },
  { name: "Priya & Coco",   pet: "French Bulldog",    text: "Booking took 30 seconds and they remembered every detail. This is the future of pet care.", color: "bg-cream-deep" },
  { name: "Daniel & Mochi", pet: "Shiba Inu",         text: "From the welcome treats to the follow-up text, every detail is thoughtful. We never want to leave.", color: "bg-sage/15" },
  { name: "Sophie & Pepper",pet: "Tabby Cat",         text: "Quiet rooms, gentle hands, and the loveliest staff. Pepper actually purred at the vet.", color: "bg-sky/20" },
];

export const Testimonials = () => {
  const loop = [...data, ...data];
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/50">— Loved by 2,400+ families</p>
            <h2 className="display-font max-w-2xl text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
              Stories from our <span className="italic text-sage">extended family.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-sage text-sage" />)}
            <span className="ml-2 text-sm text-foreground/70">4.97 · 2,432 reviews</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-6 px-6">
            {loop.map((t, i) => (
              <article
                key={i}
                className={`glass w-[360px] flex-shrink-0 rounded-[1.75rem] p-7 ${t.color}`}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-foreground text-foreground" />)}
                </div>
                <p className="display-font text-xl font-light leading-snug">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-foreground/10 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background text-xs font-medium">
                    {t.name.split(" ")[0][0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-foreground/60">{t.pet}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};