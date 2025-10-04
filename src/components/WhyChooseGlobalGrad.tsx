import { CheckCircle } from 'lucide-react';

export function WhyChooseGlobalGrad() {
  const features = [
    {
      title: "Personalized Guidance",
      description: "GlobalGrad offers tailored program matching based on a student's individual profile and academic background."
    },
    {
      title: "End-to-End Support",
      description: "The consultancy guides students through every step of the process, from the initial application to pre-departure preparations."
    },
    {
      title: "Transparent & Ethical",
      description: "GlobalGrad prides itself on providing honest advice with no hidden fees, focusing on achieving real outcomes for students."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose GlobalGrad?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the key benefits that make GlobalGrad the trusted choice for Pakistani students seeking UK education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
