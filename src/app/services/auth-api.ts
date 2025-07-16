import { api } from "./api"
import { ApiRoutes } from "./constants"

export interface IUser {
  id?: string
  name: string
  email: string
  password: string
  token: string
}
type ResponseLogin = Omit<IUser, "name" | "token">
type ResponseUser = Omit<IUser, "token">
export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<IUser, ResponseUser>({
      query: body => ({
        url: ApiRoutes.REGISTER,
        method: "POST",
        body,
      }),
      transformResponse: (response: IUser) => {
        localStorage.setItem("token", response.token)
        localStorage.setItem("auth", "true")
        return response
      },
    }),
    login: builder.mutation<IUser, ResponseLogin>({
      query: (body: any) => ({
        url: ApiRoutes.LOGIN,
        method: "POST",
        body,
      }),
      transformResponse: (response: IUser) => {
        localStorage.setItem("token", response.token)
        localStorage.setItem("auth", "true")
        return response
      },
    }),
    getMe: builder.query<IUser, void>({
      query: () => ({
        url: ApiRoutes.ME,
        method: "GET",
      }),
      transformResponse: (response: IUser) => {
        localStorage.setItem("auth", "true")
        return response
      },
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
} = authApi
