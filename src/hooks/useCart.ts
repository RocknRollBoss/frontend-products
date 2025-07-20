import {
  useClearCartMutation,
  useCreateCartItemMutation,
  useDeleteCartItemMutation,
  useGetCartQuery,
  useUpdateCartItemMutation,
} from "@/app/services/cart-api"

export const useCart = () => {
  const { data: cartItems } = useGetCartQuery()
  const [createCartItem] = useCreateCartItemMutation()
  const [deleteCartItem] = useDeleteCartItemMutation()
  const [clearCart] = useClearCartMutation()
  const [updateCartItem] = useUpdateCartItemMutation()

  const onAddToCart = async (productId:string) => {
    try {
      await createCartItem({ productId, quantity: 1 })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Any error")
      }
    }
  }
  const removeFromCart = async (productId: string) => {
    try {
      await deleteCartItem(productId)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Any error")
      }
    }
  }
  const onClearCart = async () => {
    try {
      await clearCart()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Any error")
      }
    }
  }
  const onIncreaseQuantity = async (productId: string) => {
    const item = cartItems?.find(item => item.productId === productId)
    if (!item) return

    try {
      await updateCartItem({ productId, quantity: item.quantity + 1 })
    } catch (error: unknown) {
      console.log(error instanceof Error ? error.message : "Any error")
    }
  }
  const onDecreaseQuantity = async (productId: string) => {
    const item = cartItems?.find(item => item.productId === productId)
    if (!item) {
      return
    }
    try {
      await updateCartItem({
        productId,
        quantity: item.quantity === 1 ? 1 : item.quantity - 1,
      })
    } catch (error) {
      console.log(error instanceof Error ? error.message : "Any error")
    }
  }

  return {
    onAddToCart,
    removeFromCart,
    onClearCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
    cartItems,
  }
}
