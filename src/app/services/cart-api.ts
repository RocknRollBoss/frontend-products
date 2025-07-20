import { api } from "./api"
import { ApiRoutes } from "./constants"
import { IProduct } from "./product-api"
interface ICartItem {
  id: string
  userId: string
  productId: string
  quantity: number
  product?: IProduct
}
interface ICartItemParams {
  productId: string
  quantity: number
}

export const cartApi = api.injectEndpoints({
  endpoints: builder => ({
    getCart: builder.query<ICartItem[], void>({
      query: () => ({
        url: `${ApiRoutes.CART}`,
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),
    createCartItem: builder.mutation<ICartItem, ICartItemParams>({
      query: body => ({
        url: `${ApiRoutes.CART}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCartItem: builder.mutation<ICartItem, ICartItemParams>({
      query: body => ({
        url: `${ApiRoutes.CART}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteCartItem: builder.mutation<string, string>({
      query: productId => ({
        url: `${ApiRoutes.CART}/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    clearCart: builder.mutation<string, void>({
      query: () => ({
        url: `${ApiRoutes.CART}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
})

export const {
  useGetCartQuery,
  useCreateCartItemMutation,
  useDeleteCartItemMutation,
  useUpdateCartItemMutation,
  useClearCartMutation,
} = cartApi
