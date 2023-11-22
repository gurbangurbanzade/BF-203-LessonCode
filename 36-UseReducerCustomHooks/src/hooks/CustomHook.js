import { useState } from "react";

export default function useCounter(startCount) {
  let [counter, setCount] = useState(startCount);
  function increment() {
    return setCount(++counter);
  }

  function decrement() {
    return setCount(--counter);
  }

  return {
    counter,
    increment,
    decrement,
  };
}
