"use client";


import { useFormState } from "react-dom";
import { Input } from "../ui/input";
import { SignupButton } from "./form";
import { Label } from "../ui/label";
import { login } from "@/app/(public)/auth/action";

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);

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
      <div className="name">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
        {state?.errors?.password && (
          <div className="text-sm text-red-500">
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <SignupButton type={"Login"} />
      {state?.message && (
        <p className="text-sm text-red-500 mt-2">{state.message}</p>
      )}
    </form>
  );
}