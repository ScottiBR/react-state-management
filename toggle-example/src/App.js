import React, { useState } from "react";

const App = () => {
  const [status, setStatus] = useState(false);
  const handleToggle = () => setStatus(prevState => !prevState);

  return (
    <div>
      <Status status={status} />
      <ToggleButton handleToggle={handleToggle} />
    </div>
  );
};

const ToggleButton = ({ handleToggle }) => (
  <button onClick={handleToggle}>Toggle</button>
);

const Status = ({ status }) => (
  <p>
    The Status is: <strong>{status ? "on" : "off"}</strong>
  </p>
);

export default App;
