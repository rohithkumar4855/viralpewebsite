import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Management from "../pages/Management";
import Login from "../pages/Login";
import Vouchers from "../feature/Dashboard/Vouchers"
import VoucherDetails from "../feature/Dashboard/VoucherDetails"
import LoginPage from "../feature/Dashboard/Userloginpage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs/>} />
       <Route path="/management" element={<Management/>} />
        <Route path="/login-user" element={<LoginPage/>} />
      <Route path="/dashboard" element={<Login/>} />
      <Route path="/vouchers" element={<Vouchers/>} />
      <Route path="/voucher-details" element={<VoucherDetails/>} />

    </Routes>
  );
}