import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About></About>
      </div>
    </>
  );
}

export default App;
