import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { StarIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import WishList from "./WishList";

//

function Products({ setProd }) {
  localStorage.setItem("name", "qurban");
  const [data, setData] = useState([]);
  const [move, setMove] = useState(true);

  const [seachData, setSearchData] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      setData(res.data);
      setSearchData(res.data);
    });
  }, []);
  let whislistArr = [];

  return (
    <div>
      <h1>Products</h1>
      <button
        onClick={() => {
          setProd(false);
        }}
      >
        Exit
      </button>
      <h4>Wishlist</h4>
      <WishList />

      <InputGroup>
        <InputLeftAddon children="+234" />
        <Input
          type="tel"
          placeholder="phone number"
          onChange={(e) => {
            let arr = data;
            arr = seachData.filter((elem) =>
              elem.name.includes(e.target.value)
            );
            console.log(arr);
            setData(arr);
          }}
        />
      </InputGroup>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th> Btn</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((elem, i) => {
              return (
                <Tr key={i}>
                  <Td>{elem.id}</Td>
                  <Td>{elem.name} </Td>
                  <Td>
                    <button
                      data-id={elem.id}
                      onClick={(e) => {
                        whislistArr = [
                          ...JSON.parse(localStorage.getItem("whislist")),
                        ];
                        console.log(e.target.getAttribute("data-id"));

                        let clickedElem = "";

                        clickedElem = data.find(
                          (elem) => elem.id == e.target.getAttribute("data-id")
                        );
                        console.log(clickedElem);

                        whislistArr.push(clickedElem);

                        localStorage.setItem(
                          "whislist",
                          JSON.stringify(whislistArr)
                        );
                        setMove(!move);
                      }}
                    >
                      Salam
                      <StarIcon color="red.500" />
                    </button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Products;
