import { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [name, setName] = useState("kanan");
  console.log("header render olundu");

  return (
    <div>
      <h4>Header</h4>
      <button
        onClick={() => {
          setName("qurban");
          //   console.log(name);
        }}
      >
        Change Name
      </button>
      ---------
      <Navbar />
    </div>
  );
}

export default Header;
