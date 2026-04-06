import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Shop Platform | Begli",
    template: "%s | Shop Platform"
  },
  description: "A modern e-commerce platform built with Next.js, Redux Toolkit, and multi-language support.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        {children}
    </>
  );
}
