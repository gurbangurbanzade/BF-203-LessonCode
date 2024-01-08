"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
type Props = {};

const ProductDetail = (props: Props) => {
  const params = useParams();
  const [data, setData] = useState<{ id: number; name: string }>({});

  useEffect(() => {
    axios("http://localhost:3000/api/products/" + params.productId).then(
      (res) => {
        setData(res.data);
      }
    );
  }, []);

  return (
    <div>
      {data && (
        <>
          <h1>{data.name}</h1>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
