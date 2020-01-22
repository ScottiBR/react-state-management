import React, { useState } from "react";

import Toggle from "./Toggle";
import ToggleStatus from "./ToggleStatus";
import { ToggleProvider } from "./ToggleContext";

const App = () => {
  return (
    <div>
      <ToggleProvider>
        <Toggle />
        <ToggleStatus />
      </ToggleProvider>
    </div>
  );
};

export default App;
