"use server";

import { actionClient, ActionResponse } from "@/lib/safe-action";
import { contactFormSchema, ContactFormData } from "@/schemas/contact";

// Simulate API call delay
const simulateApiCall = async (
  data: ContactFormData,
): Promise<ActionResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Simulate random success/failure (90% success rate for testing)
  const isSuccess = Math.random() > 0.1;

  if (isSuccess) {
    // Log the data (in real implementation, this would save to database)
    console.log("Contact form submission:", {
      ...data,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message: "Thank you for your inquiry! We'll contact you within 24 hours.",
      data: {
        id: `submission-${Date.now()}`,
        ...data,
        submittedAt: new Date().toISOString(),
      },
    };
  } else {
    return {
      success: false,
      error: "Failed to submit form. Please try again later.",
    };
  }
};

export const submitContactForm = actionClient
  .schema(contactFormSchema)
  .action(
    async ({
      parsedInput,
    }: {
      parsedInput: ContactFormData;
    }): Promise<ActionResponse> => {
      try {
        console.log("Processing contact form submission:", parsedInput);

        const result = await simulateApiCall(parsedInput);

        if (result.success) {
          console.log("Contact form submitted successfully:", result.data);
        } else {
          console.error("Contact form submission failed:", result.error);
        }

        return result;
      } catch (error) {
        console.error("Unexpected error in contact form submission:", error);
        return {
          success: false,
          error: "An unexpected error occurred. Please try again.",
        };
      }
    },
  );
