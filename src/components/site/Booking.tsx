import { useState } from "react";
import { Cat, Dog, Rabbit, Bird, Stethoscope, Syringe, Scissors, Bone, ArrowRight, Check } from "lucide-react";

const pets = [
  { id: "dog", label: "Dog", icon: Dog },
  { id: "cat", label: "Cat", icon: Cat },
  { id: "rabbit", label: "Rabbit", icon: Rabbit },
  { id: "bird", label: "Bird", icon: Bird },
] as const;

const services = [
  { id: "checkup",  label: "Wellness checkup", icon: Stethoscope, time: "30 min" },
  { id: "vaccine",  label: "Vaccination",      icon: Syringe,    time: "20 min" },
  { id: "groom",    label: "Grooming spa",     icon: Scissors,   time: "60 min" },
  { id: "dental",   label: "Dental care",      icon: Bone,       time: "45 min" },
] as const;

const days = ["Mon 5", "Tue 6", "Wed 7", "Thu 8", "Fri 9", "Sat 10", "Sun 11"];
const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

export const Booking = () => {
  const [pet, setPet] = useState<string>("dog");
  const [svc, setSvc] = useState<string>("checkup");
  const [day, setDay] = useState<string>("Wed 7");
  const [time, setTime] = useState<string>("10:30");
  const [done, setDone] = useState(false);

  return (
    <section id="book" className="relative overflow-hidden bg-secondary py-24 md:py-36">
      <div className="blob left-[-5%] top-[10%] h-[300px] w-[300px] bg-sage/30" />
      <div className="blob right-[-5%] bottom-[5%] h-[300px] w-[300px] bg-sky/30" />

      <div className="container relative grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/50">— Book a visit</p>
          <h2 className="display-font text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
            A few taps. <span className="italic text-sage">A lifetime of comfort.</span>
          </h2>
          <p className="mt-5 max-w-md text-foreground/70">
            Pick your pet, choose what they need, and we'll have a warm welcome ready.
            Confirmation lands in your inbox in under a minute.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/70">
            {["Free first-visit consult", "Reminders by text or email", "Cancel or reschedule anytime"].map((x) => (
              <li key={x} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-sage/20 text-sage"><Check className="h-3.5 w-3.5" /></span>
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="glass relative overflow-hidden rounded-[2rem] p-6 md:p-10 shadow-soft">
            {done ? (
              <div className="grid place-items-center py-12 text-center">
                <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-sage/20 text-sage">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="display-font text-3xl font-light">You're all set.</h3>
                <p className="mt-3 max-w-md text-foreground/70">
                  We've reserved <strong>{day} at {time}</strong> for your {pet}. A confirmation is on its way.
                </p>
                <button onClick={() => setDone(false)} className="mt-8 rounded-full border border-foreground/15 px-6 py-3 text-sm hover:bg-foreground/5">
                  Book another
                </button>
              </div>
            ) : (
              <>
                <Step n="01" label="Select your pet" />
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {pets.map((p) => {
                    const active = pet === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setPet(p.id)}
                        className={`group flex flex-col items-center gap-3 rounded-2xl border p-5 transition-all duration-300 ${active ? "border-foreground bg-foreground text-background" : "border-foreground/10 bg-background/40 hover:border-foreground/30"}`}
                      >
                        <p.icon className={`h-7 w-7 transition-transform duration-300 group-hover:-translate-y-0.5 ${active ? "" : "text-sage"}`} />
                        <span className="text-sm font-medium">{p.label}</span>
                      </button>
                    );
                  })}
                </div>

                <Step n="02" label="Choose a service" className="mt-10" />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {services.map((s) => {
                    const active = svc === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSvc(s.id)}
                        className={`flex items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${active ? "border-foreground bg-foreground text-background" : "border-foreground/10 bg-background/40 hover:border-foreground/30"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`grid h-10 w-10 place-items-center rounded-xl ${active ? "bg-background/15" : "bg-sage/15 text-sage"}`}>
                            <s.icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-medium">{s.label}</span>
                        </div>
                        <span className={`text-xs ${active ? "opacity-70" : "text-foreground/50"}`}>{s.time}</span>
                      </button>
                    );
                  })}
                </div>

                <Step n="03" label="Pick a date & time" className="mt-10" />
                <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
                  {days.map((d) => {
                    const active = day === d;
                    return (
                      <button
                        key={d}
                        onClick={() => setDay(d)}
                        className={`flex-shrink-0 rounded-2xl px-5 py-3 text-sm transition-all duration-300 ${active ? "bg-foreground text-background" : "bg-background/40 hover:bg-background/70"}`}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {times.map((t) => {
                    const active = time === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setTime(t)}
                        className={`rounded-xl py-3 text-sm transition-all duration-300 ${active ? "bg-sage text-sage-foreground" : "bg-background/40 hover:bg-background/70"}`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setDone(true)}
                  className="group mt-10 inline-flex w-full items-center justify-between gap-3 rounded-full bg-foreground px-7 py-5 text-sm font-medium text-background transition-all duration-300 hover:shadow-warm sm:w-auto"
                >
                  Confirm appointment · {day}, {time}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-background/15 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ n, label, className = "" }: { n: string; label: string; className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <span className="rounded-full bg-foreground/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/60">{n}</span>
    <h3 className="text-sm font-medium">{label}</h3>
  </div>
);