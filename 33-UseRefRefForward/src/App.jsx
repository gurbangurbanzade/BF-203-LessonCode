import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./Pages/UseRef/Parent";

function App() {
  const [count, setCount] = useState(0);

  const input = useRef();
  const h1 = useRef();
  const refs = useRef(null);

  return (
    <>
      <input ref={input} type="text" />
      <button
        onClick={() => {
          input.current.focus();
          refs.current.focus();

          // input.current.focus();
          // console.log(input.current.value);
          // console.log((h1.current.innerHTML = "salam"));
        }}
      >
        Click me
      </button>
      <h1 ref={h1}></h1>
      <Parent name={"qurban"} ref={refs} />
    </>
  );
}

export default App;
