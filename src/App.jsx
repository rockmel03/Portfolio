import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Templates/Navbar";

const App = () => {
  return (
    <div className="w-full min-h-screen   bg-zinc-950 text-zinc-50">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
