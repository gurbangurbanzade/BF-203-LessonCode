import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteTodo } from "./../redux/slices/todoSlice";
interface Id {
  id: string;
}

function DeleteBtn({ id }: Id) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(deleteTodo(id));
      }}
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
