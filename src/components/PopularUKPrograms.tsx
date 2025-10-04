import { GraduationCap, MapPin } from 'lucide-react';

export function PopularUKPrograms() {
  const programs = [
    {
      university: "University of Manchester",
      programs: ["Engineering", "Birmacitors"],
      location: "Manchester, England",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />
    },
    {
      university: "University of Edinburgh",
      programs: ["Computer Science", "Business Management"],
      location: "Edinburgh, Scotland",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />
    },
    {
      university: "University College London",
      programs: ["Medicine", "Architecture"],
      location: "London, England",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular UK Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the premier universities and courses that students can apply to through GlobalGrad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {program.university}
              </h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{program.location}</span>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Popular Programs:</h4>
                <ul className="space-y-1">
                  {program.programs.map((prog, progIndex) => (
                    <li key={progIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{prog}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
