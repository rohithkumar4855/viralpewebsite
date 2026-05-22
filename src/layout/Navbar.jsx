import UserNavbar from "./UserNavbar";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../../public/images/logo.png";
import MoneyReceive from "../../public/images/money-receive.png";
import dthicon from "../../public/images/dthicon.png";
import fastagicon from "../../public/images/fastagicon.png";
import { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  // 2. Listen for the custom event to update the navbar instantly
 useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      // console.log("Navbar checking auth! Status is:", status); 
    };

    window.addEventListener("authChange", handleAuthChange);
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  
  if (location.pathname === "/login-user") {
    return null;
  }


  if (isLoggedIn) {
    return <UserNavbar/>;
  }

  
  // Navigation Items
  const navItems = [
    {
      title: "Recharge & Bills",
      icon: MoneyReceive,
      menu: [
        { name: "Prepaid Recharge", icon: <img src={MoneyReceive} alt="Prepaid" className="w-5 h-5 object-contain" /> },
        { name: "Post Paid Recharge", icon: <img src={MoneyReceive} alt="Postpaid" className="w-5 h-5 object-contain" /> },
        { name: "DTH Recharge", icon: <img src={dthicon} alt="DTH" className="w-5 h-5 object-contain" /> },
        { name: "FASTag", icon: <img src={fastagicon} alt="FASTag" className="w-[25.8px] h-[24.36px] object-contain" /> },
      ],
    },
    {
      title: "Services",
      icon: MoneyReceive,
      isMegaMenu: true,
      columns: [
        [
          { name: "Prepaid Recharge", icon: <img src={MoneyReceive} alt="Prepaid" className="w-5 h-5 object-contain" /> },
          { name: "Post Paid Recharge", icon: <img src={MoneyReceive} alt="Postpaid" className="w-5 h-5 object-contain" /> },
          { name: "DTH Recharge", icon: <img src={dthicon} alt="DTH" className="w-5 h-5 object-contain" /> },
          { name: "FASTag", icon: <img src={fastagicon} alt="FASTag" className="w-[25.8px] h-[24.36px] object-contain" /> },
          { type: "header", name: "VOUCHERS" },
          { name: "Gift Vouchers", icon: <img src={fastagicon} alt="Gift Vouchers" className="w-[25.8px] h-[24.36px] object-contain" /> },
        ],
        [
          { type: "header", name: "BILL PAYMENTS" },
          { name: "Electricity", icon: <img src={MoneyReceive} alt="Electricity" className="w-5 h-5 object-contain" /> },
          { name: "Water", icon: <img src={MoneyReceive} alt="Water" className="w-5 h-5 object-contain" /> },
          { name: "Broadband", icon: <img src={dthicon} alt="Broadband" className="w-5 h-5 object-contain" /> },
          { name: "LPG Gas", icon: <img src={fastagicon} alt="LPG Gas" className="w-[25.8px] h-[24.36px] object-contain" /> },
          { name: "Piped Gas", icon: <img src={fastagicon} alt="Piped Gas" className="w-[25.8px] h-[24.36px] object-contain" /> },
          { name: "Insurance", icon: <img src={fastagicon} alt="Insurance" className="w-[25.8px] h-[24.36px] object-contain" /> },
          { name: "Loan Payment", icon: <img src={fastagicon} alt="Loan Payment" className="w-[25.8px] h-[24.36px] object-contain" /> },
        ]
      ]
    },
    {
      title: "Referral",
    },
    {
      title: "Company",
      menu: [
        { name: "About Us", icon: <img src={MoneyReceive} alt="Prepaid" className="w-5 h-5 object-contain" /> },
        { name: "Contact Us", icon: <img src={MoneyReceive} alt="Postpaid" className="w-5 h-5 object-contain" /> },
        { name: "Management ", icon: <img src={MoneyReceive} alt="DTH" className="w-5 h-5 object-contain" /> },
        { name: "Branches", icon: <img src={dthicon} alt="FASTag" className="w-[25.8px] h-[24.36px] object-contain" /> },
        { name: "Coverage", icon: <img src={fastagicon} alt="FASTag" className="w-[25.8px] h-[24.36px] object-contain" /> },
      ]
    },
    {
      title: "Vendors",
      menu: [
        { name: "Retail", hasArrow: true },
        { name: "Health Care", hasArrow: true },
        { name: "Transportation & Logistics", hasArrow: true },
        { name: "Professional Services", hasArrow: true },
        { name: "Food & Beverages", hasArrow: true },
        { name: "Financial Services", hasArrow: true },
        { name: "Entertainment& Lifestyle", hasArrow: true },
        { name: "Education", hasArrow: true },
      ]
    },
  ];

  // return (
    
  //   <nav className="fixed top-0 left-0 w-full px-10 flex items-center justify-between md:justify-evenly bg-white z-50 shadow-md">
  //     <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
  //       <img src={logo} alt="ViralPe Logo" className="w-[90.84px] h-[90.84px]" />
  //       <h1 className="text-(--primary-red) text-[26px] font-semibold">ViralPe</h1>
  //     </div>

  //     {/* Desktop Navigation */}
  //     <div className="hidden md:flex items-center gap-10">
  //       {navItems.map((item, index) => (
  //         <div
  //           key={index}
  //           className="relative flex flex-col items-center"
  //           onMouseEnter={() => setOpenDropdown(index)}
  //           onMouseLeave={() => setOpenDropdown(null)}
  //         >
  //           {/* Nav Item Wrapper */}
  //           <div className="flex flex-col items-center gap-1 cursor-pointer py-4">
  //             <div className="flex items-center gap-[6px] text-[18px] text-(--primary-red) font-medium">
  //               {item.title}
  //               {(item.menu || item.isMegaMenu) && (
  //                 <ChevronDown
  //                   size={18}
  //                   className={`transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`}
  //                 />
  //               )}
  //             </div>
  //             {/* Active underline */}
  //             <div
  //               className={`h-[4px] bg-(--primary-red) rounded-full transition-all duration-300 absolute bottom-[6px] ${openDropdown === index ? "w-[60%]" : "w-0"
  //                 }`}
  //             ></div>
  //           </div>

  //           {/* Dropdown UI logic */}
  //           {openDropdown === index && (
  //             <>
  //               {/* 1. Standard Menu Rendering */}
  //               {item.menu && !item.isMegaMenu && (
  //                 <div className="absolute top-[85%] left-1/2 -translate-x-1/2 mt-3 min-w-[260px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-2 z-50">
  //                   <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm shadow-[-4px_-4px_10px_rgb(0,0,0,0.04)]"></div>
  //                   <div className="relative z-10 bg-white rounded-2xl flex flex-col py-1">
  //                     {item.menu.map((menuItem, i) => {
  //                       const isObject = typeof menuItem === "object";
  //                       return (
  //                         <div
  //                           key={i}
  //                           onClick={() => {
  //                             if (isObject) {
  //                               if (menuItem.name.trim() === "About Us") {
  //                                 navigate("/about-us");
  //                                 setOpenDropdown(null);
  //                               }
  //                               if (menuItem.name.trim() === "Contact Us") {
  //                                 navigate("/about-us");
  //                                 setOpenDropdown(null);
  //                               }
  //                                if (menuItem.name.trim() === "Management") {
  //                                 navigate("/management");
  //                                 setOpenDropdown(null);
  //                               }
                                
  //                             }
  //                           }}
  //                           className="flex items-center justify-between px-6 py-[14px] hover:bg-[#FFEDEE] cursor-pointer transition-colors min-w-[140px]"
  //                         >
  //                           <div className="flex items-center gap-4">
  //                             {isObject && menuItem.icon}

  //                             <span className="text-gray-900 font-medium text-[16px] whitespace-nowrap">
  //                               {isObject ? menuItem.name : menuItem}
  //                             </span>
  //                           </div>

  //                           {isObject && menuItem.hasArrow && (
  //                             <ChevronRight
  //                               size={18}
  //                               className="text-gray-800 flex-shrink-0"
  //                               strokeWidth={2.5}
  //                             />
  //                           )}
  //                         </div>
  //                       );
  //                     })}
  //                   </div>
  //                 </div>
  //               )}

  //               {/* 2. Mega Menu Rendering */}
  //               {item.isMegaMenu && (
  //                 <div className="absolute top-[85%] left-1/2 -translate-x-1/2 mt-3 min-w-[560px] bg-white rounded-b-2xl shadow-[0_20px_40px_rgb(0,0,0,0.15)] z-50">
  //                   <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00a3ff]"></div>
  //                   <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45  z-10"></div>
  //                   <div className="relative z-20 bg-white rounded-b-2xl flex gap-12 px-10 py-6">
  //                     {item.columns.map((col, colIndex) => (
  //                       <div key={colIndex} className="flex-1 flex flex-col">
  //                         {col.map((link, i) => (
  //                           link.type === "header" ? (
  //                             <h4 key={i} className={`text-[12px] font-bold text-(--primary-red) uppercase tracking-wide mb-2 ${i !== 0 ? 'mt-6' : ''}`}>
  //                               {link.name}
  //                             </h4>
  //                           ) : (
  //                             <div key={i} className="flex items-center gap-4 py-[10px] hover:bg-[#FFEDEE] cursor-pointer transition-colors rounded-lg -mx-2 px-2">
  //                               <div className="flex items-center justify-center w-6 h-6">{link.icon}</div>
  //                               <span className="text-black font-medium text-[15px]">{link.name}</span>
  //                             </div>
  //                           )
  //                         ))}
  //                       </div>
  //                     ))}
  //                   </div>
  //                 </div>
  //               )}
  //             </>
  //           )}
  //         </div>
  //       ))}
  //     </div>

  //     {/* Desktop Login */}

  //     <button
  //       onClick={() => {
  //         // 1. Set login state
  //         localStorage.setItem("isLoggedIn", "true");
  //         // 2. Tell the Navbar to change immediately
  //         window.dispatchEvent(new Event("authChange"));
  //         // 3. Navigate to the new screen (e.g., Dashboard or Home)
  //         navigate("/login-user"); 
  //       }}
  //       className="hidden md:block font-semibold py-[12px] px-[24px] bg-(--primary-red) text-white cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
  //     >
  //       Login
  //     </button>

  //     {/* Mobile Hamburger */}
  //     <button className="md:hidden text-(--primary-red)" onClick={() => setIsOpen(!isOpen)}>
  //       {isOpen ? <X size={30} /> : <Menu size={30} />}
  //     </button>

  //     {/* Mobile Menu */}
  //     {isOpen && (
  //       <div className="absolute top-[90.84px] left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-6 gap-6 h-screen overflow-y-auto pb-32">
  //         {navItems.map((item, index) => (
  //           <div key={index}>
  //             <div className="flex items-center justify-between text-(--primary-red) text-lg font-medium">
  //               {item.title}
  //             </div>

  //             {/* Mobile Rendering for Standard Menu */}
  //             {item.menu && !item.isMegaMenu && (
  //               <div className="flex flex-col gap-2 mt-3 pl-3">
  //                 {item.menu.map((menuItem, i) => {
  //                   const isObject = typeof menuItem === "object";
  //                   return (
  //                     <div key={i} 
  //                       onClick={() => {
  //                         if (isObject) {
  //                           if (menuItem.name.trim() === "About Us") {
  //                             navigate("/about-us");
  //                             setIsOpen(false);
  //                           }
  //                           if (menuItem.name.trim() === "Contact Us") {
  //                             navigate("/about-us");
  //                             setIsOpen(false);
  //                           }
  //                         }
  //                       }}
  //                       className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-lg"
  //                     >
  //                       {isObject ? menuItem.icon : (item.icon && <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />)}
  //                       <p className="font-medium text-gray-800">{isObject ? menuItem.name : menuItem}</p>
  //                     </div>
  //                   );
  //                 })}
  //               </div>
  //             )}

  //             {/* Mobile Rendering for Mega Menu */}
  //             {item.isMegaMenu && (
  //               <div className="flex flex-col gap-1 mt-3 pl-3">
  //                 {item.columns.flat().map((link, i) => (
  //                   link.type === "header" ? (
  //                     <h4 key={i} className="text-[12px] font-bold text-gray-400 uppercase tracking-wide mt-4 mb-1">
  //                       {link.name}
  //                     </h4>
  //                   ) : (
  //                     <div key={i} className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-lg">
  //                       {link.icon}
  //                       <p className="font-medium text-gray-800">{link.name}</p>
  //                     </div>
  //                   )
  //                 ))}
  //               </div>
  //             )}
  //           </div>
  //         ))}

  //         <button className="font-semibold py-4 px-6 bg-(--primary-red) text-white rounded-lg mt-4">
  //           Login
  //         </button>
  //       </div>
  //     )}
  //   </nav>
  // );



