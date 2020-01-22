import React, { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(prevState => !prevState);
  return (
    <>
      <div>
        <Toggle handleToggle={handleToggle} toggle={toggle} />
      </div>
      <div>
        <ToggleStatus toggle={toggle} />
      </div>
    </>
  );
};

const Toggle = ({ toggle, handleToggle }) => {
  return (
    <div>
      <ToggleStatus toggle={toggle} />
      <ToggleButton handleToggle={handleToggle} />
    </div>
  );
};

const ToggleButton = ({ handleToggle }) => (
  <button onClick={handleToggle}>Toggle</button>
);

const ToggleStatus = ({ toggle }) => (
  <p>The Status is {toggle ? "ON" : "OFF"}</p>
);

export default App;
