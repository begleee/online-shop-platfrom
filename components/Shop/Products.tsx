'use client'
import { useSelector } from "react-redux";
import { CardImage } from "./CardImage";
import { useProducts } from "@/src/hooks/useProducts";
import { RootState } from "@/src/store/store";
import FilterDropdown from "../FilterDropdown";

export default function Products() {
  const { data: products, isLoading } = useProducts();
  const selectedCategory = useSelector((state: RootState) => state.filters.selectedCategory);
  const selectedSort = useSelector((state: RootState) => state.filters.selectedSort);

  const filteredProducts = products
    ?.filter(product => !selectedCategory || product.category === selectedCategory)
    .sort((a, b) => {
      if (!selectedSort) return 0;
      switch (selectedSort) {
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'name_asc':
          return a.title.localeCompare(b.title);
        case 'name_desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  return (
    <div className="mt-8">
      <p className="text-xl font-bold capitalize mb-4">{ selectedCategory ? selectedCategory : "Recomendations" }</p>
      <FilterDropdown/>
      <div className="grid grid-cols-3 gap-8 z-[-1] mt-4">
        {isLoading && <p>Loading...</p>}
        {filteredProducts && filteredProducts.map((product, id) => (
          <CardImage title={product.title} description={product.description} imgSrc={product.image} price={product.price}  key={id}/>
        ))}
      </div>
    </div>
  )
}
