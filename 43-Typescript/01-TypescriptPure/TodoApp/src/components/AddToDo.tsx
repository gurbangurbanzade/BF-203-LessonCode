import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Todo } from "./../App";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./../redux/store/store";

import { reduxGetTodo, reduxGetTodos } from "./../redux/slices/todoSlice";

interface Props {
  todo: Todo;
  todos: Todo[];

  setTodo: Dispatch<SetStateAction<Todo>>;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

function AddToDo({ todo, todos, setTodo, setTodos }: Props) {
  const reduxTodo = useSelector((state: RootState) => state.todo.todo);

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        // value={todo.tittle}
        onChange={(e) => {
          // bu sade state ile
          // const target = e.target as HTMLInputElement;
          // const obj: Todo = {
          //   id: uuidv4(),
          //   tittle: e.target.value,
          // };
          // setTodo(obj);

          // bu redux ile

          dispatch(reduxGetTodo(e.target.value));
        }}
      />
      <button
        onClick={() => {
          // bu sade state ile

          // setTodos([...todos, todo]);
          // setTodo({ id: "", tittle: "" });

          // bu redux ile

          dispatch(reduxGetTodos(reduxTodo));
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddToDo;
