import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Buttonx({ toog, setToog }) {
  return (
    <Button
      colorScheme="pink"
      onClick={() => {
        setToog((toog) => !toog);
      }}
    >
      Show{" "}
    </Button>
  );
}

export default Buttonx;
