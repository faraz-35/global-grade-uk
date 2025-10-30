import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient({
  // Handle thrown errors and validation errors
  handleServerError(e) {
    console.error("Action error:", e);
  },
});

// Define return types for our actions
export interface ActionResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
