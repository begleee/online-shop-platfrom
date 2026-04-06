import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup,
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger 
} from "@/src/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { SortingType } from "@/types/product";
import { setSorting } from "@/src/store/filtersSlice";
import { RootState } from "@/src/store/store";
import { useTranslations } from "next-intl";

export default function SortDropdown() {
  const t = useTranslations("Shop");
  
  const dispatch = useDispatch();
  const currentSorting = useSelector((state: RootState) => state.filters.selectedSort);

  function hanldeClick(type: SortingType) {
    dispatch(setSorting(type));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{t("sort")}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-bold">
            {t("sortName")}
          </DropdownMenuLabel>
          <div className="px-2">
            <DropdownMenuItem 
              onClick={() => hanldeClick("name_asc")}
              className={currentSorting === "name_asc" ? "bg-accent font-bold" : ""}
            >
              a-z
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => hanldeClick("name_desc")}
              className={currentSorting === "name_desc" ? "bg-accent font-bold" : ""}
            >
              z-a
            </DropdownMenuItem>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-bold">
            {t("sortPrice")}
          </DropdownMenuLabel>
          <div className="px-2 flex flex-col gap-2">
            <DropdownMenuItem 
              onClick={() => hanldeClick("price_asc")}
              className={currentSorting === "price_asc" ? "bg-accent font-bold" : ""}
            >
              {t("ascending")}
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => hanldeClick("price_desc")}
              className={currentSorting === "price_desc" ? "bg-accent font-bold" : ""}
            >
              {t("descending")}
            </DropdownMenuItem>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
