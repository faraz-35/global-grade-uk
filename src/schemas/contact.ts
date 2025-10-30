import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(5, "Phone number must be at least 5 characters")
    .max(20, "Phone number cannot exceed 20 characters")
    .regex(/^[+]?[\d\s\-\(\)]+$/, "Please enter a valid phone number"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
