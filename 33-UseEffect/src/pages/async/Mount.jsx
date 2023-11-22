import axios from "axios";

import Header from "./Header";
import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import Tablex from "./Tablex";
import Buttonx from "./Button";

function Async() {
  const [toog, setToog] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    // fetch("https://northwind.vercel.app/api/products/")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    axios("https://northwind.vercel.app/api/products/").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Buttonx toog={toog} setToog={setToog} />
      {toog ? (
        <PostForm
          data={data}
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          setData={setData}
        />
      ) : null}
      <Tablex
        data={data}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        setData={setData}
      />
    </div>
  );
}

export default Async;
