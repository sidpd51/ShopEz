import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./components/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <PrivateRoute>
        <Home />
      </PrivateRoute>,
    errorElement: <NotFound />
  },
  {
    path: "/signin",
    element:
      <PublicRoute>
        <Signin />
      </PublicRoute>
  },
  {
    path: "/signup",
    element:
      <PublicRoute>
        <Signup />
      </PublicRoute>
  }
]);

export default function App() {
  return (
    <AuthProvider isSignedIn={true}>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

