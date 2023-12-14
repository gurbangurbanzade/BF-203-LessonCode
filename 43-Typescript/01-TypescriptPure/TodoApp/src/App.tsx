import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";

export interface Todo {
  id: string;
  tittle: string;
}

function App() {
  const [todo, setTodo] = useState<Todo>({ id: "", tittle: "" });
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <h1>ToDo App</h1>
      <AddToDo
        todo={todo}
        setTodo={setTodo}
        setTodos={setTodos}
        todos={todos}
      />
      <Todos todos={todos} />
    </>
  );
}

export default App;
