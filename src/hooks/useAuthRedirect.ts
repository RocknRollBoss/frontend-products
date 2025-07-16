import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useLazyGetMeQuery } from "@/app/services/auth-api"
import { userSelector } from "@/features/slices/authSlice"
import { RoutesEnum } from "@/routes"
export const useAuthRedirect = () => {
  const navigate = useNavigate()
  const user = useSelector(userSelector)
  const [fetchUser, { isLoading }] = useLazyGetMeQuery()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate(RoutesEnum.LOGIN)
      return
    }

    if (!user && !isLoading) {
      fetchUser()
        .unwrap()
        .catch(() => {
          localStorage.removeItem("token")
          navigate(RoutesEnum.LOGIN)
        })
    }
  }, [user, fetchUser, isLoading, navigate])
}
