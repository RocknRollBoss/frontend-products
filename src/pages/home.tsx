import { ProductsWrapper } from "@/components"
import { useAuthRedirect } from "@/hooks/useAuthRedirect"
import { MainLayout } from "@/layouts"

export const Home: React.FC = () => {
  useAuthRedirect()
  return (
    <MainLayout>
      <ProductsWrapper />
    </MainLayout>
  )
}
