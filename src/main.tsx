import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "./app/store"
import { RoutesEnum } from "./routes"
import {
  Home,
  Login,
  ProductCreate,
  ProductDetails,
  ProductEdit,
  Register,
} from "./pages"
import "./index.css"
import { ErrorMessage } from "./components"
import { ThemeProvider } from "./context/theme"
const container = document.getElementById("root")
const router = createBrowserRouter([
  {
    path: RoutesEnum.HOME,
    element: <Home />,
    errorElement: <ErrorMessage />,
  },
  {
    path: RoutesEnum.LOGIN,
    element: <Login />,
    errorElement: <ErrorMessage />,
  },
  {
    path: RoutesEnum.REGISTER,
    element: <Register />,
    errorElement: <ErrorMessage />,
  },
  {
    path: `${RoutesEnum.PRODUCTS}/:id`,
    element: <ProductDetails />,
    errorElement: <ErrorMessage />,
  },
  {
    path: `${RoutesEnum.CREATE}`,
    element: <ProductCreate />,
    errorElement: <ErrorMessage />,
  },
  {
    path: `${RoutesEnum.EDIT}/:id`,
    element: <ProductEdit />,
    errorElement: <ErrorMessage />,
  },
])
if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
