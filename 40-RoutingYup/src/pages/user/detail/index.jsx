import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products/" + id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div>
      <h1>{product.id}</h1>
      <h3>{product.name}</h3>
    </div>
  );
}

export default Detail;
