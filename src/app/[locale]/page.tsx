'use client'
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AccordionBasic } from "@/src/components/Accordion";

export default function Home() {
  const t = useTranslations("HomePage");
  const ha = useTranslations("HomeAccordion");

  return (
    <div className="container mx-auto px-4">
      <header className="flex flex-col pt-24 md:pt-32 lg:pt-48 pb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-full md:max-w-2xl lg:max-w-3xl leading-[1.1] tracking-tight">
          {t('title')}
        </h1>
        
        <Link href="/shop" className="mt-8 md:mt-10 block w-full sm:w-fit">
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto h-14 px-8 text-lg group hover:bg-primary hover:text-primary-foreground transition-all"
          >
            {t('callToAction')}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </header>

      <main className="mt-24 md:mt-48 pb-24">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            {ha('title')}
          </h2>
          
          <div className="w-full">
            <AccordionBasic />
          </div>
        </div>
      </main>
    </div>
  );
}