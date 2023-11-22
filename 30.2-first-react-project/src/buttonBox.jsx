/* eslint-disable no-unused-vars */
import React from "react";
import "./button.scss";
import Button from "./button";
function ButtonBox() {
  return (
    <>
      <Button />
      <div className="box">
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>
    </>
  );
}

export default ButtonBox;
