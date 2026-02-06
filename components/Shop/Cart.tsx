import {
  ShoppingCart,
  Plus,
  Minus,
  Trash,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/src/store/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/src/store/store"

export default function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="absolute top-20 right-20">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className=" relative">
            <ShoppingCart/>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Your Cart</DialogTitle>
          </DialogHeader>

          <ScrollArea className="max-h-75 pr-4">
            {cartItems.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Your cart is empty
              </p>
            )}

            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 py-3">
                <picture>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />
                </picture>

                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      disabled={item.quantity === 1}
                    >
                      <Minus size={16} />
                    </Button>

                    <span className="w-6 text-center">
                      {item.quantity}
                    </span>

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      <Plus size={16} />
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                      className="ml-auto"
                    >
                      <Trash size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>

          <Separator />

          <div className="flex items-center justify-between">
            <span className="font-semibold">Total</span>
            <span className="text-lg font-bold">
              ${total.toFixed(2)}
            </span>
          </div>

          <Button className="w-full">
            Pay
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
