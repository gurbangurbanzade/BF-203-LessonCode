import React, { useState } from "react";
import Login from "./Login";
import Products from "./Products";
import Register from "./Register";

function Home() {
  const [isLogin, setLogin] = useState(true);
  const [prod, setProd] = useState(false);
  return (
    <div>
      {isLogin ? (
        <>{prod ? "" : <Login setLogin={setLogin} setProd={setProd} />}</>
      ) : (
        <Register setLogin={setLogin} />
      )}
      {prod ? <Products setLogin={setLogin} setProd={setProd} /> : null}
    </div>
  );
}

export default Home;
