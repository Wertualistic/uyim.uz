import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Honadon from "./Pages/Honadon/Honadon";
import Main from "./Pages/Main/Main";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import Uy from "./Pages/Uy/Uy";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UyAdd from "./Pages/UyAdd/UyAdd";
import HonadonAdd from "./Pages/HonadonAdd/HonadonAdd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/honadon" element={<Honadon />} />
        <Route path="/uy" element={<Uy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/uy_add" element={<UyAdd />} />
        <Route path="/honadon_add" element={<HonadonAdd />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
