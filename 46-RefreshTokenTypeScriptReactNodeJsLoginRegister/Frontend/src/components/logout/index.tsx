import axios from "axios";
import React from "react";

type Props = {};

const Logout = (props: Props) => {
  return (
    <div>
      <button
        onClick={() => {
          const token = JSON.parse(localStorage.getItem("token") || "{}");
          console.log(token);
          axios("http://localhost:5000/products/logout", {
            headers: {
              Authorization: `barear ${token.token}`,
              RefreshToken: `barear ${token.refToken}`,
              // RefreshToken: `barear asdfghjkhjgfd`,
            },
          });
          localStorage.removeItem("token");
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Logout;
