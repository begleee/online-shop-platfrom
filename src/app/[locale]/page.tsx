import { useTranslations } from "next-intl";
import classes from './page.module.css';
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          {t('title')}
        </h1>
        <Link href="/shop" className={classes["call-to-action"]}>
          <Button variant="outline" size="lg">
              {t('callToAction')}
            <ArrowRight/>
          </Button>
        </Link>
      </header>
      <main className={classes.main}>

      </main>
    </div>
  );
}
