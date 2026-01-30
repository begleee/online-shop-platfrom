import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

export function useProducts() {
  return useQuery({
    queryKey: ['prodcuts'],
    queryFn: fetchProducts
  })
}
