import React, { createContext, useState, useContext } from "react";

const toggleContext = createContext();

export const ToggleProvider = props => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(prevState => !prevState);
  return (
    <toggleContext.Provider value={{ toggle, handleToggle }}>
      {props.children}
    </toggleContext.Provider>
  );
};

export const useToggle = () => {
  const context = useContext(toggleContext);

  if (!context) throw new Error("Context Undefined");

  return context;
};
