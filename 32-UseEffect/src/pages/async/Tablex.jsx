import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@chakra-ui/react";
import axios from "axios";

import { Button, ButtonGroup } from "@chakra-ui/react";
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
function Tablex({ setData, setName, setPrice, name, price, data }) {
  const [elemName, setElemName] = useState("");
  const [elemPrice, setElemPrice] = useState("");
  const [elem, setElem] = useState("");

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((elem, i) => {
              return (
                <Tr key={uuidv4()}>
                  <Td>{elem.id}</Td>
                  <Td>{elem.name}</Td>
                  <Td>{elem.unitPrice}</Td>
                  <Td>
                    <Button
                      data-id={elem.id}
                      colorScheme="yellow"
                      onClick={(e) => {
                        console.log(e.target.getAttribute("data-id"));
                        console.log(
                          data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          )
                        );
                        setElem(
                          data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          )
                        );
                        setElemName(
                          data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          ).name
                        );
                        setElemPrice(
                          data.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("data-id")
                          ).unitPrice
                        );
                      }}
                    >
                      Edit
                    </Button>
                  </Td>

                  <Td>
                    <Button
                      data-id={elem.id}
                      colorScheme="red"
                      onClick={(e) => {
                        // console.log(e.target);
                        let arr = [...data];
                        // console.log(e.target.getAttribute("data-id"));
                        arr = arr.filter(
                          (elem) => elem.id != e.target.getAttribute("data-id")
                        );
                        // console.log(arr);

                        setData(arr);
                        axios.delete(
                          "https://northwind.vercel.app/api/products/" +
                            e.target.getAttribute("data-id")
                        );
                      }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <h1>Edit location</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("sadfg");
        }}
      >
        <label htmlFor="">Name</label>
        <Input
          value={elemName}
          placeholder="Basic usage"
          onChange={(e) => {
            setElemName(e.target.value);

            // console.log(e.target.value);
          }}
        />
        <label htmlFor="">Price</label>
        <Input
          value={elemPrice}
          placeholder="Basic usage"
          onChange={(e) => {
            setElemPrice(e.target.value);
          }}
        />
        <Button
          type="submit"
          colorScheme="green"
          onClick={() => {
            let obj = {
              name: elemName,
              unitPrice: elemPrice,
            };

            axios
              .patch(
                "https://northwind.vercel.app/api/products/" + elem.id,
                obj
              )
              .then((res) => {
                let arr = [...data];

                let index;
                let findElem = arr.find((elem) => elem.id == res.data.id);
                console.log(arr.find((elem) => elem.id == res.data.id));
                data.forEach((elem, i) => {
                  if (elem.id == findElem.id) {
                    console.log("element tapildi", "indeksi ise----", i);
                    index = i;
                  }
                });

                data[index] = res.data;

                // data.findIndex(arr.find(elem=>elem.id==res.data.id))
                setData([...data]);
              });
          }}
        >
          Edit
        </Button>
      </form>
    </>
  );
}

export default Tablex;
