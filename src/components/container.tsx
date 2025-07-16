import React from "react"
type Props = {
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="w-[70%] h-screen mx-auto">{children}</div>
}
