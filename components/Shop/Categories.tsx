'use client'

import { useDispatch } from "react-redux";
import { useProducts } from "@/src/hooks/useProducts";
import { Button } from "../ui/button";
import { setCategory } from "@/src/store/filtersSlice";

export default function Categories() {
  const dispatch = useDispatch();
  const { data: products = [], isLoading } = useProducts();
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return (
    <div>
      <p className="text-2xl font-bold">Categories</p>
      <div className="mt-8 grid grid-cols-4 gap-4">
        {!isLoading && <Button 
          onClick={() => dispatch(setCategory(null))} 
          className="font-bold hover:scale-[101%] cursor-pointer capitalize" 
          variant="outline"
        >
            All
        </Button>}
        {
          categories.map((category) => (
              <Button 
                className="font-bold hover:scale-[101%] cursor-pointer capitalize" 
                variant="outline" 
                key={category}
                onClick={() => dispatch(setCategory(category))}
              >
                {category}
              </Button>
          ))
        }
      </div>
    </div>
  )
}
