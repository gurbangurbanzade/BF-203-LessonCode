import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./pages/TodoApp/Todo";
import Counter from "./pages/CounterApp/Counter";

function App() {
  return (
    <>
      {/* <Todo /> */}
      <Counter />
    </>
  );
}

export default App;
