import { cn } from "@/lib/utils"
import React from "react"
type Props = {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={cn("w-[70%]  mx-auto", className)}>{children}</div>
}
