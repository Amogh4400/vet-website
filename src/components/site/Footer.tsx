import { PawPrint, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="bg-background pb-10 pt-20">
    <div className="container">
      <div className="grid gap-12 border-t border-foreground/10 pt-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background">
              <PawPrint className="h-4 w-4" />
            </span>
            <span className="display-font text-2xl">Pawsitive</span>
          </a>
          <p className="mt-5 max-w-sm text-foreground/65">
            Premium veterinary care, designed with calm hearts and steady hands.
            Built for the pets we love and the families they belong to.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-secondary transition-colors hover:bg-foreground hover:text-background">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-foreground/50">Visit</p>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-sage" /> 248 Linden Ave, Brooklyn, NY 11216</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-sage" /> +1 (718) 555-0142</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-sage" /> hello@pawsitivecare.co</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-foreground/50">Clinic</p>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#team" className="hover:text-foreground">Team</a></li>
            <li><a href="#book" className="hover:text-foreground">Booking</a></li>
            <li><a href="#" className="hover:text-foreground">Careers</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-foreground/50">Hours</p>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li>Mon–Fri · 8am – 8pm</li>
            <li>Sat · 9am – 6pm</li>
            <li>Sun · 10am – 4pm</li>
            <li className="text-sage">Emergency · 24/7</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-foreground/10 pt-8 text-xs text-foreground/50 md:flex-row">
        <p>© {new Date().getFullYear()} Pawsitive Care. Crafted with love in Brooklyn, NY.</p>
        <p>Privacy · Terms · Accessibility</p>
      </div>
    </div>
  </footer>
);