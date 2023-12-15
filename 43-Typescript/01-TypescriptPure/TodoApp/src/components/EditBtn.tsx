import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { editTodo } from "../redux/slices/todoSlice";
interface Id {
  id: string;
}

function EditBtn({ id }: Id) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        const info = prompt();
        console.log(info);
        dispatch(editTodo({ id: id, tittle: info }));
      }}
    >
      Edit
    </button>
  );
}

export default EditBtn;
