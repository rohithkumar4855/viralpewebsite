import { useNavigate } from "react-router-dom";
import { useState } from "react";
import vouchers from "../../public/images/vouchers.svg";
import moneyreceive from "../../public/images/money-receive.svg";
import moneysend from "../../public/images/money-send.svg";
import dthicon from "../../public/images/dthicon.svg";
import fastagicon from "../../public/images/fasttag.svg";
import refer from "../../public/images/refericon.svg";
import transactions from "../../public/images/transcations.svg";

import {
  Menu,
  Search,
  Bell,
  MapPin,
  ChevronDown,
  X,
  Percent
} from "lucide-react";
import logo from "../../public/images/logo.png";

export default function UserNavbar() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAllMenuOpen, setIsAllMenuOpen] = useState(false); // Managed state for the side panel

  // Bottom row menu items - Kept exactly original
  const secondaryNavItems = [
    { name: "All", icon: <Menu size={18} />, path: "/all-services" },
    {
      name: "Vouchers",
      icon: <img src={vouchers} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/Vouchers"
    },
    {
      name: "Prepaid Recharge",
      icon: <img src={moneyreceive} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/prepaid"
    },
    {
      name: "Postpaid Recharge",
      icon: <img src={moneysend} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/prepaid"
    },
    {
      name: "DTH Recharge",
      icon: <img src={dthicon} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/dth"
    },
    {
      name: "FASTag Recharge",
      icon: <img src={fastagicon} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/fastag"
    },
    {
      name: "Refer & Earn",
      icon: <img src={refer} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/refer-and-earn"
    },
    {
      name: "Transactions",
      icon: <img src={transactions} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/transactions"
    },
  ];

  // Helper arrays mapping directly to your items for the layout overlay
  const rechargeBillsGroup = [
    { name: "Prepaid Recharge", path: "/prepaid" },
    { name: "Postpaid Recharge", path: "/prepaid" },
    { name: "DTH Recharge", path: "/dth" },
    { name: "FASTag Recharge", path: "/fastag" }
  ];

  const financePayoutsGroup = [
    { name: "My Vouchers", path: "/Vouchers" },
    { name: "My Wallet", path: "/wallet" },
    { name: "Refer & Earn", path: "/refer-and-earn" },
    { name: "My Pincode Dashboard", path: "/pincode-dashboard" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm font-sans">

      {/* --- TOP ROW --- */}
      <div className="px-6 md:px-10 lg:px-[115px] py-3 flex items-center justify-between">

        {/* Left Side: Logo & Greeting */}
        <div className="flex items-center gap-6">
          <div className="cursor-pointer" onClick={() => navigate("/dashboard")}>
            <img src={logo} alt="logo" className="w-[78px] h-[78px] object-contain" />
          </div>
          <div className="hidden md:flex flex-col">
            <h1 className="text-gray-900 text-[18px] font-semibold">
              Hello, Sreenivas
            </h1>
            <div className="flex items-center text-gray-500 text-[14px] mt-1">
              <MapPin size={14} className="text-(--primary-red) mr-1" />
              <span>500000</span>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex  flex-1 max-w-xl mx-8 justify-between">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search brands like Myntra, Nike..."
              className="max-w-[385px] w-full max-h-[54px] bg-white border border-gray-200 text-gray-700 rounded-[12px] py-[10px] pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
            />
          </div>
        </div>

        {/* Right Side: Notifications & Profile */}
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
            <Bell size={22} />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="w-10 h-10 bg-white text-white rounded-lg flex items-center justify-center font-semibold text-lg">

              </div>
              <div className="bg-[#901c27] p-5 max-h-[42.31px] max-w-[42.31px] w-full h-full text-center rounded-[8px] flex items-center">
                <h1 className=" text-white text-[20.75px] ">S</h1>
              </div>
              <ChevronDown size={16} className="text-gray-500" />

            </div>
            <div>
            </div>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    navigate("/dashboard");
                  }}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium cursor-pointer"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    navigate("/profile");
                  }}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium cursor-pointer"
                >
                  Profile
                </button>

                <div className="h-[1px] w-full bg-white my-1"></div>

                <button
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    window.dispatchEvent(new Event("authChange"));
                    navigate("/");
                  }}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 font-medium transition cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- BLUE DIVIDER LINE --- */}
      <div className="w-full h-[4px] "></div>

      {/* --- SECONDARY NAVBAR ITEMS ROW --- */}
      <div className="px-6 md:px-10 lg:px-[115px] py-4 bg-white overflow-x-auto hide-scrollbar border-b border-gray-100">
        <div className="flex items-center gap-[39px] min-w-max">
          {secondaryNavItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.name === "All") {
                  setIsAllMenuOpen(true);
                } else {
                  navigate(item.path);
                }
              }}
              className="flex items-center gap-2 text-gray-600  rounded-full hover:bg-[#FFEDEE] cursor-pointer transition-colors"
            >
              <span className="text-[#961a20] opacity-80">{item.icon}</span>
              <span className="font-medium text-[15px] whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- "ALL" SIDE CONTAINER OVERLAY MODAL --- */}
      {isAllMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-xs z-[100] flex justify-start animate-fade-in">
          {/* Main Panel Content Box */}
          <div className="w-full max-w-[360px] bg-white h-screen shadow-2xl p-6 flex flex-col justify-start relative overflow-y-auto animate-slide-right">

            {/* Top Close Control Actions Header Row */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <button
                onClick={() => setIsAllMenuOpen(false)}
                className="text-gray-500 hover:text-gray-800 p-1 hover:bg-gray-100 rounded-lg transition"
              >
                <X size={22} />
              </button>

              <div className="flex items-center gap-4">
                <span className="text-[#800A1D] font-bold text-base border-b-2 border-[#800A1D] pb-1 px-1">
                  All
                </span>

              </div>
            </div>

            {/* Menu Segments Section */}
            <div className="flex flex-col gap-8">

              {/* Category Group 1: Recharge & Pay Bills */}
              <div>
                <h3 className="text-sm font-extrabold text-[#800A1D] tracking-wider uppercase mb-4">
                  Recharge & Pay Bills
                </h3>
                <div className="flex flex-col gap-4">
                  {rechargeBillsGroup.map((service, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setIsAllMenuOpen(false);
                        navigate(service.path);
                      }}
                      className="text-[15px] font-medium text-gray-800 hover:text-[#800A1D] transition cursor-pointer py-1 block"
                    >
                      {service.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Group 2: Finance & Payouts */}
              <div>
                <h3 className="text-sm font-extrabold text-[#800A1D] tracking-wider uppercase mb-4">
                  Finance & Payouts
                </h3>
                <div className="flex flex-col gap-4">
                  {financePayoutsGroup.map((service, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setIsAllMenuOpen(false);
                        navigate(service.path);
                      }}
                      className="text-[15px] font-medium text-gray-800 hover:text-[#800A1D] transition cursor-pointer py-1 block"
                    >
                      {service.name}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Remaining blank space overlay closing trigger click layer */}
          <div className="flex-1 h-full" onClick={() => setIsAllMenuOpen(false)}></div>
        </div>
      )}
    </nav>
  );
}