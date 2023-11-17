import React from "react";

function Register({ setLogin }) {
  return (
    <div>
      <h1>Register</h1>
      <button
        onClick={() => {
          setLogin(true);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Register;
