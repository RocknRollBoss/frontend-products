import { Header } from "@/components"
import { Container } from "@/components/container"
import React from "react"
type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  )
}
