'use client'

import { useTranslations } from "next-intl";

type TechLink = {
  name: string;
  href: string;
};

const LINKS: TechLink[] = [
  { name: "React", href: "https://react.dev/" },
  { name: "Tailwind", href: "https://tailwindcss.com/" },
  { name: "ShadcnUI", href: "https://ui.shadcn.com/" },
  { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  { name: "React Query", href: "https://tanstack.com/query/latest" },
  { name: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
  { name: "Axios", href: "https://axios-http.com/" },
];

const CONTACTS: TechLink[] = [
  { name: "Telegram: @achiIIes", href: "https://t.me/achiIIes" },
  { name: "Tel: +99362063989", href: "tel:+99362063989" },
];

export default function AboutSection() {
  const t = useTranslations('About');
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        {t('greeting')}
      </h1>

      <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-muted-foreground leading-tight">
        {t('projectSubtitle')}
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <section>
          <h3 className="text-xl font-bold border-b pb-2 mb-4">{t('techTitle')}</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 hover:underline transition-all inline-block py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold border-b pb-2 mb-4">{t('contactTitle')}</h3>
          <ul className="flex flex-col gap-3">
            {CONTACTS.map((contact) => (
              <li key={contact.href}>
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-3 border rounded-lg hover:bg-accent transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                  {contact.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  )
}