import {
  ArrowRight,
  CheckCircle,
  Users,
  FileText,
  Plane,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Free Assessment",
      description:
        "Share your academic background, career goals, and preferences for personalized university matching.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: 2,
      title: "Strategy & Shortlisting",
      description:
        "Get a curated list of suitable universities and courses based on your profile and aspirations.",
      icon: <FileText className="w-6 h-6" />,
      color: "from-amber-600 to-amber-700",
    },
    {
      step: 3,
      title: "Application Support",
      description:
        "Professional assistance with application forms, personal statements, and document preparation.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
    },
    {
      step: 4,
      title: "Visa Preparation",
      description:
        "Comprehensive visa guidance including document verification and mock interview preparation.",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      step: 5,
      title: "Interview Support",
      description:
        "Advanced mock interviews and final document checks to ensure visa success.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-rose-500 to-pink-500",
    },
    {
      step: 6,
      title: "Pre-Departure Ready",
      description:
        "Complete assistance with accommodation, city guides, and settling into your new environment.",
      icon: <Plane className="w-6 h-6" />,
      color: "from-blue-700 to-blue-800",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4" />6 Simple Steps
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              UK Education Made Simple
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A clear, step-by-step guide to our comprehensive support system
            designed for your success
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className={`bg-gradient-to-br ${step.color} bg-clip-text`}>
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>

              {/* Progress Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">
              Start Your Journey
            </span>
            <span className="text-sm font-medium text-gray-600">
              UK Education Success
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-indigo-600 to-blue-600 h-3 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Ready to begin your journey?
            </span>
          </div>
          <Button
            variant="primary"
            size="large"
            className="shadow-2xl hover:shadow-indigo-500/25"
          >
            Start Your Application
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
