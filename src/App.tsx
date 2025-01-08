import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

