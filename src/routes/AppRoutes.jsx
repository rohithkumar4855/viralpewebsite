import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Management from "../pages/Management";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs/>} />
       <Route path="/management" element={<Management/>} />
      <Route path="/login" element={<Login/>} />


      
    </Routes>
  );
}