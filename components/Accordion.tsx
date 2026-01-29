import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl"

const ITEMS = ["simple", "fast", "transparent", "smart", "secure"];

export function AccordionBasic() {
  const t = useTranslations('HomeAccordion.items');
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-3xl mt-10"
    >

      {
        ITEMS.map(item => (
          <AccordionItem key={item} value={item}>
            <AccordionTrigger className="text-2xl">{t(`${item}.title`)}</AccordionTrigger>
            <AccordionContent className="text-xl">{t(`${item}.description`)}</AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}
