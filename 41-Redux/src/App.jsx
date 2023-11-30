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
      <h1>Redux</h1>
      <div>
        <div>
          <button
            onClick={() => {
              // dispatch(incrementByAmount(inpValue));
              dispatch(incrementByAmount());
            }}
          >
            Inc ammount
          </button>
          <input
            type="text"
            placeholder="ededi daxil edin"
            onChange={(e) => {
              // setInpValue(e.target.value);
              dispatch(getValue(+e.target.value));
            }}
          />
          <button
            onClick={() => {
              // dispatch(decrementByAmount(inpValue));
              dispatch(decrementByAmount());
            }}
          >
            Dec ammount
          </button>
        </div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => {
              dispatch(increment());
              // console.log(count);
            }}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <button aria-label="Decrement value" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
      <Todo />
    </>
  );
}

export default App;
