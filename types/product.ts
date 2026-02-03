export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

export type SortingType = "name_asc" | "name_desc" | "price_asc" | "price_desc";