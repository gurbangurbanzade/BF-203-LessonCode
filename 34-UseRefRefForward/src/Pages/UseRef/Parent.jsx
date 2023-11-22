import React, { useRef, forwardRef } from "react";

const Parent = forwardRef(function Parent({ name }, refs) {
  const myInp = useRef(null);
  console.log(name);
  return (
    <div>
      Parent
      <input ref={refs} type="text" />
    </div>
  );
});

export default Parent;
