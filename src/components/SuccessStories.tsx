import { BookOpen, Users, Award } from 'lucide-react';

export function SuccessStories() {
  const stories = [
    {
      title: "UK Student Visa 2025 What's New",
      description: "Up-to-date information on the student visa process for Pakistani students",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Top 10 Courses for International Students",
      description: "Comprehensive guide to the most in-demand courses for international students in the UK",
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Success Stories from Pakistan",
      description: "Real stories of students who successfully gained admission to top UK universities",
      icon: <Users className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build credibility and inspire confidence with our success stories and informative articles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {story.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {story.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {story.description}
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}
