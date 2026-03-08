import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-display font-bold text-primary">Qalaht Al Tilal</span>
            <span className="text-sm tracking-widest uppercase ml-2 text-secondary-foreground/70">Real Estate</span>
            <p className="mt-4 text-sm text-secondary-foreground/70 leading-relaxed">
              Your trusted partner for premium UAE real estate investments. RERA Licensed.
            </p>
            <p className="mt-2 text-xs text-primary">RERA License: #907298</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {[
                { label: "Home", href: "/" },
                { label: "Properties", href: "/properties" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Building No 4851, Shop No 01</li>
              <li>Tilal City, Sharjah, UAE</li>
              <li>+971 500252026</li>
              <li>realestateqalahtaltilal@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Newsletter</h4>
            <p className="text-sm text-secondary-foreground/70 mb-4">
              Get the latest Dubai property insights delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-secondary-foreground/5 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <Button size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Social + GDPR */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-secondary-foreground/50 hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-secondary-foreground/40 text-center">
            © 2026 Qalaht Al Tilal Real Estate. All rights reserved. We comply with GDPR and UAE data protection regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
