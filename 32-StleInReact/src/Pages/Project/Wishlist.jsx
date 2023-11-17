import React, { useEffect, useState } from "react";

function Wishlist() {
  console.log("salam");
  const [fav, setFav] = useState([]);
  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("fav"));

    arr ? setFav(arr) : setFav([]);
  }, []);

  return (
    <div>
      {fav.map((elem, i) => {
        return <li key={i}>{elem.name}</li>;
      })}
    </div>
  );
}

export default Wishlist;
