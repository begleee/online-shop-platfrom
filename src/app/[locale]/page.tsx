import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AccordionBasic } from "@/components/Accordion";
import Footer from "@/components/Footer";

export default function Home() {
  const t = useTranslations("HomePage");
  const ha = useTranslations("HomeAccordion");
  return (
    <>
      <header className="flex flex-col">
        <h1 className="mt-[15%] text-[3rem] font-bold max-w-2/5 leading-16">
          {t('title')}
        </h1>
        <Link href="/shop" className="mt-8 max-w-fit cursor-pointer">
          <Button variant="outline" size="lg">
              {t('callToAction')}
            <ArrowRight/>
          </Button>
        </Link>
      </header>
      <main className="mt-[20%]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">{ha('title')}</h1>
          <AccordionBasic/>
        </div>
      </main>
    </>
  );
}
