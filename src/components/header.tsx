import { BadgeDollarSign } from "lucide-react"
import React from "react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { RoutesEnum } from "@/routes"
import { Title } from "./ui/title"
import { useDispatch, useSelector } from "react-redux"
import { logOut, userSelector } from "@/features/slices/authSlice"
import { ModeToggle } from "./mode-toggle"
export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const onLogout = () => {
    dispatch(logOut())
    localStorage.setItem("token", "null")
    localStorage.setItem("auth", "false")
  }
  return (
    <header className="bg-background text-foreground border-b mb-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4">
        <Link to={RoutesEnum.HOME} className="flex items-center gap-3">
          <BadgeDollarSign size={32} className="text-green-600" />
          <Title size="lg" text="Products" className="text-xl font-semibold" />
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm font-medium text-muted-foreground">
                {user.email}
              </span>
              <ModeToggle />
              <Button variant="outline" onClick={onLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to={RoutesEnum.REGISTER}>
                <Button variant="default">Sign-up</Button>
              </Link>
              <Link to={RoutesEnum.LOGIN}>
                <Button variant="outline">Sign-in</Button>
              </Link>
              <ModeToggle />
            </>
          )}
        </div>
      </div>
    </header>
  )
}
