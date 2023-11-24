import React, { memo } from "react";

function Main() {
  console.log("main render");
  return <div>Main</div>;
}

export default memo(Main);
