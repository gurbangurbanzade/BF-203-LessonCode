import React, { useEffect, useState } from "react";

function Header() {
  const [headCount, setHeadCount] = useState(0);

  // komponent yuklenen anda bas verecek
  useEffect(() => {
    console.log("header komponenti yarandi");

    // komponent yox olan anda bas verecek
    return () => {
      console.log("header komponenti yox oldu");
    };
  }, []);

  // komponent render olunan anda bas verecek
  useEffect(() => {
    console.log("header komponenti render olundu");
  });

  // komponent state-e bagli olaraq deyisecek
  useEffect(() => {
    console.log("header komponenti state deyisdi deye deyisdi");
  }, [headCount]);

  return (
    <div>
      <h3>Header</h3>
      <button
        onClick={() => {
          setHeadCount(headCount + 1);
        }}
      >
        Increase
      </button>
      <h5>{headCount}</h5>
    </div>
  );
}

export default Header;
