"use server";


import { auth } from "@/firebase/main";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { uploadFirestoreWithKey } from "@/lib/hooks/firestore_ops";
import { ForgetPassSchema, FormState, LoginFormSchema, SignupFormSchema } from "@/app/_lib/defination";
import { createSession, deleteSession } from "@/app/_lib/session";

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    // 2. Create the user with Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      // 3. Insert the user into Firestore
      await uploadFirestoreWithKey({
        name: "Users",
        formData: {
          name,
          email,
          createdAt: new Date(),
        },
        docKey: user.uid,
      });

      // 4. Create a session for the user
      await createSession(user.uid);
    }
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      return {
        message: "Email already exists, please use a different email or login.",
      };
    }
    return { message: "An error occurred while creating your account." };
  }
}

export async function login(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  const errorMessage = { message: "Invalid login credentials." };

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    // 2. Sign in the user with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      // 3. Create a session for the user
      await createSession(user.uid);
    }
  } catch (error) {
    return errorMessage;
  }
}

export async function logout() {
  await signOut(auth);
  deleteSession();
}

export async function forget_pass(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = ForgetPassSchema.safeParse({
    email: formData.get("email"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  try {
    // 2. Sign in the user with Firebase Auth
    await sendPasswordResetEmail(auth, email);
    return {
      message: "Password reset email sent",
    };
  } catch (error:any) {
    return {
      message: error.message,
    };
  }
}
