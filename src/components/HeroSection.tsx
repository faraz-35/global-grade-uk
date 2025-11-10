"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, GraduationCap, Globe, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 text-blue-900">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">
                Trusted by 1000+ Students
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your Journey Starts Here –
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Study in the UK with Confidence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Free consultation • Expert guidance • Complete admission support
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Global Network</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Users className="w-5 h-5 text-amber-600" />
                <span className="text-sm">Expert Mentors</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <span className="text-sm">Fast Processing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {/*<Button
                variant="primary"
                size="large"
                className="shadow-lg hover:shadow-blue-200"
              >
                🎯 Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>*/}
              <Button
                variant="outline"
                size="large"
                className=" "
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                📞 Book Free Consultation
              </Button>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/img3.jpg"
                    alt="Success Stories - Students studying abroad"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
                    <p className="text-white/90">
                      Join thousands of successful students
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-gray-100/30 to-gray-200/30 rounded-2xl shadow-lg transform rotate-12 border border-gray-200/50"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-gray-100/40 to-gray-200/40 rounded-2xl shadow-lg transform -rotate-12 border border-gray-300/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
