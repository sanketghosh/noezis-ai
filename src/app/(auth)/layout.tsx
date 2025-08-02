import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "noezis | authentication",
  description:
    "Noezis is an AI-powered search engine that transforms your queries into deep, contextual insights — combining language models, real-time data, and intuitive reasoning to help you discover not just answers, but understanding.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {children}
    </div>
  );
}
