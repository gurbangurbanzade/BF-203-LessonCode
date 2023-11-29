import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { routes } from "./routes/routes";
import { UserAuth } from "./context/UserAuth";

// console.log(routes);
const router = createBrowserRouter(routes);

function App() {
  let name = "qurban";
  let surname = "qurbanzada";

  const [isLoginUser, setIsLoginUser] = useState(false);

  const data = [name, surname, isLoginUser, setIsLoginUser];

  return (
    <>
      <UserAuth.Provider value={data}>
        <RouterProvider router={router} />
      </UserAuth.Provider>
    </>
  );
}

export default App;
