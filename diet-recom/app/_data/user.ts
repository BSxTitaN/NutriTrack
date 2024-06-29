import "server-only";
import { cache } from "react";
import { verifySession } from "../_lib/session";
import { recieveOneData } from "@/lib/hooks/firestore_ops";
import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint";

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const user = await recieveOneData({
      dbName: "Users",
      dbID: session.userId,
    });

    const filteredUser = userDTO(user);

    return filteredUser;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});

function userDTO(user: any) {
  taintUniqueValue(
    "Do not pass a user token to the client",
    user,
    user.session.token
  );
  return {
    name: user.name,
    email: user.email,
    age: user.age,
    height: user.height,
    weight: user.weight,
    gender: user.gender,
    dietaryPreferences: user.dietaryPreferences,
    allergies: user.allergies,
    healthGoals: user.healthGoals,
    session: user.session,
    auditTrail: canViewAudit(user.auditTrail, user.role),
  };
}

function canViewAudit(auditTrail: any, role: any) {
  return role === "Admin" ? auditTrail : null;
}
