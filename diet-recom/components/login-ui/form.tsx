"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { signup } from "@/app/(public)/auth/action";

export function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <form action={action}>
      <div className="name">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          placeholder="Enter your name"
          id="name"
          required
          name="name"
        />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name}</p>
        )}
      </div>
      <div className="mt-4">
        <div className="name">
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            placeholder="Enter your age"
            id="age"
            required
            name="age"
          />
          {state?.errors?.age && (
            <p className="text-sm text-red-500">{state.errors.age}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="name">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            type="number"
            placeholder="Enter your height in cm"
            id="height"
            required
            name="height"
          />
          {state?.errors?.height && (
            <p className="text-sm text-red-500">{state.errors.height}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="name">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            type="number"
            placeholder="Enter your weight in kg"
            id="weight"
            required
            name="weight"
          />
          {state?.errors?.weight && (
            <p className="text-sm text-red-500">{state.errors.weight}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="name">
          <Label htmlFor="gender">Gender</Label>
          <Input
            type="text"
            placeholder="Enter your gender"
            id="gender"
            required
            name="gender"
          />
          {state?.errors?.gender && (
            <p className="text-sm text-red-500">{state.errors.gender}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="name">
          <Label htmlFor="dietaryPreferences">Dietary Preferences</Label>
          <Input
            type="text"
            placeholder="Enter your dietary preferences"
            id="dietaryPreferences"
            required
            name="dietaryPreferences"
          />
          {state?.errors?.dietaryPreferences && (
            <p className="text-sm text-red-500">
              {state.errors.dietaryPreferences}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="name">
          <Label htmlFor="allergies">Allergies</Label>
          <Input
            type="text"
            placeholder="Enter your allergies"
            id="allergies"
            required
            name="allergies"
          />
          {state?.errors?.allergies && (
            <p className="text-sm text-red-500">{state.errors.allergies}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="name">
          <Label htmlFor="healthGoals">Health Goals</Label>
          <Input
            type="text"
            placeholder="Enter your health goals"
            id="healthGoals"
            required
            name="healthGoals"
          />
          {state?.errors?.healthGoals && (
            <p className="text-sm text-red-500">{state.errors.healthGoals}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
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
      </div>
      <div className="mt-4">
        <div className="name">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
            required
            name="password"
          />
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
      </div>
      <SignupButton type={"Signup"} />
      {state?.message && (
        <p className="text-sm text-red-500 mt-2">{state.message}</p>
      )}
    </form>
  );
}


export function SignupButton({type}: {type: string}) {
  const { pending } = useFormStatus();

  return (
    <div className="sub">
      <button
        className="w-full py-4 focus-within:ring-primary focus:ring-1 ring-0 ring-[#C9C9C9] focus-within:shadow-input scale-100 hover:scale-[1.015] active:scale-100 active:shadow-md shadow-md hover:shadow-lg duration-300 ease-in-out"
        type="submit"
      >
        {pending ? "Submitting..." : type}
      </button>
    </div>
  );
}
