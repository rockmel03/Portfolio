import React from "react";
import Header from "./Components/Header";
import Headertest from "./Components/Header.test";
import Navbar from "./Components/Templates/Navbar";

const App = () => {
  return (
    <div className="w-full min-h-screen font-mont bg-gray-light dark:bg-black  dark:text-white">
      <Navbar />
      <Header />
      {/* <Headertest /> */}
    </div>
  );
};

export default App;
