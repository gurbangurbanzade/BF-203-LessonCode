import React, { useState } from "react";
import { addTodo } from "../../redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonX from "./ButtonX";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const [inpValue, setInpValue] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <h3>To do</h3>
      <input
        type="text"
        onChange={(e) => {
          setInpValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(todos);
          dispatch(addTodo(inpValue));
        }}
      >
        Add
      </button>
      <h4>Todos</h4>
      <ul>
        {todos &&
          todos.map((elem) => {
            return (
              <li key={elem.id}>
                {elem.tittle} <ButtonX id={elem.id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Todo;
