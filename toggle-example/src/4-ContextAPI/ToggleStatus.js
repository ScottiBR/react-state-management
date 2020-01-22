import React from "react";

import { useToggle } from "./ToggleContext";

const ToggleStatus = () => {
  const { toggle } = useToggle();

  return <p>The Status is {toggle ? "ON" : "OFF"}</p>;
};

export default ToggleStatus;
