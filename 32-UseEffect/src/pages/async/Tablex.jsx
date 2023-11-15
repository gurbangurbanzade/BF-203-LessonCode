import React from "react";
import { v4 as uuidv4 } from "uuid";

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
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Price</Th>
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
  );
}

export default Tablex;
