import { useState } from "react";

import "./App.css";
import FormGenerator from "./components/FormGenerator";

function App() {
  return (
    <div className="app">
      <h2>Dynamic Form Generator</h2>
      <FormGenerator />
    </div>
  );
}

export default App;
