import Home from "../feature/Dashboard/Home";
import Revenue from "../feature/Dashboard/Revenue";
import Heropage from "../components/home/Hero";
import PopularVouchers from "../components/home/Vouchers";

export default function loginpage(){
  return (
    <>
      <Home/>
      <Revenue/>
      <Heropage />
   <PopularVouchers />
    </>
  );
}