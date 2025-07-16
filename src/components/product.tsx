import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Link } from "react-router-dom"
import { RoutesEnum } from "@/routes"
type Props = {
  id?: string
  name: string
  imageUrl: string
  price: string
}
export const Product: React.FC<Props> = ({ name, imageUrl, price, id }) => {
  return (
    <Link to={`${RoutesEnum.PRODUCTS}/${id}`}>
      <Card className="w-[300px]  rounded-xl shadow-xl border border-gray-200 bg-white transition-transform hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between">
        <CardHeader className="p-5 border-b border-gray-100 flex justify-center">
          <CardTitle className="text-2xl text-inherit text-center">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5 flex-grow">
          <img
            src={imageUrl}
            alt="product-image"
            className="w-full h-[240px] object-cover rounded-lg mb-4"
          />
        </CardContent>
        <CardFooter className="p-5 flex justify-center items-center border-t border-gray-100">
          <span className="text-xl font-bold text-green-600">{price} $</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
