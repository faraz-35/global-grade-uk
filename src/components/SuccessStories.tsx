import { BookOpen, Users, Award, Star, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SuccessStories() {
  const stories = [
    {
      title: "UK Student Visa 2025 Success Guide",
      description:
        "Complete walkthrough of the latest student visa requirements and application process for Pakistani students.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "95% Success Rate",
      tag: "Updated for 2025",
    },
    {
      title: "Top 10 In-Demand UK Courses",
      description:
        "Comprehensive analysis of the most sought-after courses with highest employment rates and salary prospects.",
      icon: <Award className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      stats: "150+ Courses",
      tag: "Career Focused",
    },
    {
      title: "Pakistani Student Success Stories",
      description:
        "Inspiring journeys of students who secured admissions to prestigious UK universities with our guidance.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "5000+ Students",
      tag: "Real Stories",
    },
  ];

  const testimonials = [
    {
      name: "Aisha Khan",
      university: "University of Manchester",
      program: "Computer Science",
      quote:
        "GlobalGrad made my dream of studying in the UK a reality. Their guidance was invaluable throughout the process.",
      avatar: "AK",
    },
    {
      name: "Ahmed Hassan",
      university: "UCL",
      program: "Engineering",
      quote:
        "The visa preparation and mock interviews helped me secure my student visa on the first attempt.",
      avatar: "AH",
    },
    {
      name: "Sara Ahmed",
      university: "University of Edinburgh",
      program: "Business Management",
      quote:
        "From university selection to pre-departure support, GlobalGrad was with me every step of the way.",
      avatar: "SA",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6 text-white">
            <Star className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming Dreams into
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              UK Education Reality
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real stories of success and comprehensive guides to inspire your
            educational journey
          </p>
        </div>

        {/* Featured Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${story.color} rounded-xl flex items-center justify-center`}
                >
                  <div className="text-white">{story.icon}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-white">
                    {story.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {story.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {story.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">
                    {story.stats}
                  </span>
                </div>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors duration-300">
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              What Our Students Say
            </h3>
            <p className="text-gray-300">
              Hear from students who successfully secured UK admissions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5000+</div>
            <div className="text-sm text-gray-300">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-sm text-gray-300">UK Universities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-sm text-gray-300">Visa Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-gray-300">Student Support</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">
              Join our success story
            </span>
          </div>
          <Button
            variant="primary"
            size="large"
            className="shadow-2xl hover:shadow-blue-500/25"
          >
            View All Success Stories
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
