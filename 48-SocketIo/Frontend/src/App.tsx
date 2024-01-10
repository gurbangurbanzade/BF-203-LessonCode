import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const room = 0;
  const [message, setMessage] = useState("");
  const [inbox, setInbox] = useState(["salam", "necesen"]);
  const [socket, setSocket] = useState(undefined);
  // const [count, setCount] = useState(0);

  const sendMessage = () => {
    console.log(message);

    socket.emit("message", message);
  };

  useEffect(() => {
    const socket = io("http://localhost/5000/");

    // socket.on("connect", () => {
    //   console.log("Successfully connected!");
    // });

    socket.on("message", (message) => {
      setInbox([...inbox, message, room]);
    });

    setSocket(socket);
  }, [inbox]);

  return (
    <>
      <div>
        <ul>
          {inbox &&
            inbox.map((elem, i) => {
              return <li key={i}>{elem}</li>;
            })}
        </ul>
      </div>
      <div>
        <input onChange={(e) => setMessage(e.target.value)} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <input type="text" />
        <button>Room</button>
      </div>
    </>
  );
}

export default App;
