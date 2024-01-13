"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

interface ProdType {
  name: string;
}
const SortFilterSearch = (props: Props) => {
  const [data, setData] = useState<ProdType[]>([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);

  return (
    <div>
      <h1>SortFilterSearch</h1>
      <Button
        onClick={() => {
          let sortedArr = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
          setData(sortedArr);
        }}
        color="primary"
      >
        Sort A-Z
      </Button>
      <Button
        onClick={() => {
          let sortedArr = [...data].sort((a, b) => (a.name > b.name ? -1 : 1));
          setData(sortedArr);
        }}
        color="primary"
      >
        Sort Z-A
      </Button>
      <ul>
        {data &&
          data.map((elem, i) => {
            return <li key={i}>{elem.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default SortFilterSearch;
