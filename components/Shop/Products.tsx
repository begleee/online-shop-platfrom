'use client'
import { CardImage } from "./CardImage";
import { useProducts } from "@/src/hooks/useProducts";

export default function Products() {
  const { data: products, isLoading, error } = useProducts();
  return (
    <div className="mt-8">
      <p className="text-xl font-bold">Recomendations</p>
      <div className="grid grid-cols-3 gap-8 z-[-1] mt-4">
        {error && <p>Something went wrong.</p>}
        {isLoading && <p>Loading...</p>}
        {products && products.map((product, id) => (
          <CardImage title={product.title} description={product.description} imgSrc={product.image} price={product.price}  key={id}/>
        ))}
      </div>
    </div>
  )
}
