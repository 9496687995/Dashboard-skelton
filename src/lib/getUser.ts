// src/lib/getUser.ts
import { cookies } from "next/headers";
import { verifyToken, AuthUser } from "./auth";

export async function getUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies();  // ✅ await here
  const token = cookieStore.get("token")?.value;

  if (!token) return null;
  return verifyToken(token);
}
