"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, GraduationCap, Globe, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">
                Trusted by 1000+ Students
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                From Pakistan to
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Premier UK Universities
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Free consultation • Expert guidance • Complete admission support
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 text-white/90">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Global Network</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-sm">Expert Mentors</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <ArrowRight className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Fast Processing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="large"
                className="shadow-2xl hover:shadow-blue-500/25"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="large"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
                    <p className="text-gray-300">
                      Join thousands of successful students
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl shadow-xl transform rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-xl transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
