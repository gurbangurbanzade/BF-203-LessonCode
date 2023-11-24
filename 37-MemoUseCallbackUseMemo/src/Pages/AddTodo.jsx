import React, { memo } from "react";

function AddTodo({ setTodo, addTodo, getSearch }) {
  //   console.log("add todo render");
  return (
    <div>
      <input type="text" placeholder="search" onChange={getSearch} />
      <br />
      AddTodo
      <br />
      <input type="text" onChange={setTodo} />
      <button onClick={addTodo}> Add</button>
    </div>
  );
}

export default memo(AddTodo);
