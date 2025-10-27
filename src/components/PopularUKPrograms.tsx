import {
  GraduationCap,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PopularUKPrograms() {
  const programs = [
    {
      university: "University of Manchester",
      programs: ["Computer Science", "Engineering", "Business Management"],
      location: "Manchester, England",
      ranking: "#27 World Ranking",
      students: "40,000+ Students",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      university: "University of Edinburgh",
      programs: ["Artificial Intelligence", "Medicine", "Law"],
      location: "Edinburgh, Scotland",
      ranking: "#30 World Ranking",
      students: "35,000+ Students",
      color: "from-amber-600 to-amber-700",
      bgGradient: "bg-blue-50",
    },
    {
      university: "University College London",
      programs: ["Architecture", "Medicine", "Economics"],
      location: "London, England",
      ranking: "#8 World Ranking",
      students: "45,000+ Students",
      color: "from-blue-800 to-blue-900",
      bgGradient: "bg-blue-50",
    },
  ];

  const quickStats = [
    {
      label: "Top Universities",
      value: "150+",
      icon: <Award className="w-5 h-5" />,
    },
    {
      label: "Program Options",
      value: "2000+",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      label: "Success Rate",
      value: "95%",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      label: "Student Placed",
      value: "5000+",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="programs"
      className="relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden scroll-mt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            Featured Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premier UK
            <span className="block bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text text-transparent">
              Universities & Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the prestigious universities and sought-after programs
            available through our comprehensive guidance
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className={`${program.bgGradient} p-6 relative`}>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center`}
                  >
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">
                      {program.ranking}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.university}
                </h3>

                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{program.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Users className="w-4 h-4" />
                    <span>{program.students}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    Popular Programs:
                  </h4>
                  <ul className="space-y-2">
                    {program.programs.map((prog, progIndex) => (
                      <li key={progIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-800 to-amber-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                          {prog}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <div className="bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">
              Explore more opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
