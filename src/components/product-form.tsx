import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MainLayout } from "@/layouts"

import { useNavigate } from "react-router-dom"
import { RoutesEnum } from "@/routes"
import {
  useCreateProductMutation,
  useEditProductMutation,
  useGetProductQuery,
} from "@/app/services/product-api"
import { skipToken } from "@reduxjs/toolkit/query"
import { useEffect } from "react"
import { Loader } from "./loader"
import { Title } from "./ui"
type Props = {
  title: "Create" | "Edit"
  id?: string
}
export const ProductForm: React.FC<Props> = ({ title, id }) => {
  const formTitle = title === "Create" ? "Create" : "Edit"
  const navigate = useNavigate()
  const [createProduct] = useCreateProductMutation()
  const { data: product, isLoading } = useGetProductQuery(id ?? skipToken)
  const [editProduct] = useEditProductMutation()
  const formSchema = z.object({
    name: z.string().min(3, {
      message: "name must be at least 2 characters.",
    }),
    price: z
      .string()
      .min(1, { message: "price must be at least 1 characters." }),
    imageUrl: z.string().min(1, { message: "Invalid url." }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      imageUrl: "",
    },
  })
  useEffect(() => {
    if (title === "Edit") {
      form.reset({
        name: product?.name,
        price: product?.price,
        imageUrl: product?.imageUrl,
      })
    }
  }, [product, title, form])

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (formTitle === "Create") {
        await createProduct(values)
      } else if (id) {
        await editProduct({ ...values, id })
      }
      navigate(RoutesEnum.HOME)
    } catch (error: unknown) {
      form.setError("root", {
        message:
          error instanceof Error ? error.message : "Unexpected error occurred",
      })
    }
  }

  if (title === "Edit" && isLoading) {
    return <Loader />
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Title
        text={`${formTitle} Product`}
        size="md"
        className="mb-4 text-xl font-semibold"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-[350px]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="url" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="bg-emerald-500 text-white hover:bg-emerald-400 w-full"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
