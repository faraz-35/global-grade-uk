"use server";

import { actionClient, ActionResponse } from "@/lib/safe-action";
import { contactFormSchema, ContactFormData } from "@/schemas/contact";
import { Resend } from "resend";

// Initialize Resend only when needed to avoid build-time errors
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(apiKey);
};

// Send email notification
const sendContactEmail = async (
  data: ContactFormData,
): Promise<ActionResponse> => {
  try {
    const { name, email, phone, message } = data;
    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    if (!fromEmail || !toEmail) {
      throw new Error("Email configuration is missing");
    }

    const resend = getResendClient();

    // Send notification email to you
    const { error: adminEmailError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #4b5563;">${message}</p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 12px;">
              This email was sent from your website's contact form.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    const { error: userEmailError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Thank you for contacting us - GlobalGrade",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; text-align: center;">Thank You for Contacting Us!</h2>

          <p style="color: #4b5563; line-height: 1.6;">
            Dear ${name},
          </p>

          <p style="color: #4b5563; line-height: 1.6;">
            We have received your message and will get back to you within 24 hours.
            We appreciate you taking the time to reach out to us.
          </p>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #1e40af;">
            <h3 style="color: #374151; margin-top: 0;">Your Message Summary:</h3>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #6b7280; font-style: italic;">${message}</p>
          </div>

          <p style="color: #4b5563; line-height: 1.6;">
            If you have any urgent questions, please don't hesitate to contact us directly.
          </p>

          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Best regards,<br>
              The GlobalGrade Team
            </p>
          </div>
        </div>
      `,
    });

    if (adminEmailError || userEmailError) {
      console.error("Email sending error:", {
        adminEmailError,
        userEmailError,
      });
      throw new Error("Failed to send email");
    }

    return {
      success: true,
      message:
        "Thank you for your inquiry! We've sent you a confirmation email and will contact you within 24 hours.",
      data: {
        id: `submission-${Date.now()}`,
        ...data,
        submittedAt: new Date().toISOString(),
      },
    };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return {
      success: false,
      error: "Failed to send your message. Please try again later.",
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

        const result = await sendContactEmail(parsedInput);

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
