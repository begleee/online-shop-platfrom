'use client';
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { ModeToggle } from "./ui/mode-toggle";
import { LangToggle } from "./ui/lang-toggle";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Cart from "./Shop/Cart";

const PATHS = ["home", "shop", "about"];

export default function Navigation(){
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const locale = useLocale();

  let cart;

  if(pathname.replace(`/${locale}`, "") == '/shop') {
    cart = <Cart/>
  }

  console.log();

  const isActive = (href: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    return pathWithoutLocale === href;
  };

  return (
      <NavigationMenu className="flex items-center justify-between px-8 py-4 fixed top-0 left-0 w-full bg-background z-50">
        <p className="font-extrabold text-2xl">Shop</p>
        <NavigationMenuList>
          {
            PATHS.map(path => (
              <NavigationMenuItem key={path}>
                <NavigationMenuLink className={isActive(`/${path === "home" ? "" : path}`) ? 
                  'font-bold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-foreground' 
                    : 
                  ''} href={path == "home" ? '/' : `/${path}`}>
                  {t(path)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))
          }
        </NavigationMenuList>
        <div className="flex gap-4">
          <ModeToggle/>
          <LangToggle/>
        </div>
        {cart}
      </NavigationMenu>
  )
}
