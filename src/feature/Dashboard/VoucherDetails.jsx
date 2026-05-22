import React, { useState } from 'react';
// 1. Asset Imports (Vite will resolve these to URL path strings)
import {
  Zap,
  Lock,
  Headphones,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";// import "bootstrap-icons/font/bootstrap-icons.css";
import Nike from "../../../public/images/nike.png";
import { useLocation } from "react-router-dom";
import verified from "../../../public/images/verified.svg"
import thunder from "../../../public/images/Thunder.png"
import fashion from "../../../public/images/fashion.svg"
import footwear from "../../../public/images/footwear.svg"
import accessories from "../../../public/images/accesories.svg"
import cashback from "../../../public/images/cash-backlogo.svg"
import copycodeicon from "../../../public/images/Copyicon.svg";
import Bag from "../../../public/images/Myntrabag.svg";
import ticket from "../../../public/images/ticket.svg";
import wallet from "../../../public/images/wallet.svg";
import myntra from "../../../public/images/myntra.png";
import starbucks from "../../../public/images/starbucks.png";
import lock from  "../../../public/images/lock.png";
import headphones from  "../../../public/images/headphones.png";





export default function CashbackCardList() {
  const location = useLocation();
  const voucher = location.state;
  // 2. Main Categories Array (Your Offer Card Data)
  const categories = [
    {
      id: voucher?.id || 1,
      icon: voucher?.logo || "/images/nike.png",
      title: voucher?.brand || "Myntra",
      cashback: `Get ${voucher?.discount || 5}% Cashback on ${voucher?.brand || "Myntra"} Vouchers`,
      cashbackRightside: `${voucher?.discount || 5}% Cashback`,
      para:
        voucher?.brand === "Nike"
          ? "Get exclusive cashback on Nike fashion and footwear purchases using ViralPe vouchers."
          : voucher?.brand === "Starbucks"
            ? "Enjoy instant cashback on Starbucks orders and beverages using ViralPe vouchers."
            : voucher?.brand === "Trends"
              ? "Shop latest Trends fashion collections with cashback rewards from ViralPe."
              : "Get instant cashback on your Myntra purchases when you pay using this ViralPe voucher. Valid across all fashion, footwear, and accessory categories . No minimum cart required for select categories. Cashback is credited directly to your ViralPe wallet within 24 hours of a successful order delivery — no minimum cart value required for select categories. Offer applicable on both the Myntra app and website.."
    }
  ];

  // 3. Sub-tags Array (Your Fixed Tag Data Map)
  const tags = [
    {
      label: 'Fashion',
      icon: fashion
    },
    {
      label: "Footwear",
      icon: footwear,
    },
    {
      label: "Accessories",
      icon: accessories,
    },
  ];

  const vouchersData = [
    { id: 1, value: 100, savings: 5 },
    { id: 2, value: 200, savings: 10 },
    { id: 3, value: 300, savings: 15 },
    { id: 4, value: 400, savings: 200 },
    { id: 5, value: 600, savings: 90 },
  ];

  // Initialize state variable 
  const [quantities, setQuantities] = useState({});

  // Helper functions to update state cleanly
  const handleAddFirst = (id) => {
    setQuantities(prev => ({ ...prev, [id]: 1 }));
  };

  const handleIncrement = (id) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities(prev => {
      const currentQty = prev[id] || 0;
      if (currentQty <= 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: currentQty - 1 };
    });
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // FIXED: Adjusted duplicate id values to unique ids to prevent React virtual DOM errors
  const voucherData = [
    { id: 1, brand: 'Myntra', logo: Nike, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: 200, discount: 5 },
    { id: 2, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 3, brand: 'Starbucks', logo: starbucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 4, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 5, brand: 'Starbucks', logo: Nike, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 6, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 7, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
  ];

  // --- DERIVED CART DATA ---
  // Create the cart items array based on the current quantities state
  const cartItems = vouchersData
    .filter(voucher => quantities[voucher.id] > 0)
    .map(voucher => ({
      id: voucher.id,
      denomination: voucher.value,
      quantity: quantities[voucher.id]
    }));

  // Calculate total price based on selected items and their quantities
  const totalPrice = cartItems.reduce((sum, item) => sum + item.denomination * item.quantity, 0);



  const handleAddToCart = () => {
    if (cartItems.length === 0) {
      alert("Please select a voucher value first!");
      return;
    }
    console.log("Adding to cart:", cartItems);
    alert(`Added items to cart! Total: ₹${totalPrice}`);

  };

  const maxIndex = Math.max(0, voucherData.length - 4);

  const faqrData = [
    {
      id: 1,
      question: "Eligibility & Usage",
      answer: "Refunds are sent straight back to your bank account. In rare cases, your bank might take an extra 48 hours to process it."
    },
    {
      id: 2,
      question: "What if my recharge fails?",
      answer: "If your recharge fails, the amount is usually refunded to your original payment method within 3-5 business days. Please check your transaction history for the real-time status or contact our support team."
    },
    {
      id: 3,
      question: "When will I get Cashback?",
      answer: "Cashback is credited instantly to your ViralPe wallet right after a successful transaction. In rare scenarios, it might take up to 24 hours to process."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      id: 1,
      title: "Copy Code",
      description: "Copy your voucher code from ViralPe",
      icon: (
        <img src={copycodeicon} />
      )
    },
    {
      id: 2,
      title: "Shop on Myntra",
      description: "Add items to cart on Myntra App or Website",
      icon: (
        <img src={Bag} />
      )
    },
    {
      id: 3,
      title: "Apply at Checkout",
      description: "Paste the code at checkout to get discount",
      icon: (
        <img src={ticket} />
      )
    },
    {
      id: 4,
      title: "Earn Cashback",
      description: "Get 5% cashback in your ViralPe within 24 hrs",
      icon: (
        <img src={wallet} />
      )
    }
  ];


  const avatars = [
    { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100", alt: "User 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100", alt: "User 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100", alt: "User 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100", alt: "User 4" },
  ];

  return (
    <div className="min-h-screen bg-[#fbf8f8] p-4 md:p-8">
      <div className="max-w-[1240px] pt-36  mx-auto">

        {/* Main 12-Column Grid */}
        <div className="flex flex-row gap-6 items-start">

          {/* Left Column Area */}
          <div className=" col-span-12 lg:col-span-8 flex flex-col gap-6">

            {/* Voucher Card */}
            <div className="border border-transparent max-w-[700px] w-full max-h-[331px]">
              <div className=" flex flex-col font-sans">
                {/* Outer Map: Generates the main deal cards */}
                {categories.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[24px] p-6 md:p-8 w-full max-w-3xl shadow-sm border border-gray-100"
                  >
                    {/* Header row containing logo, titles, and right side badge */}
                    <div className="flex justify-between  items-start mb-6">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                          <img
                            src={item.icon}
                            alt={`${item.title} Logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div>
                          <h2 className="text-[22px] font-bold text-gray-900 leading-tight">
                            {item.title}
                          </h2>
                          <p className="text-[#a6303c] text-sm font-semibold mt-1">
                            {item.cashback}
                          </p>
                        </div>
                      </div>

                      <span className="bg-[#e8f7ee] text-[#128a59] text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                        {item.cashbackRightside}
                      </span>
                    </div>

                    {/* Description Block */}
                    <p className="text-[#6b7280] text-[15px] leading-[1.7] mb-8 font-medium">
                      {item.para}
                    </p>

                    {/* Inner Map: Generates your fixed asset pill tags */}
                    <div className=" flex flex-wrap gap-3">
                      {tags.map((tag, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-[#fcf6f6] text-[#9b2a36] px-5 py-2.5 rounded-full text-sm font-bold"
                        >
                          <img
                            src={tag.icon}
                            alt={tag.label}
                            className="w-4 h-4 object-contain"
                          />
                          <span>{tag.label}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Choose Voucher Grid Selector */}
            <div className="w-full bg-white max-w-3xl max-w-[700px]  max-h-[367px] rounded-[24px] p-6 border border-gray-100 shadow-sm">
              <h1 className='font-bold text-2xl mb-4'>Choose Your Voucher value</h1>
              <div className=" grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">

                {vouchersData.map((voucher) => {
                  const currentQty = quantities[voucher.id] || 0;

                  return (
                    <div
                      key={voucher.id}
                      className="w-full h-[123px] bg-white border border-[#9c27b0]/20 rounded-[24px] shadow-sm flex flex-col items-center justify-between p-2.5 transition-all duration-200 hover:shadow-md hover:bg-[#FFF8F8] hover:border-[#901C27] mx-auto"
                    >
                      {/* Top Section: Price and Savings Info */}
                      <div className="flex flex-col items-center text-center mt-1">
                        {/* Price */}
                        <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center tracking-tight leading-none">
                          <span className="text-lg font-medium mr-0.5">₹</span>{voucher.value}
                        </h2>
                        {/* Savings Tag */}
                        <p className="text-[11px] font-bold text-[#16a34a] mt-0.5">
                          Save ₹{voucher.savings}
                        </p>
                      </div>

                      {/* Bottom Section: Counter Controls */}
                      <div className="w-full flex justify-center mb-1">
                        {currentQty === 0 ? (
                          <button
                            onClick={() => handleAddFirst(voucher.id)}
                            className="w-full max-w-[100px] h-7 border border-[#7f1d1d]/30 text-[#7f1d1d] font-bold text-xs uppercase tracking-wider rounded-lg transition-all active:scale-95"
                          >
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center justify-between w-full px-1.5">
                            <button
                              onClick={() => handleDecrement(voucher.id)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.06)] border border-gray-100 text-gray-600 hover:bg-gray-50 active:scale-95 transition-all text-xs font-semibold"
                            >
                              —
                            </button>

                            <span className="text-base font-bold text-[#7f1d1d] min-w-[14px] text-center">
                              {currentQty}
                            </span>

                            <button
                              onClick={() => handleIncrement(voucher.id)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.06)] border border-gray-100 text-gray-600 hover:bg-gray-50 active:scale-95 transition-all text-xs font-semibold"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Alert Banner */}
            <div className="w-full max-w-[700px] bg-emerald-50 rounded-2xl flex p-4 items-center gap-3">
              <img src={cashback} alt='cashbackicon' className='w-13 h-13 object-contain shrink-0' />
              <p className='font-light text-[12px] text-gray-700 leading-relaxed'>
                Cashback is credited to your Viralpe wallet within 24 hours of order delivery. Reward points are valid for 90 days from the credit date and can be redeemed on your next purchase.
              </p>
            </div>

            {/* How It Works Grid */}
            <div className=" w-full md:w-[700px] mx-auto md:h-[229px] bg-white rounded-[24px]  border border-gray-100 shadow-sm">
              <div className="p-5">
                <h3 className="font-bold text-xl  max:w-[134px]  max:h-[55px]  ml-[28px] mb-[13px]">How it Works</h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start relative">
                  {steps.map((step, index) => (
                    <div key={step.id} className=" flex flex-col items-center text-center relative group ">

                      {/* Icon Wrapper Box */}
                      <div className="flex items-center justify-center  rounded-2xl p-4  mb-2  group-hover:scale-105">
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-bold text-gray-800 mb-2 tracking-wide">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-xs leading-relaxed max-w-[210px]">
                        {step.description}
                      </p>

                      {/* Dotted Arrow Connector (Hidden on last step and hidden on mobile layouts) */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-8 -right-4 translate-x-1/2 z-10 pointer-events-none">
                          <svg className="w-14 h-4 text-rose-800" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" viewBox="0 0 48 16">
                            <path d="M0 8H44M44 8L38 2M44 8L38 14" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accordion List Block */}
            <div className=" md:w-[700px] h-[592px] bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm flex flex-col gap-4">

              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black  mt-[23px] ml-[27px] tracking-tight">
                Terms & Conditions
              </h2>

              <div className="flex flex-col border-t border-gray-100 ml-4 sm:ml-13.5 mr-4 sm:mr-26.5">
                {faqrData.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={item.id}
                      className="border-b border-gray-100 py-5 sm:py-6 transition-all duration-300"
                    >

                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center text-left gap-4 group"
                      >
                        <span className="text-base sm:text-lg md:text-xl font-bold text-gray-950 group-hover:text-[#901C27] transition-colors">
                          {item.question}
                        </span>

                        <svg
                          className={`w-4 h-4 text-[#901C27] shrink-0 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Accordion Content Panel */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed md:max-w-4xl">
                            {item.answer}
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Sidebar Area */}
          <div className="col-span-12 lg:col-span-4 flex flex-col   gap-6">

            {/* Sticky Summary Card */}
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm lg:top-6">
              <div className="max-w-[494px] max-h-[418px]  w-full rounded-2xl shadow-lg border border-gray-100 p-6 font-sans">
                {/* Title */}
                <h2 className="text-[24px] font-semibold mb-3">Order Summary</h2>

                {/* Main Brand and Total Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shadow-sm">
                      <img
                        src={categories[0]?.icon}
                        alt={categories[0]?.title}
                        className="w-full h-full object-contain p-1"
                      />                              </div>
                    <h3 className="text-lg font-bold text-gray-900"> {categories[0]?.title}</h3>
                  </div>
                  <div className="text-xl font-bold text-gray-900">₹ {totalPrice}</div>
                </div>

                {/* Denominations & Quantity Selectors (Mapped from Derived State) */}
                <div className="border-b border-gray-100 pb-5 mb-5 space-y-4">
                  {cartItems.length > 0 ? (
                    cartItems.map(item => (
                      <div key={item.id} className="space-y-2">
                        {/* Denomination Row */}
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">Denomination</span>
                          <span className="text-gray-500 font-medium">₹ {item.denomination}</span>
                        </div>

                        {/* Quantity Row */}
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">Qty.</span>
                          <div className="flex items-center gap-3.5">
                            {/* Minus Button (Re-using the shared Decrement function) */}
                            <button
                              onClick={() => handleDecrement(item.id)}
                              className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 font-medium transition-colors"
                            >
                              −
                            </button>
                            {/* Quantity Display */}
                            <span className="text-[15px] font-bold text-red-700 min-w-[12px] text-center">
                              {item.quantity}
                            </span>
                            {/* Plus Button (Re-using the shared Increment function) */}
                            <button
                              onClick={() => handleIncrement(item.id)}
                              className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 font-medium transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-400 text-sm py-4">
                      No vouchers selected yet. <br /> Choose a value to continue.
                    </div>
                  )}
                </div>

                {/* Primary Action Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#8c1d26] hover:bg-[#70161e] text-white py-3.5 rounded-lg text-base font-semibold transition-colors shadow-sm mb-5"
                >
                  Add to Cart
                </button>

                {/* Trust Badges Footer */}
                <div className="flex justify-between items-center text-[13px] text-gray-500 font-medium px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 text-xs"><img className="h-[15px] w-[15px]" src={lock} /> </span> 100% Secure Payments
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 text-sm"><img className="h-[15px] w-[15px]" src={thunder} /></span> Instant Code Delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Perks Panel */}
            <div className="rounded-[24px]">
              <div className="w-full h-[409px] w-[494px] bg-white rounded-[28px] border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950 mb-5">
                  Why Buy from <span className="text-[#8A1C24]">ViralPe</span>?
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                      <ShieldCheck className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">100% Verified Offers</h4>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">Every voucher is validated before listing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                      <Zap className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Instant Code Delivery</h4>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">Code delivered to your wallet immediately</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                      <Lock className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Secure Payments</h4>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">256-bit SSL encrypted transactions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                      <Headphones className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">24/7 Customer Support</h4>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">Help available round the clock</p>
                    </div>
                  </div>
                  <div className="border-t border-dashed border-gray-300 pt-4 mt-2 flex flex-row items-center justify-between sm:justify-start gap-2 sm:gap-4 bg-white p-2 sm:p-3 rounded-lg select-none font-sans w-full">

                    {/* Overlapping Avatar Group - Scaled down slightly on mobile */}
                    <div className="flex items-center shrink-0">
                      {avatars.map((avatar, index) => (
                        <img
                          key={avatar.id}
                          src={avatar.src}
                          alt={avatar.alt}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white -mr-2 sm:-mr-3 last:mr-0 shadow-sm hover:translate-y-[-2px] hover:z-10 transition-transform duration-200 ease-in-out"
                          style={{ zIndex: index }}
                        />
                      ))}
                    </div>

                    {/* Trust Text - Uses flex-1 to take up middle space evenly */}
                    <p className="text-[#1a1a1a] text-[11px] sm:text-[15px] font-medium text-center sm:text-left flex-1 px-1 leading-tight">
                      Trusted by <span className="text-[#8A1521] font-bold">50,000+</span> users
                    </p>

                    {/* Rating Group - Pushed to the right */}
                    <div className="flex items-center gap-1 justify-end sm:ml-auto shrink-0">
                      <span className="text-[#FFB800] text-sm sm:text-lg leading-none">★</span>
                      <span className="text-[#8A1521] font-bold text-[12px] sm:text-[15px]">(4.8)</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>



          </div>

        </div>

        {/* Dynamic Items Carousel Base */}
        <div className="mt-12 bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm  max-w-[1222px] w-full">
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-bold text-gray-900'>You May Also Like</h1>
            <button className="text-[#901C27] font-semibold flex items-center   transition-colors">
              View More <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          {/* Main Carousel Wrapper (Centered Layout with Side Arrows Displaying Exactly 4 Cards Max) */}
          <div className=" flex items-center gap-5  justify-center">

            {/* Left Arrow Button */}
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={` w-9 h-9 rounded-full border flex items-center justify-center transition-all shrink-0 shadow-sm
    ${currentIndex === 0
                  ? "border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50/50"
                  : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50"
                }`}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Sliding Mask Window Container */}
            <div className="  max-w-[1197px] w-full overflow-hidden px-0.5 py-1">
              {/* FIXED: Shifted from structural grid layout to inline flex-row block layout for smooth card sliding math */}
              <div
                className="flex flex-row gap-4 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * (217 + 16)}px)` }}
              >
                {voucherData.map((voucher) => (
                  <div
                    key={voucher.id}
                    className="bg-white rounded-3xl border border-gray-100/70 pt-6 p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center relative h-[204px] w-[217px] shrink-0"
                  >
                    {/* Cashback Header Badges */}
                    {!voucher.noHeaderTag && (
                      <div className={`absolute top-0 left-0 text-[10px] font-bold px-3 py-1 rounded-br-xl rounded-tl-2xl shadow-xs tracking-tight
                        ${voucher.isPromo
                          ? 'bg-[#EBF3FF] text-blue-700 border-b border-r border-blue-100'
                          : 'bg-[#EAFDF3] text-[#149B52]'
                        }`}
                      >
                        {voucher.tag}
                      </div>
                    )}

                    {/* Main Brand Logo Display Sphere */}
                    <div className="flex items-center justify-center my-auto">
                      <img
                        src={voucher.logo}
                        alt={voucher.brand}
                        className="h-[73.69px] w-[85.48px] object-contain"
                      />
                    </div>

                    {/* Brand Name Text */}
                    <h3 className="text-[15px] font-bold text-gray-900 mt-[7.72px]">{voucher.brand}</h3>

                    {/* Fixed Pricing Baseline Text */}
                    <p className="text-[11px] font-medium text-gray-400">Price: ₹{voucher.price}</p>

                    {/* Decorative Separator Line */}
                    <div className="w-full border-t border-dashed border-gray-100 my-1 mt-[13.7px]" />

                    {/* Footer Metadata Stats */}

                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={() =>
                setCurrentIndex(prev => Math.min(voucherData.length - 4, prev + 1))
              }
              disabled={currentIndex >= voucherData.length - 4}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all shrink-0 shadow-sm
    ${currentIndex >= voucherData.length - 4
                  ? "border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50/50"
                  : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50 active:scale-95"
                }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Global Banner Strip */}
        <div className='w-full max-w-[1240px] flex flex-col md:flex-row border border-red-100 gap-6 items-start md:items-center justify-around mt-8 p-6 bg-[#FFEDEE] rounded-2xl shadow-xs'>


          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
              <Lock className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Secure Payments</h4>
              <p className="text-[14px] font-medium text-[#1C1B1BCC] mt-0.5">256-bit SSL encrypted transactions</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
              <Zap className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Instant Code Delivery</h4>
              <p className="text-[11px] font-medium text-gray-400 mt-0.5">Code delivered to your wallet immediately</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
              <Headphones className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">24/7 Customer Support</h4>
              <p className="text-[14px] font-medium text-[#1C1B1BCC] mt-0.5">Help available round the clock</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">
                Trusted By 1M+ Users
              </h4>

              <p className="text-[14px] font-medium text-[#1C1B1BCC] mt-0.5">
                Active daily consumers
              </p>

              <div className="flex items-center gap-1 mt-2">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />

                <span className="ml-1 text-[12px] font-semibold text-[#8A1C24]">
                  4.8/5
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}