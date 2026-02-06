import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export function ProductCard({ product, onAddToCart }: Props) {
  return (
    <Dialog>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="line-clamp-1">{product.title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-1">
          <picture>
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover rounded-md"
            />
          </picture>
          <p className="mt-2 font-semibold">${product.price}</p>
        </CardContent>

        <CardFooter className="flex gap-2">
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View
            </Button>
          </DialogTrigger>

          <Button
            className="w-full"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </Button>
        </CardFooter>
      </Card>

      {/* Dialog content */}
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <picture>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-md"
            />
          </picture>

          <p className="text-sm text-muted-foreground">
            {product.description}
          </p>

          <p className="text-lg font-bold">${product.price}</p>

          <Button
            className="w-full"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
