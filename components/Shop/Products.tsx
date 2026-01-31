'use client'
import { useSelector } from "react-redux";
import { CardImage } from "./CardImage";
import { useProducts } from "@/src/hooks/useProducts";
import { RootState } from "@/src/store/store";

export default function Products() {
  const { data: products, isLoading } = useProducts();
  const selectedCategory = useSelector((state: RootState) => state.filters.selectedCategory);
  const filteredProducts = selectedCategory
    ? products?.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="mt-8">
      <p className="text-xl font-bold capitalize">{ selectedCategory ? selectedCategory : "Recomendations" }</p>
      <div className="grid grid-cols-3 gap-8 z-[-1] mt-4">
        {isLoading && <p>Loading...</p>}
        {filteredProducts && filteredProducts.map((product, id) => (
          <CardImage title={product.title} description={product.description} imgSrc={product.image} price={product.price}  key={id}/>
        ))}
      </div>
    </div>
  )
}
