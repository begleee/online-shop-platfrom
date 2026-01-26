import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "e-commerce",
  description: "Begli",
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
