import { ProductForm } from "@/components"
import { MainLayout } from "@/layouts"
import React from "react"
import { useParams } from "react-router-dom"

export const ProductEdit: React.FC = () => {
  const { id } = useParams()
  return (
    <MainLayout>
      <ProductForm title="Edit" id={id} />
    </MainLayout>
  )
}
