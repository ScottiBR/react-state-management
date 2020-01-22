import React, { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(prevState => !prevState);

  return (
    <div>
      <p>The Status is {toggle ? "ON" : "OFF"} </p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default App;
