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
import { useRegisterMutation } from "@/app/services/auth-api"
import { useNavigate } from "react-router-dom"
import { RoutesEnum } from "@/routes"
import { Title } from "@/components/ui"

export const Register: React.FC = () => {
  const [register] = useRegisterMutation()
  const navigate = useNavigate()
  const formSchema = z
    .object({
      name: z.string().min(3, {
        message: "Username must be at least 2 characters.",
      }),
      email: z.string().email({ message: "Invalid email address." }),
      password: z
        .string()
        .min(4, { message: "Password must be at least 5 characters." }),
      confirmpassword: z.string().min(4, { message: "Invalid password." }),
    })
    .refine(data => data.password === data.confirmpassword, {
      path: ["confirmpassword"],
      message: "Passwords do not match.",
    })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { confirmpassword, ...data } = values
      await register(data).unwrap()
      navigate(RoutesEnum.HOME)
    } catch (error: unknown) {
      form.setError("root", {
        message:
          error instanceof Error ? error.message : "Unexpected error occurred",
      })
    }
  }

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center w-full">
        <Title
          text="Register"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="repeat password"
                      {...field}
                    />
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
    </MainLayout>
  )
}
