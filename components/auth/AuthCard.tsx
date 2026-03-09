"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const authSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .optional(),
  name: z.string().optional(),
});

type AuthValues = z.infer<typeof authSchema>;

interface AuthCardProps {
  type: "sign-in" | "sign-up";
}

export function AuthCard({ type }: AuthCardProps) {
  const [isMagicLink, setIsMagicLink] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthValues>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "", name: "" },
  });

  const onSubmit = async (data: AuthValues) => {
    setIsLoading(true);
    try {
      // Temporarily bypass auth and go straight to dashboard
      router.push("/dashboard");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuth = (provider: string) => {
    setIsLoading(true);
    // Temporarily bypass auth and go straight to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Radial glow background */}
      <div className="absolute -inset-1 rounded-[2rem] bg-primary/20 blur-2xl z-0 pointer-events-none" />

      <Card className="relative z-10 w-full border-border bg-surface shadow-xl">
        <CardHeader className="space-y-1 text-center items-center">
          <div className="mb-4">
            <span className="text-2xl font-bold font-display tracking-tight text-white flex items-center justify-center gap-1">
              Ad<span className="text-primary">Forge</span>
            </span>
          </div>
          <CardTitle className="text-2xl font-bold font-display text-white">
            {type === "sign-in" ? "Welcome back" : "Create your account"}
          </CardTitle>
          <CardDescription className="text-text-secondary">
            {type === "sign-in"
              ? "Enter your details to sign in to your account"
              : "Enter your details to get started with AdForge"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="secondary"
              onClick={() => handleOAuth("google")}
              disabled={isLoading}
              className="w-full bg-[#1F1F1F] border-[#2A2A2A]"
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Google
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleOAuth("linkedin")}
              disabled={isLoading}
              className="w-full bg-[#1F1F1F] border-[#2A2A2A]"
            >
              <Linkedin className="mr-2 h-4 w-4 text-[#0A66C2]" />
              LinkedIn
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-surface px-2 text-text-secondary">
                Or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {type === "sign-up" && (
              <div className="space-y-2">
                <Input
                  {...register("name")}
                  id="name"
                  placeholder="Full Name"
                  error={!!errors.name}
                  disabled={isLoading}
                  className="bg-[#1F1F1F] border-[#2A2A2A]"
                />
              </div>
            )}
            <div className="space-y-2">
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="name@example.com"
                error={!!errors.email}
                disabled={isLoading}
                className="bg-[#1F1F1F] border-[#2A2A2A]"
              />
              {errors.email && (
                <p className="text-sm text-error">{errors.email.message}</p>
              )}
            </div>

            {!isMagicLink && (
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    {...register("password")}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    error={!!errors.password}
                    disabled={isLoading}
                    className="bg-[#1F1F1F] border-[#2A2A2A] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-error">
                    {errors.password.message}
                  </p>
                )}
                {type === "sign-in" && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
              </div>
            )}

            <Button type="submit" className="w-full" loading={isLoading}>
              {isMagicLink
                ? "Send Magic Link"
                : type === "sign-in"
                  ? "Sign In"
                  : "Create Account"}
            </Button>
          </form>

          <div className="flex flex-col space-y-4 items-center">
            <button
              onClick={() => setIsMagicLink(!isMagicLink)}
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              {isMagicLink
                ? "Prefer a password? Use Credentials"
                : "Prefer a passwordless link? Send magic link"}
            </button>
            <div className="text-sm text-text-secondary">
              {type === "sign-in" ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => router.push("/sign-up")}
                    className="text-primary hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => router.push("/sign-in")}
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
