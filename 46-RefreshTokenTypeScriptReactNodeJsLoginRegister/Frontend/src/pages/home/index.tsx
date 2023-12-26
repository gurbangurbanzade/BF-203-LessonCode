import { useEffect, useState } from "react";
import Login from "../login";
import {
  ProductT,
  UserStateTy,
  getAllProducts,
} from "./../../redux/slices/userSlice";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Logout from "../../components/logout";

const Home = () => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const products: ProductT[] = useSelector(
    (state: RootState) => state.user.products
  );

  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // const token = localStorage.getItem("token");
    // console.log(token);
    // axios("http://localhost:5000/products", {
    //   headers: {
    //     Authorization: `barear ${token}`,
    //   },
    // }).then((res) => {
    //   console.log(res.data);
    //   setData(res.data);
    // });
  }, [dispatch]);
  return (
    <div>
      Home
      {isLogin ? (
        <>
          <Logout />
          <ul>
            {products &&
              products.map((elem, i) => {
                return <li key={i}>{elem.name}</li>;
              })}
          </ul>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
