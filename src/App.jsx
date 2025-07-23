import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Kollekcio from "./components/Kollekcio/Kollekcio";
import Rolunk from "./components/Rolunk/Rolunk";
import Footer from "./components/Footer/Footer";
import Kapcsolat from "./components/Kapcsolat/Kapcsolat";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/kollekcio" element={<Kollekcio/>} />
        <Route path="/rolunk" element={<Rolunk/>} />
        <Route path="/kapcsolat" element={<Kapcsolat/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
