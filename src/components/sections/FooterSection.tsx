import { MapPin, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Programmes", href: "#process" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQs", href: "#faq" },
    { label: "Book a Call", href: "#booking" },
  ];

  const programmes = [
    { label: "Alpha for Business", href: "#process" },
    { label: "FDE Programme", href: "#process" },
    { label: "Support & Funding", href: "#support" },
  ];

  return (
    <footer className="bg-hero-gradient text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src="/lovable-uploads/4cfd5d71-855e-4b22-aa48-82e859b3ce30.png"
              alt="Dorset Growth Logo"
              className="h-12 w-auto"
            />
            <p className="text-lg font-semibold text-white/90">
              Where Business Meets Purpose
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Helping businesses grow with purpose through proven programmes that 
              connect enterprise development with faith-based principles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Programmes</h4>
            <ul className="space-y-3">
              {programmes.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/70 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Dorset, United Kingdom</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white/70 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@dorsetgrowth.com"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  info@dorsetgrowth.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white/70 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+441onal"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Contact via booking
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Dorset Growth. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
