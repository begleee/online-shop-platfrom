import axios from 'axios';
import { Product } from '@/types/product';

export async function fetchProducts(): Promise<Product[]> {
  const { data } = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products");
  return data;
}
