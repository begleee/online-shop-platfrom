'use client'
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useDispatch } from "react-redux";
import { addToCart } from "@/src/store/cartSlice";
import { Toaster, toast } from "sonner";
import { useTranslations } from "next-intl"

interface CardImageProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

type ProductCart = {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function CardImage({
  title,
  description,
  image,
  price,
  category,
  id
}: CardImageProps) {
  const t = useTranslations("Shop.Card");
  const dispatch = useDispatch();

  const product: ProductCart = { id, title, price, image };

  function handleAdd() {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  }

  return (
    <Dialog>
      <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden hover:scale-[101%] transition-transform">
        <div className="absolute inset-0 aspect-video bg-black/35" />

        <picture>
          <img
            src={image}
            alt={title}
            className="relative aspect-video w-full object-contain"
          />
        </picture>

        <CardHeader>
          <CardAction>
            <Badge variant="secondary">${price}</Badge>
          </CardAction>
          <CardTitle className="truncate">{title}</CardTitle>
        </CardHeader>

        <CardFooter className="mt-auto">
          <DialogTrigger asChild>
            <Button className="w-full">{t("viewDetails")}</Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <div className="flex gap-4 mt-2">
              <Badge variant="outline">${price}</Badge>
              <Badge variant="outline">{category}</Badge>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <picture>
            <img
              src={image}
              alt={title}
              className="w-full h-60 object-contain rounded-md"
            />
          </picture>

          <DialogDescription className="text-sm text-muted-foreground">
            {description}
          </DialogDescription>

          <Button className="w-full" onClick={handleAdd}>
            {t("addToCart")}
          </Button>
          <Toaster theme="dark" position="top-center"/>
        </div>
      </DialogContent>
    </Dialog>
  )
}
