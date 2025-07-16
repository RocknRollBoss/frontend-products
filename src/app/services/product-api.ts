import { api } from "./api"
import { ApiRoutes } from "./constants"
export interface IProduct {
  id?: string
  name: string
  price: string
  imageUrl: string
  userId?: string
}

type QueryParams = {
  search?: string
}

export const productApi = api.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], QueryParams | {}>({
      query: ({ search }: any) => ({
        url: ApiRoutes.PRODUCTS,
        method: "GET",
        params: search ? { search } : {},
      }),
      providesTags: ["Products"],
    }),
    getProduct: builder.query<IProduct, string>({
      query: id => ({
        url: `${ApiRoutes.PRODUCTS}/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    createProduct: builder.mutation<IProduct, IProduct>({
      query: body => ({
        url: `${ApiRoutes.CREATE}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    editProduct: builder.mutation<string, IProduct>({
      query: body => ({
        url: `${ApiRoutes.PRODUCTS}/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    removeProduct: builder.mutation<string, string>({
      query: id => ({
        url: `${ApiRoutes.PRODUCTS}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useRemoveProductMutation,
  useCreateProductMutation,
  useEditProductMutation,
} = productApi
