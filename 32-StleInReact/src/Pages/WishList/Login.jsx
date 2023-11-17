import React from "react";

function Login({ setLogin, setProd }) {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          setProd(true);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setLogin(false);
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Login;
