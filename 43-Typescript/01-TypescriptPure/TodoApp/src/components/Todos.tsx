import React from "react";
import { Todo } from "./../App";
import { RootState } from "./../redux/store/store";

import { useSelector, useDispatch } from "react-redux";
import DeleteBtn from "./DeleteBtn";
interface Props {
  todos: Todo[];
}

function Todos({ todos }: Props) {
  const reduxTodos = useSelector((state: RootState) => state.todo.todos);

  return (
    <div>
      Todos
      <ul>
        {reduxTodos &&
          reduxTodos.map((elem) => {
            return (
              <li key={elem.id}>
                {elem.tittle} <DeleteBtn id={elem.id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Todos;
