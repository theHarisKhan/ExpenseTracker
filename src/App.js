import React from "react";
import "./App.css";
import Child from "./components/Child";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Child />
    </GlobalProvider>
  );
}

export default App;
