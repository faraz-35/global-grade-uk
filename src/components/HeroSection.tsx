'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              From Pakistan to Premier UK Universities
              <span className="block text-blue-600">Your Global Journey Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Free consultation - Trusted guidance, Visit & admission support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="large"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Apply Now
              </Button>
              <Button
                variant="secondary"
                size="large"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image of three smiling students, one in graduation gown</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
