import React, { useState } from "react";
import "./Header.css";
import Child from "./Child";
import Buttonx from "./ Buttonx";
import Footer from "./Footer";
import AntComp from "./AntComp";
import { Outlet, Link } from "react-router-dom";

function Header() {
  let check = false;

  const [state, setState] = useState(true);
  return (
    <div>
      <h3 style={state ? { background: "green" } : { background: "red" }}>
        Header
      </h3>
      <button
        style={state ? { background: "green" } : { background: "red" }}
        onClick={() => {
          setState((state) => !state);
        }}
      >
        Add
      </button>
      <button className={state ? "btn" : null}>Delete</button>
      <Child />
      <Buttonx />
      <Footer />
      <AntComp />
      {/* <>
        <nav>
          <ul>
            <li>
              <Link to="/">Buttonx</Link>
            </li>
            <li>
              <Link to="/blogs">Child</Link>
            </li>
            <li>
              <Link to="/contact">AntDesign</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </> */}
    </div>
  );
}

export default Header;
