import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display font-bold text-lg text-secondary-foreground leading-tight">
            Qalaht Al Tilal<br />
            <span className="text-primary text-sm font-semibold tracking-wide">Real Estate</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === l.href
                  ? "text-primary"
                  : "text-secondary-foreground/80"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            Schedule a Call
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-border/20 pb-6">
          <nav className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  location.pathname === l.href
                    ? "text-primary"
                    : "text-secondary-foreground/80"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button size="sm" className="gap-2 mt-2">
              <Phone className="h-4 w-4" />
              Schedule a Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
