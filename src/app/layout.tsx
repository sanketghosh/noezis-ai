import type { Metadata } from "next";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClientSessionInitializer } from "@/components/client-session-initializer";
import { getSessionData } from "@/utils/get-session";

export const metadata: Metadata = {
  title: "noezis",
  description:
    " AI-powered search engine using LLMs and live data for contextual answers.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionUserData = await getSessionData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientSessionInitializer sessionUserData={sessionUserData} />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
