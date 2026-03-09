"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight } from "lucide-react";

import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const urlSchema = z.object({
  websiteUrl: z
    .string()
    .url({ message: "Please enter a valid URL (e.g. https://example.com)" }),
  linkedinUrl: z
    .string()
    .url({ message: "Please enter a valid LinkedIn URL" })
    .optional()
    .or(z.literal("")),
});

type UrlFormValues = z.infer<typeof urlSchema>;

export function URLForm() {
  const setAnalysePhase = useAppStore((state) => state.setAnalysePhase);
  const setCurrentJobId = useAppStore((state) => state.setCurrentJobId);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UrlFormValues>({
    resolver: zodResolver(urlSchema),
    defaultValues: { websiteUrl: "", linkedinUrl: "" },
  });

  const onSubmit = async (data: UrlFormValues) => {
    try {
      // Mock API call
      const res = await fetch("/api/analyse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      setCurrentJobId(result.jobId || "mock-job-id");
      setAnalysePhase("loading");
    } catch (error) {
      console.error("Failed to start analysis", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="border-border bg-surface shadow-xl">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-display text-white">
            Analyse Your Brand DNA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2 relative">
              <label
                htmlFor="websiteUrl"
                className="text-sm font-medium text-text-primary"
              >
                Website URL <span className="text-error">*</span>
              </label>
              <Input
                {...register("websiteUrl")}
                id="websiteUrl"
                placeholder="https://yourwebsite.com"
                error={!!errors.websiteUrl}
                className="bg-[#1F1F1F] border-[#2A2A2A] h-12 text-base"
              />
              {errors.websiteUrl && (
                <p className="text-sm text-error absolute -bottom-6">
                  {errors.websiteUrl.message}
                </p>
              )}
            </div>

            <div className="space-y-2 relative pt-4">
              <label
                htmlFor="linkedinUrl"
                className="text-sm font-medium text-text-primary"
              >
                LinkedIn Profile URL{" "}
                <span className="text-text-secondary font-normal">
                  (Optional)
                </span>
              </label>
              <Input
                {...register("linkedinUrl")}
                id="linkedinUrl"
                placeholder="https://linkedin.com/in/yourhandle"
                error={!!errors.linkedinUrl}
                className="bg-[#1F1F1F] border-[#2A2A2A] h-12 text-base"
              />
              {errors.linkedinUrl && (
                <p className="text-sm text-error absolute -bottom-6">
                  {errors.linkedinUrl.message}
                </p>
              )}
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg"
                loading={isSubmitting}
              >
                {!isSubmitting && (
                  <>
                    Analyse Now <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
