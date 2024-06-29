import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter.",
    })
    .regex(/\d/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    })
    .trim(),
  age: z.number().int().min(1, { message: "Age must be a positive integer." }),
  height: z
    .number()
    .int()
    .min(1, { message: "Height must be a positive integer in cm." }),
  weight: z
    .number()
    .min(1, { message: "Weight must be a positive number in kg." }),
  gender: z.enum(["Male", "Female", "Other"], {
    message: "Please select a valid gender.",
  }),
  dietaryPreferences: z.string().optional(),
  allergies: z.string().optional(),
  healthGoals: z.string().optional(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password field must not be empty." }),
});

export const ForgetPassSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        age?: string[];
        height?: string[];
        weight?: string[];
        gender?: string[];
        dietaryPreferences?: string[];
        allergies?: string[];
        healthGoals?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};
