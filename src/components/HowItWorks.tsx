import { ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Free Assessment",
      description: "Prospective students are invited to share their background, academic scores, and preferences."
    },
    {
      step: 2,
      title: "Shortlist & Strategy",
      description: "Based on the initial assessment, GlobalGrad proposes a list of suitable universities and courses."
    },
    {
      step: 3,
      title: "Application & Strat",
      description: "The team provides comprehensive assistance with application forms, ensuring they are handled professionally."
    },
    {
      step: 4,
      title: "Visa Interview Preparation",
      description: "GlobalGrad offers support for the visa process, including mock interviews, document verification, and submission assistance."
    },
    {
      step: 5,
      title: "Visa & Interview Support",
      description: "This stage involves further mock interviews and document verification to ensure the student is fully prepared."
    },
    {
      step: 6,
      title: "Pre-Departure / Arrival Orientation",
      description: "Assistance extends to accommodation, city guides, and help with settling into the new environment."
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear, step-by-step guide to the services offered by GlobalGrad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.step} className="bg-white rounded-lg p-6 relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
