import { useNavigate } from "react-router-dom";
import { useState } from "react";
import vouchers from "../../public/images/vouchers.svg"
import moneyreceive from "../../public/images/money-receive.svg";
import moneysend from "../../public/images/money-send.svg";
import dthicon from "../../public/images/dthicon.svg";
import fastagicon from "../../public/images/fasttag.svg";
import refer from "../../public/images/refericon.svg";
import transcations from "../../public/images/transcations.svg";


import { 
  Menu, 
  Search, 
  Bell, 
  MapPin, 
  ChevronDown, 
  Ticket, 
  Smartphone, 
  Satellite, 
  Car, 
  Gift, 
  FileText 
} from "lucide-react";
import logo from "../../public/images/logo.png"; 

export default function UserNavbar() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Bottom row menu items - Added 'path' for navigation
  const secondaryNavItems = [
    { name: "All", icon: <Menu size={18} />, path: "/all-services" },
    { name: "Vouchers",
      icon: <img src={vouchers} alt="Vouchers" className="w-[20px] h-[20px]" />,
    path: "/Vouchers" },
    {
       name: "Prepaid Recharge",
    icon: <img src={moneyreceive} alt="Vouchers" className="w-[20px] h-[20px]" />,
    path: "/prepaid" },
    { name: "Postpaid Recharge", 
      icon: <img src={moneysend} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/postpaid" },
    { name: "DTH Recharge", 
           icon: <img src={dthicon} alt="Vouchers" className="w-[20px] h-[20px]" />,

      path: "/dth" },
    { name: "FASTag Recharge", 
           icon: <img src={fastagicon} alt="Vouchers" className="w-[20px] h-[20px]" />,

      path: "/fastag" },
    { name: "Refer & Earn", 
                icon: <img src={refer} alt="Vouchers" className="w-[20px] h-[20px]" />,

       path: "/refer-and-earn" },
    { name: "Transactions", 
           icon: <img src={transcations} alt="Vouchers" className="w-[20px] h-[20px]" />,
      path: "/transactions" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm font-sans">
      
      {/* --- TOP ROW --- */}
      {/* Added lg:px-[115px] to match your requested padding on large screens */}
      <div className="px-6 md:px-10 lg:px-[115px] py-3 flex items-center justify-between">
        
        {/* Left Side: Logo & Greeting */}
        <div className="flex items-center gap-6">
          <div className="cursor-pointer" onClick={() => navigate("/dashboard")}>
            <img src={logo} alt="logo" className="w-[60px] h-[60px] object-contain" />
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
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search brands like Myntra, Nike..." 
              className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded-full py-[10px] pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
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
                S
              </div>
              <ChevronDown size={16} className="text-gray-500" />
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
      {/* Restored the blue color and made it full width */}
      <div className="w-full h-[4px] "></div>

     
      <div className="px-6 md:px-10 lg:px-[115px] py-4 bg-white overflow-x-auto hide-scrollbar border-b border-gray-100">
        
        {/* ADDED gap-[39px] here to create the specific spacing between items */}
        <div className="flex items-center gap-[39px] min-w-max">
          {secondaryNavItems.map((item, index) => (
            <div 
              key={index} 
              onClick={() => navigate(item.path)} 
              className="flex items-center gap-2 text-gray-600 hover:text-[#961a20] cursor-pointer transition-colors"
            >
              <span className="text-[#961a20] opacity-80">{item.icon}</span>
              <span className="font-medium text-[15px] whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}