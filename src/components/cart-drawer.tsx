import { ShoppingCart, Plus, Minus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer"
import { useNavigate } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCart } from "@/hooks/useCart"
import { RoutesEnum } from "@/routes"

type Props = {
  id?: string
}
export const CartDrawer: React.FC<Props> = ({ id }) => {
  const {
    cartItems,
    onAddToCart,
    onClearCart,
    onDecreaseQuantity,
    onIncreaseQuantity,
    removeFromCart,
  } = useCart()
  const navigate = useNavigate()
  const productId = id || ""
  const onPlaceOrder = () => {
    navigate(RoutesEnum.THANKYOU)
    onClearCart()
  }
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          onClick={() => onAddToCart(productId)}
        >
          <ShoppingCart />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems?.length ?? 0}
          </span>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="right-0 ml-auto w-full sm:max-w-md border-l bg-background text-foreground shadow-lg">
        <DrawerHeader className="border-b px-4 py-3">
          <DrawerTitle className="text-lg font-semibold">Cart</DrawerTitle>
        </DrawerHeader>

        <ScrollArea className="h-[calc(100vh-200px)] px-4 py-4">
          <div className="space-y-4">
            {cartItems?.map(item => {
              const price = item?.product?.price
              const quantity = item.quantity
              const total = Number(price) * quantity

              return (
                <div
                  key={item?.product?.id}
                  className="relative border rounded-xl p-3 space-y-2 bg-muted"
                >
                  <button
                    className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    <X size={16} />
                  </button>

                  <div className="font-medium">{item?.product?.name}</div>
                  <div className="text-sm text-muted-foreground">
                    High-quality and reliable item
                  </div>

                  <div className="text-sm">
                    Price: <span className="font-medium">${price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onDecreaseQuantity(item.productId)}
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="w-6 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onIncreaseQuantity(item.productId)}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>

                  <div className="text-sm text-right text-muted-foreground">
                    Total:{" "}
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
        <div className="px-4 pb-4 text-right">
          <div className="text-lg font-semibold">
            Total Price: $
            {cartItems
              ?.reduce(
                (acc, item) =>
                  acc + item.quantity * (Number(item.product?.price) || 0),
                0,
              )
              .toFixed(2)}
          </div>
        </div>
        <div className="px-4 py-4 border-t space-y-2">
          <Button
            variant="destructive"
            className="w-full"
            onClick={onClearCart}
          >
            Clear Cart
          </Button>

          <div className="flex justify-between gap-2">
            <DrawerClose asChild>
              <Button variant="outline" className="w-1/2">
                Close
              </Button>
            </DrawerClose>

            <Button className="w-1/2" onClick={onPlaceOrder}>
              Place an order
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
