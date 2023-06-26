import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Components/Headers";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import Coindetails from "./Components/Coindetails";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coindetails" element={<Coindetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
