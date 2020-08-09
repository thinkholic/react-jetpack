import React from "react";
import DummyComponent, { utils } from "react-jetpack";
import { createContext } from "react-jetpack/utils";

function App() {
  console.log(createContext);
  return <DummyComponent />;
}

export default App;
