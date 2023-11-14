import { useState } from "react";

function Navbar() {
  const [surname, setSurname] = useState("kananzada");

  console.log("navbar render olundu");
  return (
    <div>
      <h5>Navbar</h5>
      <button
        onClick={() => {
          setSurname("gurbanzada");
        }}
      >
        Change Surname
      </button>
    </div>
  );
}

export default Navbar;
