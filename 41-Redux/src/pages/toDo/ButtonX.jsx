import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./../../redux/slices/todoSlice";
function ButtonX({ id }) {
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

export default ButtonX;
