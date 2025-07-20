import {
  useGetProductQuery,
  useRemoveProductMutation,
} from "@/app/services/product-api"
import { CartDrawer, DeleteProductModal } from "@/components"
import { Loader } from "@/components/loader"
import { Button, Title } from "@/components/ui"
import { userSelector } from "@/features/slices/authSlice"
import { MainLayout } from "@/layouts"
import { RoutesEnum } from "@/routes"
import { skipToken } from "@reduxjs/toolkit/query"
import React from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"

export const ProductDetails: React.FC = () => {
  const { id } = useParams()
  const user = useSelector(userSelector)
  const navigate = useNavigate()
  const { data: product, isLoading } = useGetProductQuery(id ?? skipToken)
  const [removeProduct] = useRemoveProductMutation()
  if (isLoading) {
    return <Loader />
  }
  if (!product) {
    return <Title size="md" text="product not found" />
  }
  const onRemoveProduct = async () => {
    try {
      await removeProduct(id || "")
      navigate(RoutesEnum.HOME)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Any error")
      }
    }
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-5 py-10">
        <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-4">
                Discover high-quality, reliable, and thoughtfully designed
                products made to enhance your everyday experience. Each item is
                crafted with attention to detail, ensuring excellent
                performance, lasting durability, and a modern aesthetic that
                fits seamlessly into your lifestyle.
              </p>
            </div>

            <div>
              <span className="text-2xl font-semibold text-green-600 mb-6 block">
                {product.price} $
              </span>
              <div className="flex gap-4">
                <CartDrawer id={id} />
                {user?.id === product.userId && (
                  <div className="flex gap-4">
                    <Link to={`${RoutesEnum.EDIT}/${id}`}>
                      <Button className="px-5 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-300 transition-colors">
                        Edit
                      </Button>
                    </Link>
                    <DeleteProductModal deleteProduct={onRemoveProduct} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
