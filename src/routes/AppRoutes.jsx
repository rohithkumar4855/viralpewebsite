import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Management from "../pages/Management";
import Login from "../pages/Login";
import Vouchers from "../feature/Dashboard/Vouchers"
import VoucherDetails from "../feature/Dashboard/VoucherDetails"
import PaymentScreen from "../feature/Dashboard/Payments";
import LoginPage from "../feature/Dashboard/Userloginpage";
import PaymentSuccess from "../feature/Dashboard/PaymentSuccess";
import PrepaidRecharge from "../feature/Dashboard/PrepaidRecharge";
import Chooseaplan from "../feature/Dashboard/ChooseaPlan";
import FastagRecharge from "../feature/Dashboard/FastagRecharge"
import Dthrecharge from "../feature/Dashboard/Dthrecharge"
import ReferAndEarn from "../feature/Dashboard/Referandearn";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/management" element={<Management />} />
      <Route path="/login-user" element={<LoginPage />} />
      <Route path="/dashboard" element={<Login />} />
      <Route path="/vouchers" element={<Vouchers />} />
      <Route path="/voucher-details" element={<VoucherDetails />} />
      <Route path="/payment-details" element={<PaymentScreen />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/prepaid" element={<PrepaidRecharge />} />
      <Route path="/prepaid-plans" element={<Chooseaplan />} />
      <Route path="/dth" element={< Dthrecharge/>}/>
       <Route path="/fastag" element={<FastagRecharge />}/>
      <Route path="/refer-and-earn" element={< ReferAndEarn/>}/>
    </Routes>
  );
}