import Header from "./Header";
import { useState } from "react";

function Mount() {
  //   console.log("mount komponenti render olundu");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Mount</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <div>
        <h3>{count}</h3>
      </div>
      ............................
      {count != 5 ? <Header /> : null}
      ............................
    </div>
  );
}

export default Mount;
