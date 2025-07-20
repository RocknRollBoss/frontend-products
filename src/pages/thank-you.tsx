import { Title, Button } from "@/components/ui"
import { RoutesEnum } from "@/routes"
import React from "react"
import { Link } from "react-router-dom"

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Title
        size="md"
        className="text-3xl font-bold mb-4"
        text=" Thank you for your order!"
      />

      <p className="text-muted-foreground mb-6">
        We appreciate your purchase. Your items will be delivered soon.
      </p>
      <Link to={RoutesEnum.HOME}>
        <Button>Go back to home</Button>
      </Link>
    </div>
  )
}
