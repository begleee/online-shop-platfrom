'use client';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CardImage } from "./CardImage";
import { useProducts } from "@/src/hooks/useProducts";
import { RootState } from "@/src/store/store";
import SortDropdown from "../SortDropdown";
import { useTranslations } from "next-intl";

export default function Products() {
  const t = useTranslations("Shop");
  const { data: products, isLoading } = useProducts();
  
  const selectedCategory = useSelector((state: RootState) => state.filters.selectedCategory);
  const selectedSort = useSelector((state: RootState) => state.filters.selectedSort);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products
      .filter(product => {
        if (!selectedCategory) return true;
        return product.category.name === selectedCategory;
      })
      .sort((a, b) => {
        if (!selectedSort) return 0;
        switch (selectedSort) {
          case 'price_asc': return a.price - b.price;
          case 'price_desc': return b.price - a.price;
          case 'name_asc': return a.title.localeCompare(b.title);
          case 'name_desc': return b.title.localeCompare(a.title);
          default: return 0;
        }
      });
  }, [products, selectedCategory, selectedSort]);

  return (
    <div className="mt-8 px-2 md:px-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <p className="text-xl md:text-2xl font-bold capitalize">
          {selectedCategory ? selectedCategory : t("recomendations")}
        </p>
        <SortDropdown />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 z-0">
        {isLoading && (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-75 w-full bg-muted animate-pulse rounded-xl" />
          ))
        )}
        
        {!isLoading && filteredProducts.map((product) => (
          <CardImage 
            key={product.id}
            id={product.id}
            category={product.category.name}
            title={product.title} 
            description={product.description} 
            image={product.images && product.images[0]} 
            price={product.price}  
          />
        ))}
      </div>

      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No products found in this category.
        </div>
      )}
    </div>
  );
}