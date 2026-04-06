import { Geist, Geist_Mono } from "next/font/google";
import './global.css'
import { ThemeProvider } from "@/src/providers/theme-provider";
import Navigation from "@/src/components/Navigation";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from "next/navigation";
import { locales } from "@/src/i18n/config";
import Footer from "@/src/components/Footer";
import ReactQueryProvider from "../../providers/react-query-provider";
import ReduxProvider from "@/src/providers/redux-provider";

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
  params: Promise<{ locale: string }>;
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
          <ReduxProvider>
            <ReactQueryProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
              <Navigation/>
              <div className="m-12">
                {children}
                <Footer/>
              </div>
              </ThemeProvider>
            </ReactQueryProvider>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
