import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset,
  getValue,
} from "./redux/slices/counterSlice";
import Todo from "./pages/toDo";
import Products from "./pages/Products";

function App() {
  const count = useSelector((state) => state.counter.count);
  const name = useSelector((state) => state.counter.name);
  const basket = useSelector((state) => state.counter.basket);
  const inputValue = useSelector((state) => state.counter.inputValue);

  // console.log(name);
  // console.log(basket);

  const dispatch = useDispatch();

  const [inpValue, setInpValue] = useState("");

  return (
    <>
      <Products />
    </>
  );
}

export default App;
