import { ProductForm } from "@/components"
import { MainLayout } from "@/layouts"
import React from "react"

export const ProductCreate: React.FC = () => {
  return (
    <MainLayout>
      <ProductForm title="Create" />
    </MainLayout>
  )
}
