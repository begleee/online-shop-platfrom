'use client';
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { ModeToggle } from "./ui/mode-toggle";
import { LangToggle } from "./ui/lang-toggle";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Cart from "./Shop/Cart";

const PATHS = ["home", "shop", "about"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const locale = useLocale();

  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const isShopPage = pathWithoutLocale === '/shop';

  const isActive = (href: string) => {
    const target = href === "" ? "/" : href;
    return pathWithoutLocale === target;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        
        <p className="font-extrabold text-2xl tracking-tighter">Shop</p>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-8">
            {PATHS.map(path => {
              const href = path === "home" ? "/" : `/${path}`;
              return (
                <NavigationMenuItem key={path}>
                  <NavigationMenuLink 
                    href={href}
                    className={`relative text-sm transition-colors hover:text-primary ${
                      isActive(href) ? 'font-bold text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {t(path)}
                    {isActive(href) && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <LangToggle />
          {isShopPage && <Cart />}
        </div>

        <div className="flex md:hidden items-center gap-2">
          {isShopPage && <Cart />}
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b px-4 py-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {PATHS.map(path => {
              const href = path === "home" ? "/" : `/${path}`;
              return (
                <a
                  key={path}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg ${isActive(href) ? 'font-bold text-primary' : 'text-muted-foreground'}`}
                >
                  {t(path)}
                </a>
              );
            })}
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">{t("settings")}</p>
            <div className="flex gap-2">
              <ModeToggle />
              <LangToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}