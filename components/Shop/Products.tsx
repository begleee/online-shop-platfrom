'use client'
import { useEffect, useState } from "react"
import { CardImage } from "./CardImage";

export default function Products() {
  const [products, setProducts] = useState(Array.from({length: 10}, () => ({})));
  // useEffect(() => {
  //   async function getProducts() {
  //     const res = await fetch('http://localhost:3000/api/products');
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   getProducts();
  // }, [])
  return (
    <div className="mt-8">
      <p className="text-xl font-bold">Recomendations</p>
      <div className="grid grid-cols-3 gap-8 z-[-1] mt-4">
        {products.map((product, id) => (
          <CardImage key={id}/>
        ))}
      </div>
    </div>
  )
}
