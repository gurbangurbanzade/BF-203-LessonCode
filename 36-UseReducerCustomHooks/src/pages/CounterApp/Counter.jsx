import React, { useState } from "react";
import useReducer from "../../hooks/Counterx";
import useCounter from "../../hooks/CustomHook";
import useBattery from "../../hooks/useBattery";
function Counter() {
  // const [first, setfirst] = useState(second)
  console.log(useCounter());

  //   let [count, increment, decrement] = useCounter(2);

  let { counter, increment, decrement } = useCounter(10);

  let { level, charging } = useBattery();

  return (
    <div>
      <h4>Counter</h4>
      <button onClick={increment}>Increment</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <br />
      {/* <button onClick={info}>Get battery info</button> */}
      <h1>batareya faiz - {level} %</h1>
      <h1>{charging ? "sarj olunur" : "sarj olunmur"}</h1>
    </div>
  );
}

export default Counter;
