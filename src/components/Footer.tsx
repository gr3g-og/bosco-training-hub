import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Student Life", href: "/student-life" },
  { name: "Contact", href: "/#contact" },
];

const programLinks = [
  { name: "Electrical Installation", href: "/programs/electrical-installation" },
  { name: "Solar Energy Technology", href: "/programs/solar-energy" },
  { name: "Automobile", href: "/programs/automobile" },
  { name: "IT & Graphic Design", href: "/programs/it-graphic-design" },
  { name: "All Programs", href: "/programs" },
];

const facebookUrl = "https://www.facebook.com/DBTECH.Gh/";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--charcoal))] text-white px-6 md:px-12 pt-16 md:pt-20 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Don Bosco logo"
                className="w-11 h-11 rounded-full object-cover border-2 border-primary"
              />
              <span className="font-display font-bold text-base text-white leading-tight">
                Don Bosco <span className="text-primary-light">Training Institute</span>
              </span>
            </div>
            <p className="text-[13px] font-light leading-[1.75] text-white/40 max-w-[270px] mb-6">
              A Salesian non-profit technical institute in Ashaiman, Ghana.
              Learn a trade, earn a living.
            </p>
            <div className="flex gap-2.5">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[34px] h-[34px] rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-light mb-5">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              {exploreLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    className="text-[13px] font-light text-white/50 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-light mb-5">
              Programs
            </h4>
            <ul className="flex flex-col gap-2.5">
              {programLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    className="text-[13px] font-light text-white/50 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-light mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 text-[13px] font-light text-white/50">
              <li>Tema Community 22</li>
              <li>Off Afariwa–Akosombo Road</li>
              <li>Ashaiman, Ghana</li>
              <li>info@donboscoashaiman.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-3">
          <p className="text-[11px] font-light text-white/30">
            © {year} Don Bosco Training Institute, Ashaiman. All rights reserved. ·
            Website by{" "}
            <a
              href="https://greyfixtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-white transition-colors"
            >
              Greyfixtech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
