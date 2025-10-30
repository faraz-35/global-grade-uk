import { MapPin, Star, Users, Building, Camera, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StudyDestinations() {
  const destinations = [
    {
      city: "London",
      country: "England",
      description:
        "The capital city with world-renowned universities like Imperial College, UCL, and LSE. A global financial hub with diverse culture.",
      universities: [
        "Imperial College London",
        "UCL",
        "LSE",
        "King's College London",
      ],
      image: "🏛️",
      ranking: "#1 Student City",
      students: "400,000+ Students",
      specialties: ["Business", "Finance", "Law", "Medicine"],
      color: "from-blue-800 to-blue-900",
    },
    {
      city: "Manchester",
      country: "England",
      description:
        "Northern powerhouse with excellence in research and innovation. Home to the University of Manchester and Manchester Metropolitan.",
      universities: [
        "University of Manchester",
        "Manchester Metropolitan University",
        "Royal Northern College of Music",
      ],
      image: "🏭",
      ranking: "#2 Student City",
      students: "100,000+ Students",
      specialties: ["Engineering", "Computer Science", "Business", "Media"],
      color: "from-amber-600 to-amber-700",
    },
    {
      city: "Edinburgh",
      country: "Scotland",
      description:
        "Historic city with outstanding universities and rich cultural heritage. Perfect for students seeking quality education in beautiful surroundings.",
      universities: [
        "University of Edinburgh",
        "Heriot-Watt University",
        "Edinburgh Napier University",
      ],
      image: "🏰",
      ranking: "#3 Student City",
      students: "60,000+ Students",
      specialties: ["Medicine", "AI", "Literature", "Business"],
      color: "from-blue-900 to-blue-950",
    },
    {
      city: "Birmingham",
      country: "England",
      description:
        "UK's second-largest city with excellent universities and strong industry connections. Affordable living with great transport links.",
      universities: [
        "University of Birmingham",
        "Birmingham City University",
        "Aston University",
      ],
      image: "🏙️",
      ranking: "#4 Student City",
      students: "80,000+ Students",
      specialties: ["Engineering", "Business", "Medicine", "Law"],
      color: "from-teal-600 to-teal-700",
    },
    {
      city: "Glasgow",
      country: "Scotland",
      description:
        "Vibrant cultural hub with prestigious universities and friendly atmosphere. Known for music, arts, and architectural heritage.",
      universities: [
        "University of Glasgow",
        "University of Strathclyde",
        "Glasgow Caledonian University",
      ],
      image: "🎭",
      ranking: "#5 Student City",
      students: "70,000+ Students",
      specialties: ["Engineering", "Medicine", "Arts", "Business"],
      color: "from-indigo-700 to-indigo-800",
    },
    {
      city: "Bristol",
      country: "England",
      description:
        "Innovative city with strong focus on technology and creative industries. Home to University of Bristol and UWE Bristol.",
      universities: [
        "University of Bristol",
        "UWE Bristol",
        "University of the West of England",
      ],
      image: "🌉",
      ranking: "#6 Student City",
      students: "50,000+ Students",
      specialties: [
        "Engineering",
        "Computer Science",
        "Creative Arts",
        "Science",
      ],
      color: "from-green-700 to-green-800",
    },
  ];

  const quickStats = [
    {
      label: "Top UK Cities",
      value: "15+",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      label: "Total Universities",
      value: "130+",
      icon: <Building className="w-5 h-5" />,
    },
    {
      label: "International Students",
      value: "500K+",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Student Satisfaction",
      value: "90%+",
      icon: <Star className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="destinations"
      className="relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden scroll-mt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Study Destinations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect
            <span className="block bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text text-transparent">
              UK Study Destination
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the best UK cities for international students with
            world-class universities, vibrant cultures, and excellent career
            opportunities
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-br ${destination.color} p-6 relative`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl">
                    {destination.image}
                  </div>
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">
                      {destination.ranking}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {destination.city}
                </h3>
                <div className="flex items-center text-white/90 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{destination.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {destination.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Users className="w-4 h-4" />
                    <span>{destination.students}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Top Universities:
                  </h4>
                  <ul className="space-y-2">
                    {destination.universities
                      .slice(0, 3)
                      .map((university, uniIndex) => (
                        <li key={uniIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-800 to-amber-600 rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm group-hover:text-blue-800 transition-colors duration-300">
                            {university}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Popular Subjects:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.specialties
                      .slice(0, 3)
                      .map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="px-3 py-1 bg-blue-50 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                  </div>
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
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <div className="text-blue-600">{stat.icon}</div>
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
            <Camera className="w-4 h-4 text-blue-800" />
            <span className="text-sm font-medium text-blue-800">
              Find your perfect study destination
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
