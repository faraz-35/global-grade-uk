"use client";

import {
  HelpCircle,
  Clock,
  DollarSign,
  FileText,
  Plane,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export function FAQs() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqCategories = [
    {
      id: "admissions",
      name: "Admissions & Applications",
      icon: <FileText className="w-5 h-5" />,
      color: "from-blue-800 to-blue-900",
      questions: [
        {
          q: "What are the admission requirements for UK universities?",
          a: "Requirements vary by university and program, but generally include: A-levels or equivalent qualifications, IELTS score of 6.0-7.5, personal statement, academic references, and some courses may require entrance exams or portfolios.",
        },
        {
          q: "When should I start my UK university application?",
          a: "We recommend starting 12-18 months before your intended start date. UCAS applications for September 2025 intake open in September 2024, with deadlines varying by course (January 2025 for most courses).",
        },
        {
          q: "Can I apply to multiple universities?",
          a: "Yes, through UCAS you can apply to up to 5 universities for undergraduate programs. For postgraduate programs, you can apply directly to as many universities as you want.",
        },
        {
          q: "What is the typical application timeline?",
          a: "Research: 3-4 months, Test preparation: 2-3 months, Application submission: 1-2 months, Waiting for offers: 4-8 weeks, Decision making: 2-4 weeks, Visa application: 2-3 months.",
        },
      ],
    },
    {
      id: "costs",
      name: "Costs & Funding",
      icon: <DollarSign className="w-5 h-5" />,
      color: "from-amber-600 to-amber-700",
      questions: [
        {
          q: "What are the tuition fees for international students?",
          a: "Undergraduate fees typically range from £15,000-£38,000 per year. Postgraduate fees range from £16,000-£45,000 per year. Clinical programs like medicine may cost more.",
        },
        {
          q: "How much money do I need for living expenses?",
          a: "UKVI requires £1,023 per month (£9,207 for 9 months) for London and £824 per month (£7,416 for 9 months) for other cities. Actual costs vary by lifestyle and location.",
        },
        {
          q: "Are scholarships available for Pakistani students?",
          a: "Yes! Many universities offer scholarships ranging from £2,000-£10,000. Chevening, Commonwealth, and university-specific scholarships are available. We help identify suitable opportunities.",
        },
        {
          q: "Can I work while studying?",
          a: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays. Postgraduate students on research programs may have different restrictions.",
        },
      ],
    },
    {
      id: "visa",
      name: "Visa & Immigration",
      icon: <Plane className="w-5 h-5" />,
      color: "from-green-700 to-green-800",
      questions: [
        {
          q: "What type of visa do I need to study in the UK?",
          a: "You'll need a Student visa (formerly Tier 4). Requirements include: Confirmation of Acceptance for Studies (CAS), proof of English proficiency, proof of funds, and a valid tuberculosis test certificate.",
        },
        {
          q: "How long does the visa process take?",
          a: "Standard visa processing takes 3-4 weeks. Priority visa (5 working days) and super priority (24 hours) options are available for additional fees.",
        },
        {
          q: "Can my family accompany me?",
          a: "Yes, postgraduate students studying for 12+ months can bring dependents (spouse/partner and children). Undergraduate students generally cannot bring dependents.",
        },
        {
          q: "What happens after graduation?",
          a: "The Graduate Route visa allows you to stay in the UK for 2 years (3 years for PhD graduates) to work or look for work at any skill level.",
        },
      ],
    },
    {
      id: "english",
      name: "English Requirements",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-blue-900 to-blue-950",
      questions: [
        {
          q: "What IELTS score do I need for UK universities?",
          a: "Most universities require IELTS 6.0-7.5 overall, with no band below 5.5-6.5. Top universities like Oxford/Cambridge may require 7.0-7.5.",
        },
        {
          q: "Are other English tests accepted?",
          a: "Yes, universities accept TOEFL, PTE Academic, Cambridge English, and Duolingo English Test. Requirements vary by institution.",
        },
        {
          q: "Can I get an English test waiver?",
          a: "If your previous education was in English, some universities may waive the requirement. This is assessed on a case-by-case basis.",
        },
        {
          q: "How can I improve my English score?",
          a: "We offer English test preparation support, including practice materials, mock tests, and recommendations for language courses if needed.",
        },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
    setOpenQuestion(null);
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e3a8a' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Know
            <span className="block bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text text-transparent">
              About Studying in the UK
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about admissions, costs, visas, and
            requirements for Pakistani students
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category) => (
            <div
              key={category.id}
              className="mb-6 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-8 py-6 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-blue-800">
                  <span className="text-sm font-medium">
                    {category.questions.length} questions
                  </span>
                  {openCategory === category.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Questions */}
              {openCategory === category.id && (
                <div className="border-t border-gray-100">
                  {category.questions.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-50 last:border-b-0"
                    >
                      <button
                        onClick={() =>
                          toggleQuestion(`${category.id}-${index}`)
                        }
                        className="w-full px-8 py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex items-start justify-between gap-4"
                      >
                        <div className="flex-1 pr-4">
                          <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                            <span className="w-6 h-6 bg-gradient-to-r from-blue-800 to-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </span>
                            {item.q}
                          </h4>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-200 ${
                            openQuestion === `${category.id}-${index}`
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {openQuestion === `${category.id}-${index}` && (
                        <div className="px-8 pb-5 pl-20">
                          <p className="text-gray-600 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-800 mb-2">500+</div>
            <div className="text-sm text-gray-600">Questions Answered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-800 mb-2">1000+</div>
            <div className="text-sm text-gray-600">Students Helped</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-800" />
            <span className="text-sm font-medium text-blue-800">
              Still have questions?
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-800 to-amber-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-900 hover:to-amber-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
              💬 Chat with Counselor
            </button>
            <button className="bg-white border-2 border-blue-800 text-blue-800 font-semibold px-8 py-4 rounded-xl hover:bg-blue-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              📧 Email Your Questions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
