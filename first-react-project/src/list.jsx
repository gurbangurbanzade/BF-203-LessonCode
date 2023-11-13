/* eslint-disable no-unused-vars */
import React from "react";

function List() {
  let students = ["fatime", "ismayil", "seid", "nahid"];

  return (
    <div>
      <ul>
        {students.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
