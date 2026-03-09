import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AdForge - AI-powered Brand DNA Analysis",
  description: "Extract and analyze brand DNA and positioning contexts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bricolageGrotesque.variable} ${dmSans.variable} font-sans min-h-screen bg-background text-text-primary antialiased selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
