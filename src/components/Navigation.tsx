import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home, the nav floats over the dark hero — go transparent at top.
  // On other pages, always show charcoal background for readability.
  const transparent = isHomePage && !scrolled;

  const navItems = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Student Life", href: "/student-life" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const renderLink = (item: { name: string; href: string }, mobile = false) => {
    const baseDesktop = "text-[12px] font-medium uppercase tracking-[0.08em] text-white/65 hover:text-white transition-colors duration-300 relative";
    const activeDesktop = "text-white after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-primary after:rounded-sm";
    const baseMobile = "block py-3 font-display text-2xl text-white border-b border-white/10";

    const className = mobile ? baseMobile : cn(baseDesktop, isActive(item.href) && activeDesktop);

    if (item.href.startsWith("/") && !item.href.includes("#")) {
      return (
        <Link to={item.href} className={className} onClick={() => setIsOpen(false)}>
          {item.name}
        </Link>
      );
    }
    return (
      <a href={item.href} className={className} onClick={() => setIsOpen(false)}>
        {item.name}
      </a>
    );
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        transparent ? "bg-transparent" : "bg-charcoal shadow-[0_1px_0_rgba(255,255,255,0.06)]"
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-[74px]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center gap-3.5">
              <span className="w-[46px] h-[46px] rounded-full overflow-hidden border-2 border-primary shrink-0">
                <img src={logo} alt="Don Bosco Training Institute logo" className="w-full h-full object-cover" />
              </span>
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-display font-bold text-[17px] text-white tracking-[0.02em]">
                  Don Bosco
                </span>
                <span className="text-[9px] uppercase tracking-[0.14em] text-white/50 mt-0.5">
                  TRAINING INSTITUTE
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {renderLink(item)}
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Button size="sm" asChild>
                <Link to={isHomePage ? "#contact" : "/#contact"}>Enroll Now</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-[5px] p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full charcoal overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden fixed inset-0 top-[74px] bg-charcoal px-6 pt-10 pb-12 flex flex-col gap-1 z-40 overflow-y-auto"
        >
          {navItems.map((item) => (
            <div key={item.name}>{renderLink(item, true)}</div>
          ))}
          <Button size="lg" className="w-full mt-6" asChild>
            <Link to={isHomePage ? "#contact" : "/#contact"} onClick={() => setIsOpen(false)}>
              Enroll Now
            </Link>
          </Button>
        </motion.div>
      )}
    </nav>
  );
};
