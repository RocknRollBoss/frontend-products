import React, { useState } from "react"
import { Product } from "./product"
import { useGetProductsQuery } from "@/app/services/product-api"
import { Loader, Frown, X } from "lucide-react"
import { Link } from "react-router-dom"
import { RoutesEnum } from "@/routes"
import { useDebounce } from "@/hooks/useDebounce"
import { Button, Input, Title } from "./ui"

export const ProductsWrapper: React.FC = () => {
  const [searchValue, setSearchValue] = useState("")
  const debouncedSearch = useDebounce(searchValue, 300)
  const { data: products, isLoading } = useGetProductsQuery({
    search: debouncedSearch,
  })
  if (isLoading) {
    return <Loader className="w-8 h-8 animate-spin" />
  }

  return (
    <div>
      <div className="mb-[50px] flex justify-between">
        <div className="relative max-w-[600px] w-full">
          <Input
            placeholder="Search..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <X
              size={16}
              className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-black"
              onClick={() => setSearchValue("")}
            />
          )}
        </div>

        <Link to={RoutesEnum.CREATE}>
          <Button className="bg-emerald-500 hover:bg-emerald-400 text-white">
            Create product
          </Button>
        </Link>
      </div>
      <div className="mb-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {!products?.length ? (
          <div className="flex gap-4 items-center">
            <Title text="Products not found" size="md" className="text-2xl" />
            <Frown size={30} color="orange" />
          </div>
        ) : (
          products &&
          products?.map(product => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  )
}
