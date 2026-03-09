import { AuthCard } from "@/components/auth/AuthCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - AdForge",
  description: "Sign in to your AdForge account",
};

export default function SignInPage() {
  return <AuthCard type="sign-in" />;
}
