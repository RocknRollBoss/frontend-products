import React from "react"
import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { MainLayout } from "@/layouts"
type Props = {
  className?: string
}
export const Loader: React.FC<Props> = ({ className }) => {
  return (
    <MainLayout>
      <LoaderIcon
        className={cn("w-8 h-8 animate-spin", className)}
      ></LoaderIcon>
    </MainLayout>
  )
}
