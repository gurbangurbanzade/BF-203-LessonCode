import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
// import Mount from "./pages/lifeCycleMethod/Mount";
import Async from "./pages/async/Mount";
function App() {
  return (
    <ChakraProvider>
      <>
        <Async />
      </>
    </ChakraProvider>
  );
}

export default App;
