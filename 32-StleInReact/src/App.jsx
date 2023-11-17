import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Pages/StyleInReact/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttonx from "./Pages/StyleInReact/ Buttonx";
import Child from "./Pages/StyleInReact/Child";
import AntComp from "./Pages/StyleInReact/AntComp";
import { Footer } from "antd/es/layout/layout";
import Home from "./Pages/WishList/Home";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <>
        <Header />
        <Home />
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Buttonx />} />
            <Route path="blogs" element={<Child />} />
            <Route path="contact" element={<AntComp />} />
            <Route path="*" element={<Footer />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      </>
    </ChakraProvider>
  );
}

export default App;
