"use client"

import { Earth } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

export function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Earth/>
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          EN
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("ru")}>
          RU
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("tm")}>
          TM
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
