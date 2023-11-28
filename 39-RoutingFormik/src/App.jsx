import { useState } from "react";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import User from "./pages/User";

function App() {
  return (
    <>
      <h1>salam</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="admin" element={<Admin />} />
            <Route path="user" element={<User />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        {/* <Outlet /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