return (
  <>
    {/* Black Overlay */}
    {openDropdown !== null && (
      <div className="fixed inset-0 bg-black/50  z-40"></div>
    )}

    <nav className="fixed top-0 left-0 w-full px-10 flex items-center justify-between md:justify-evenly bg-white z-50 shadow-md">
      
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="ViralPe Logo"
          className="w-[90.84px] h-[90.84px]"
        />
        <h1 className="text-(--primary-red) text-[26px] font-semibold">
          ViralPe
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* Nav Item Wrapper */}
            <div className="flex flex-col items-center gap-1 cursor-pointer py-4">
              <div className="flex items-center gap-[6px] text-[18px] text-(--primary-red) font-medium">
                {item.title}

                {(item.menu || item.isMegaMenu) && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Active underline */}
              <div
                className={`h-[4px] bg-(--primary-red) rounded-full transition-all duration-300 absolute bottom-[6px] ${
                  openDropdown === index ? "w-[60%]" : "w-0"
                }`}
              ></div>
            </div>

            {/* Dropdown UI logic */}
            {openDropdown === index && (
              <>
                {/* Standard Menu */}
                {item.menu && !item.isMegaMenu && (
                  <div className="absolute top-[85%] left-1/2 -translate-x-1/2 mt-3 min-w-[260px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-2 z-50">
                    <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm shadow-[-4px_-4px_10px_rgb(0,0,0,0.04)]"></div>

                    <div className="relative z-10 bg-white rounded-2xl flex flex-col py-1">
                      {item.menu.map((menuItem, i) => {
                        const isObject = typeof menuItem === "object";

                        return (
                          <div
                            key={i}
                            onClick={() => {
                              if (isObject) {
                                if (menuItem.name.trim() === "About Us") {
                                  navigate("/about-us");
                                  setOpenDropdown(null);
                                }

                                if (menuItem.name.trim() === "Contact Us") {
                                  navigate("/about-us");
                                  setOpenDropdown(null);
                                }

                                if (menuItem.name.trim() === "Management") {
                                  navigate("/management");
                                  setOpenDropdown(null);
                                }
                              }
                            }}
                            className="flex items-center justify-between px-6 py-[14px] hover:bg-[#FFEDEE] cursor-pointer transition-colors min-w-[140px]"
                          >
                            <div className="flex items-center gap-4">
                              {isObject && menuItem.icon}

                              <span className="text-gray-900 font-medium text-[16px] whitespace-nowrap">
                                {isObject ? menuItem.name : menuItem}
                              </span>
                            </div>

                            {isObject && menuItem.hasArrow && (
                              <ChevronRight
                                size={18}
                                className="text-gray-800 flex-shrink-0"
                                strokeWidth={2.5}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Mega Menu */}
                {item.isMegaMenu && (
                  <div className="absolute top-[85%] left-1/2 -translate-x-1/2 mt-3 min-w-[560px] bg-white rounded-b-2xl shadow-[0_20px_40px_rgb(0,0,0,0.15)] z-50">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00a3ff]"></div>

                    <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 z-10"></div>

                    <div className="relative z-20 bg-white rounded-b-2xl flex gap-12 px-10 py-6">
                      {item.columns.map((col, colIndex) => (
                        <div
                          key={colIndex}
                          className="flex-1 flex flex-col"
                        >
                          {col.map((link, i) =>
                            link.type === "header" ? (
                              <h4
                                key={i}
                                className={`text-[12px] font-bold text-(--primary-red) uppercase tracking-wide mb-2 ${
                                  i !== 0 ? "mt-6" : ""
                                }`}
                              >
                                {link.name}
                              </h4>
                            ) : (
                              <div
                                key={i}
                                className="flex items-center gap-4 py-[10px] hover:bg-[#FFEDEE] cursor-pointer transition-colors rounded-lg -mx-2 px-2"
                              >
                                <div className="flex items-center justify-center w-6 h-6">
                                  {link.icon}
                                </div>

                                <span className="text-black font-medium text-[15px]">
                                  {link.name}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Login */}
      <button
        onClick={() => {
          localStorage.setItem("isLoggedIn", "true");
          window.dispatchEvent(new Event("authChange"));
          navigate("/login-user");
        }}
        className="hidden md:block font-semibold py-[12px] px-[24px] bg-(--primary-red) text-white cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
      >
        Login
      </button>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-(--primary-red)"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[90.84px] left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-6 gap-6 h-screen overflow-y-auto pb-32">
          {/* mobile menu content */}
        </div>
      )}
    </nav>
  </>
);}