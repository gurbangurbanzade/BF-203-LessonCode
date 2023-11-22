import React from "react";

function Footer({ todos }) {
  return (
    <div>
      <ul>
        {todos &&
          todos.map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Footer;
