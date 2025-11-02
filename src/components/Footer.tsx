"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">GlobalGrad</h3>
              <p className="text-blue-100 leading-relaxed">
                Your trusted partner in international education. We help
                students achieve their dreams of studying abroad with expert
                guidance and personalized support.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("#home")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#about")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#destinations")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    Study Destinations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#programs")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    Programs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("#programs")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    University Admissions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    Visa Assistance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#programs")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    Scholarship Guidance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#why-choose")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    Career Counseling
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#how-it-works")}
                    className="text-blue-100 hover:text-white transition-colors text-left w-full"
                  >
                    Pre-departure Support
                  </button>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Ready to Start Your Journey?
              </h4>
              <p className="text-blue-100">
                Get in touch with our education consultants today and take the
                first step toward your international education goals.
              </p>
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-blue-700 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Address</p>
                <p className="text-sm text-blue-100">
                  Suite 6733, Unit 3A 34-35 Hatton Garden
                  <br />
                  Holborn London EC1N 8DX
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Phone</p>
                <p className="text-sm text-blue-100">+44 20 1234 5678</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-sm text-blue-100">info@globalgrad.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              © {currentYear} GlobalGrad. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
