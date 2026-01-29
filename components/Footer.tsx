import { useTranslations } from "next-intl"
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  const t = useTranslations('HomePage');
  const tNav = useTranslations('Navigation');
  return (
    <footer className="grid grid-cols-4 gap-20 mt-40 content-center">
      <div>
        <p className="font-extrabold">Shop</p>
        <p>
          {t('title')}
        </p>
      </div>
      <div className="flex flex-col">
        <Link className="hover:underline" href="/">{tNav('home')}</Link>
        <Link className="hover:underline" href="/shop">{tNav('shop')}</Link>
        <Link className="hover:underline" href="/about">{tNav('about')}</Link>
      </div>
      <div>
        <p className="font-bold">{t('aboutMe')}</p>
        <p>Github</p>
        <p>Telegram</p>
      </div>
      <form action="">
        <p>{t('updates')}</p>
        <div className="flex gap-2 mt-4">
          <Input placeholder="Email here"/>
          <Button>Join</Button>
        </div>
      </form>
    </footer>
  )
}