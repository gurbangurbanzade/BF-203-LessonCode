import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import WishList from "../WishList/WishList";

function Products() {
  const [data, setData] = useState([]);
  const [fav, setFav] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      setData(res.data);
    });
    let arr = JSON.parse(localStorage.getItem("fav"));

    arr ? setFav(arr) : setFav([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  // console.log(fav);
  return (
    <div>
      <ul>
        {data.map((elem, i) => {
          return (
            <li key={i}>
              {elem.name}{" "}
              <button
                data-id={elem.id}
                onClick={(e) => {
                  let favElem = data.find(
                    (elem) => elem.id == e.target.getAttribute("data-id")
                  );
                  let arr = [];
                  if (
                    fav.find(
                      (elem) => elem.id == e.target.getAttribute("data-id")
                    )
                  ) {
                    arr = fav.filter(
                      (elem) => elem.id != e.target.getAttribute("data-id")
                    );
                    setFav([...arr]);
                  } else {
                    setFav([...fav, favElem]);
                    console.log(fav);
                  }
                  // console.log(e.target);
                  // console.log(favElem);
                }}
              >
                Fav
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
