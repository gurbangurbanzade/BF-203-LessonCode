import React from "react";

function WishList() {
  let whislistArr = JSON.parse(localStorage.getItem("whislist"));
  return (
    <div>
      <ul>
        li
        {whislistArr &&
          whislistArr.map((elem, i) => {
            return <li key={i}>{elem.id}</li>;
          })}
      </ul>
    </div>
  );
}

export default WishList;
