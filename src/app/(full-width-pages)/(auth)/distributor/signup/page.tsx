import SignUpForm from "@/components/auth/distributor/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mellbizz | SignUp page",
  description: "This is Next.js SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
