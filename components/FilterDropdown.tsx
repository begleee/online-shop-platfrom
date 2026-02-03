import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup,
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { SortingType } from "@/types/product";
import { setSorting } from "@/src/store/filtersSlice";
import { RootState } from "@/src/store/store";

export default function FilterDropdown() {
  const dispatch = useDispatch();
  const currentSorting = useSelector((state: RootState) => state.filters.selectedSort);

  function hanldeClick(type: SortingType) {
    dispatch(setSorting(type));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter by</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-bold">
            Alphabetic
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
            Price
          </DropdownMenuLabel>
          <div className="px-2 flex flex-col gap-2">
            <DropdownMenuItem 
              onClick={() => hanldeClick("price_asc")}
              className={currentSorting === "price_asc" ? "bg-accent font-bold" : ""}
            >
              ascending
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => hanldeClick("price_desc")}
              className={currentSorting === "price_desc" ? "bg-accent font-bold" : ""}
            >
              descending
            </DropdownMenuItem>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
