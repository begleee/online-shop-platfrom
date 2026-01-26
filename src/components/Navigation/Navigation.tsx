import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { LangToggle } from "../lang-toggle";
import { useTranslations } from "next-intl";
import classes from './Navigation.module.css';

export default function Navigation(){
  const t = useTranslations("Navigation");
  return (
      <NavigationMenu className={classes.navigation}>
        Shop
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              {t('home')}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/shop'>
              {t('shop')}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/about'>
              {t('about')}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className={classes.toggles}>
          <ModeToggle/>
          <LangToggle/>
        </div>
      </NavigationMenu>
  )
}