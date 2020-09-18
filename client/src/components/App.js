import React from "react";

import Header from "./Header";
import Dashboard from "./Dashboard";
import { Alert } from "./Alert";

function App() {
  return (
    <>
      <Alert />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
