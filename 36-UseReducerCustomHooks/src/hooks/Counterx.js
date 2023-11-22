import { useState } from "react";

export default function useCounter(x) {
  let [count, setCount] = useState(x);

  function increment() {
    return setCount(++count);
  }

  function decrement() {
    return setCount(--count);
  }
  return {
    count,
    increment,
    decrement,
  };
}
