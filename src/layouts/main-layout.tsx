import { Footer, Header } from "@/components"
import { Container } from "@/components/container"

import React from "react"
type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container className="flex-grow">
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  )
}
