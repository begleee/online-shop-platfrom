import { Geist, Geist_Mono } from "next/font/google";
import './global.css'
import { ThemeProvider } from "@/src/components/theme-provider";
import Navigation from "@/src/components/Navigation/Navigation";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from "next/navigation";
import { locales } from "@/src/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await (params);

  if(!locales.includes(locale as "en" | "ru" | "tm")) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation/>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
