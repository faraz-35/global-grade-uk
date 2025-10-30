import {
  CheckCircle,
  Star,
  Zap,
  Shield,
  Heart,
  Target,
  GraduationCap,
} from "lucide-react";

export function WhyChooseGlobalGrad() {
  const features = [
    {
      title: "Personalized Guidance",
      description:
        "Tailored program matching based on your unique academic profile, career goals, and personal preferences.",
      icon: <Target className="w-8 h-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "End-to-End Support",
      description:
        "Comprehensive assistance from initial application to pre-departure preparations, ensuring a smooth journey.",
      icon: <Zap className="w-8 h-8" />,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      title: "Transparent & Ethical",
      description:
        "Honest advice with no hidden fees, focusing on achieving real outcomes for your educational success.",
      icon: <Shield className="w-8 h-8" />,
      color: "text-blue-800",
      bgColor: "bg-blue-100",
    },
    {
      title: "Expert Mentors",
      description:
        "Work with experienced education consultants who understand UK universities and admission processes.",
      icon: <Star className="w-8 h-8" />,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance whenever you need help with applications, visas, or pre-departure queries.",
      icon: <Heart className="w-8 h-8" />,
      color: "text-blue-700",
      bgColor: "bg-blue-100",
    },
    {
      title: "Proven Success",
      description:
        "Thousands of successful placements in top UK universities with high student satisfaction rates.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "text-teal-600",
      bgColor: "bg-teal-100",
    },
  ];

  return (
    <section
      id="why-choose"
      className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden scroll-mt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Why Choose GlobalGrad
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text text-transparent">
              GlobalGrad UK?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive benefits that make GlobalGrad the trusted
            choice for Pakistani students seeking quality UK education
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-amber-50 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={feature.color}>{feature.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">5000+</div>
            <div className="text-sm text-gray-600">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-800 mb-2">150+</div>
            <div className="text-sm text-gray-600">University Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
