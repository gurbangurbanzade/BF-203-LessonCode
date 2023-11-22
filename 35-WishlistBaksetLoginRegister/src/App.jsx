import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layouts from "./layouts";
import Home from "./pages/home";
import Basket from "./pages/basket";
import Favorites from "./pages/favorites";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  const [basket, setBasket] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLogin, setLogin] = useState(false);
  // localStorage.setItem("isLogin", JSON.stringify(false));
  // setLogin(false);
  const [basketFav, setBasketFav] = useState({
    basket: [],
    favorites: [],
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route
              index
              element={
                <Home
                  basketFav={basketFav}
                  setBasketFav={setBasketFav}
                  isLogin={isLogin}
                  setLogin={setLogin}
                />
              }
            />
            <Route
              path="basket"
              element={
                <Basket basketFav={basketFav} setBasketFav={setBasketFav} />
              }
            />
            <Route
              path="favorites"
              element={
                <Favorites basketFav={basketFav} setBasketFav={setBasketFav} />
              }
            />
            <Route
              path="login"
              element={
                <Login
                  basketFav={basketFav}
                  setBasketFav={setBasketFav}
                  isLogin={isLogin}
                  setLogin={setLogin}
                />
              }
            />
            <Route
              path="register"
              element={
                <Register basketFav={basketFav} setBasketFav={setBasketFav} />
              }
            />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
