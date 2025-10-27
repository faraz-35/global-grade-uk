"use client";

import { Globe } from "lucide-react";

export function AboutUs() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            About GlobalGrad UK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Dreams,
            <span className="block bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text text-transparent">
              One Student at a Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            GlobalGrad.uk is a UK-based international student recruitment
            platform focused on helping talented students from Pakistan access
            world-class education opportunities in the United Kingdom.
          </p>
        </div>

        {/* Company Profile */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with a mission to simplify the study abroad journey, we
                offer end-to-end guidance — from university applications to visa
                support and pre-departure briefings. Our expert counselors, many
                of whom are international graduates themselves, provide tailored
                support every step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We collaborate with top UK institutions and ensure our students
                are well-prepared academically, financially, and emotionally to
                thrive in a global environment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    150+
                  </div>
                  <div className="text-sm text-gray-600">
                    University Partners
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
