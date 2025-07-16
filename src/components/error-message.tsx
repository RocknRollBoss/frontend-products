import React from "react"
import { useNavigate } from "react-router-dom"
import { Title } from "./ui/title"
import { Button } from "./ui/button"

export const ErrorMessage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-50">
      <Title
        size="md"
        className="text-4xl font-bold text-red-600 mb-4"
        text="Error 404"
      />
      <p className="text-lg text-gray-700 mb-6">
        Whoops! The page you’re looking for doesn’t exist or something went
        wrong with routing.
      </p>
      <Button
        onClick={() => navigate("/")}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
      >
        Back to Home
      </Button>
    </div>
  )
}
