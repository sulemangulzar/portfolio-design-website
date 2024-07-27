import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Results from "./components/Results";

const App = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto overflow-x-hidden font-Montserrat">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Results />
      </div>
    </>
  );
};

export default App;
