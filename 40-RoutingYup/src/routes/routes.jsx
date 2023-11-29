import UserRoot from "../pages/user/userRoot";
import Home from "../pages/user/home/index";
import Products from "../pages/user/products";
import ProductsA from "../pages/admin/productsA";
import Detail from "../pages/user/detail";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import NoPage from "../pages/noPage";
import Navbar from "../layout/Navbar";
import AdminRoot from "../pages/admin/adminRoot";
import AddProducts from "../pages/admin/addProducts";
import Dashboard from "../pages/admin/dashboard/index";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Detail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/productsA",
        element: <ProductsA />,
      },
      {
        path: "/admin/productsAdd",
        element: <AddProducts />,
      },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
];
