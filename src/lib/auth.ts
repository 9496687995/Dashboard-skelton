import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // must match backend

export interface AuthUser extends JwtPayload {
  id: string;
  email: string;
  role: "delivery_partner" | "distributor" | string;
}

export function verifyToken(token: string): AuthUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthUser;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
