import styled from "styled-components";

const Button = styled.button`
  background: purple;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

import React from "react";

function Buttonx() {
  return <Button>Style component button</Button>;
}

export default Buttonx;
