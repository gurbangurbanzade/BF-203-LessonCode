import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Register() {
  const goTo = useNavigate();
  return (
    <div>
      Register
      <button
        onClick={() => {
          goTo("/wishlist");
        }}
      >
        Go to product
      </button>
    </div>
  );
}

export default Register;
