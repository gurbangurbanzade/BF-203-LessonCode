import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>Error Page</div>,
  },
];
