import React from "react";
import axios from "axios";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function PostForm({ setData, setName, setPrice, name, price, data }) {
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        // console.log("sadfg");
      }}
    >
      <label htmlFor="">Name</label>
      <Input
        value={name}
        placeholder="Basic usage"
        onChange={(e) => {
          // console.log(e.target.value);
          setName(e.target.value);
        }}
      />
      <label htmlFor="">Price</label>
      <Input
        value={price}
        placeholder="Basic usage"
        onChange={(e) => {
          // console.log(e.target.value);
          setPrice(e.target.value);
        }}
      />
      <Button
        type="submit"
        colorScheme="green"
        onClick={() => {
          let obj = {
            name: name,
            unitPrice: price,
          };
          setName("");
          setPrice("");
          axios
            .post("https://northwind.vercel.app/api/products/", obj)
            .then((res) => {
              setData([...data, res.data]);
            });
        }}
      >
        Post
      </Button>
    </form>
  );
}

export default PostForm;
