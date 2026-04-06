'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion"
import { useTranslations } from "next-intl"

const ITEMS = ["simple", "fast", "transparent", "smart", "secure"];

export function AccordionBasic() {
  const t = useTranslations('HomeAccordion.items');
  
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-3xl mt-6 md:mt-10 px-2"
    >
      {ITEMS.map((item) => (
        <AccordionItem key={item} value={item}>
          <AccordionTrigger className="text-lg md:text-2xl text-left hover:no-underline">
            {t(`${item}.title`)}
          </AccordionTrigger>
          
          <AccordionContent className="text-base md:text-xl text-muted-foreground leading-relaxed">
            {t(`${item}.description`)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}