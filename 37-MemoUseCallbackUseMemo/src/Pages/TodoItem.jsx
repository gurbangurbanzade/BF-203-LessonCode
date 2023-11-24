import React, { memo } from "react";

function TodoItem({ elem }) {
  console.log("todo item", elem);
  return <li>{elem}</li>;
}

export default memo(TodoItem);
