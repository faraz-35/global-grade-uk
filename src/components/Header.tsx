"use client";

import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Destinations", href: "#destinations" },
    { name: "Programs", href: "#programs" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-xl ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              GlobalGrad UK
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 hover:text-blue-800 ${
                  isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="small"
              className={`${
                isScrolled
                  ? "border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-blue-800"
              }`}
              onClick={() => scrollToSection("#contact")}
            >
              📞 Book Consultation
            </Button>
            <Button
              variant="primary"
              size="small"
              onClick={() => scrollToSection("#contact")}
            >
              🎯 Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 rounded-b-2xl shadow-xl mt-2">
            <div className="py-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <Button
                  variant="outline"
                  size="small"
                  className="w-full border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                  onClick={() => scrollToSection("#contact")}
                >
                  📞 Book Consultation
                </Button>
                <Button
                  variant="primary"
                  size="small"
                  className="w-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  🎯 Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
