"use client";

import { useFormState } from "react-dom";
import { Input } from "../ui/input";
import { SignupButton } from "./form";
import { Label } from "../ui/label";
import { forget_pass } from "@/app/(public)/auth/action";

export function ForgetPassForm() {
  const [state, action] = useFormState(forget_pass, undefined);

  return (
    <form action={action}>
      <div className="name">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          id="email"
          required
          name="email"
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>
      <SignupButton type={"Submit"} />
      {state?.message && (
        <p className="text-sm text-red-500 mt-2">{state.message}</p>
      )}
    </form>
  );
}
