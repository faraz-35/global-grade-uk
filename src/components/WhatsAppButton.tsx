"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447700900123"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl hover:shadow-green-600/25 transform hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap relative">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 transform -translate-y-1"></div>
        </div>
      </div>
    </a>
  );
}
