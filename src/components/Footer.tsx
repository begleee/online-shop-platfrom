'use client'
import { useTranslations } from "next-intl"
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  const t = useTranslations('HomePage');
  const tNav = useTranslations('Navigation');

  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mt-20 md:mt-40 border-t pt-12 pb-8 px-4">
      
      <div className="space-y-4">
        <p className="font-extrabold text-2xl tracking-tighter">Shop</p>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
          {t('title')}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-bold mb-1">{tNav("links")}</p>
        <Link className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors" href="/">{tNav('home')}</Link>
        <Link className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors" href="/shop">{tNav('shop')}</Link>
        <Link className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors" href="/about">{tNav('about')}</Link>
      </div>

      <div className="space-y-3">
        <p className="font-bold mb-1">{t('aboutMe')}</p>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            <a href="https://github.com/begleee" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Github: <span className="font-medium text-foreground">@begleee</span>
            </a>
          </p>
          <p>
            <a href="https://t.me/achiIIes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Telegram: <span className="font-medium text-foreground">@achiIIes</span>
            </a>
          </p>
        </div>
      </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <p className="font-bold text-sm">{t('updates')}</p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Input 
            type="email" 
            placeholder={t("emailPlaceholder")}
            className="bg-background"
          />
          <Button className="w-full sm:w-auto">{t("join")}</Button>
        </div>
      </form>
    </footer>
  )
}