import { AuthCard } from "@/components/auth/AuthCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - AdForge",
  description: "Create an AdForge account",
};

export default function SignUpPage() {
  return <AuthCard type="sign-up" />;
}
