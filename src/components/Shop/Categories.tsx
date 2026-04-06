'use client'

import { useDispatch } from "react-redux";
import { useProducts } from "@/src/hooks/useProducts";
import { Button } from "../ui/button";
import { setCategory } from "@/src/store/filtersSlice";
import { useMemo } from "react";
import { useTranslations } from "next-intl";

export default function Categories() {
  const t = useTranslations("Shop");

  const dispatch = useDispatch();
  const { data: products = [], isLoading } = useProducts();
  
  const categoryNames = useMemo(() => {
    const names = products.map((p) => p.category.name);
    return Array.from(new Set(names));
  }, [products]);

  return (
    <div className="w-full px-1">
      <p className="text-xl md:text-2xl font-bold">{t("categories")}</p>
      
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {!isLoading && (
          <Button 
            onClick={() => dispatch(setCategory(null))} 
            className="font-bold hover:scale-[102%] transition-transform cursor-pointer capitalize w-full py-6 text-sm md:text-base" 
            variant="outline"
          >
            {t("all") || "All"}
          </Button>
        )}
        
        {categoryNames.map((name) => (
          <Button 
            className="font-bold hover:scale-[102%] transition-transform cursor-pointer capitalize w-full py-6 text-sm md:text-base" 
            variant="outline" 
            key={name}
            onClick={() => dispatch(setCategory(name))}
          >
            {name}
          </Button>
        ))}
      </div>

      {isLoading && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-muted animate-pulse rounded-md" />
          ))}
        </div>
      )}
    </div>
  );
}