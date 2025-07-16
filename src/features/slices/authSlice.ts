import { IUser } from "@/app/services/auth-api"
import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "@/app/services/auth-api"
import { RootState } from "@/app/store"

interface AuthState {
  user: IUser | null
  isAuth: Boolean
}
const initialState: AuthState = {
  user: null,
  isAuth: false,
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: state => {
      state.user = null
      state.isAuth = false
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, action) => {
        state.user = action.payload
        state.isAuth = true
      },
    )
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.user = action.payload
        state.isAuth = true
      },
    )
    builder.addMatcher(
      authApi.endpoints.getMe.matchFulfilled,
      (state, action) => {
        state.user = action.payload
        state.isAuth = true
      },
    )
  },
})
export const userSelector = (state: RootState) => state.auth.user
export const auth = slice.reducer
export const { logOut } = slice.actions
