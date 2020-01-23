import React from "react";

import { useToggle } from "./ToggleContext";

const ToggleButton = () => {
  const { handleToggle } = useToggle();

  return <button onClick={handleToggle}>Toggle</button>;
};
export default ToggleButton;
