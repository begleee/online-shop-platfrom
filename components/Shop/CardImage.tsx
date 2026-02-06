import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Product } from "@/types/product";
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useDispatch } from "react-redux";
import { addToCart } from "@/src/store/cartSlice";
import { Toaster } from "sonner";
import { toast } from "sonner";

type ProductCart = {
  id: string,
  title: string,
  price: number,
  image: string
}

export function CardImage({
  title,
  description,
  image,
  price,
  category,
  id
}: Product) {
  const dispatch = useDispatch();

  const stringId = id.toString();

  const product: ProductCart = { id: stringId, title, price, image};

  function handleAdd() {
    dispatch(addToCart(product));
    toast("Added to cart");
  }

  return (
    <Dialog>
      <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden hover:scale-[101%] transition-transform">
        <div className="absolute inset-0 aspect-video bg-black/35" />

        <picture>
          <img
            src={image}
            alt={title}
            className="relative aspect-video w-full object-contain brightness-60 grayscale dark:brightness-40 p-4"
          />
        </picture>

        <CardHeader>
          <CardAction>
            <Badge variant="secondary">${price}</Badge>
          </CardAction>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardFooter className="mt-auto">
          <DialogTrigger asChild>
            <Button className="w-full">View</Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      {/* Dialog content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="flex gap-4">
              <Badge variant="outline">${price}</Badge>
              <Badge variant="outline">{category}</Badge>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <picture>
            <img
              src={image}
              alt={title}
              className="w-full h-60 object-contain rounded-md"
            />
          </picture>


          <p className="text-sm text-muted-foreground">
            {description}
          </p>

          <Button className="w-full" onClick={handleAdd}>
            Add to cart
          </Button>
          <Toaster theme="dark" position="top-center"/>
        </div>
      </DialogContent>
    </Dialog>
  )
}
