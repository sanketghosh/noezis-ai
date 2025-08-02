import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "membit | authentication",
  description:
    "membit is a simple encrypted and online notes app makes your notes taking super easy.",
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
