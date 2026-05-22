import React, { useState } from "react";
import { Search, Info, MessageSquare } from "lucide-react";
import Axis from "../../../public/images/Axis.svg";
import Bajaj from "../../../public/images/Bajaj.svg";
import icic from "../../../public/images/iciclogo.svg";
import idfc from "../../../public/images/idfclogo.svg";
import Thunder from "../../../public/images/Thunder.png"
import discount from "../../../public/images/Discount.svg"
import Wallet from "../../../public/images/wallet.svg"
import lock from "../../../public/images/Lock.png"
import Gift from "../../../public/images/Gift.svg"
import headphones from "../../../public/images/earphones.svg"

// Mock Data for Banks List
const banksData = [
    { id: 1, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 2, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 3, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 4, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 5, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 6, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 7, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 8, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 9, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 10, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 11, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 12, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 13, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 14, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 15, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },

];
const feature1 = [
    {
        id: "secure-payments",
        title: "100% Secure Payments",
        description: "256-bit SSL Encrypted",
        icon: '/images/lock.png',
        isRating: false,
    },
    {
        id: "instant-delivery",
        title: "Instant Code Delivery",
        description: "Get Vouchers In Seconds",
        icon: '/images/Thunder.png',
        isRating: false,
    },
    {
        id: "customer-support",
        title: "24/7 Customer Support",
        description: "Help available round the clock",
        icon: '/images/Headphones.png',
        isRating: false,
    },
    {
        id: "trusted-users",
        title: "Trusted By 1M+ Users",
        description: "4.8/5",
        icon: '/images/Vector.svg',
        isRating: true,
    },
];
const ReachargeOn = [
    { title: 'Instant Recharge', desc: 'Recharge in just a seconds', icon: Thunder },
    { title: 'Best Plans', desc: 'Compare and choose the best plans', icon: discount },
    { title: 'Earn Cashback', desc: 'Earn cashback on every recharge', icon: Wallet },
    { title: 'Secure Payments', desc: '256-bit SSL encrypted transactions', icon: lock },
];
const renderIcon = (icon) => {
    return (
        <img
            src={icon}
            alt="icon"
            className="w-8.5 h-8.5 object-contain"
        />
    );
};

export default function FastagRecharge() {
    const [searchQuery, setSearchQuery] = useState("");

    const features = [
        { title: "Instant Activation", desc: "Recharge in just a few seconds", icon: "⚡" },
        { title: "Earn Cashback", desc: "Earn cashback on every recharge", icon: "👛" },
        { title: "Secure Payments", desc: "256-bit SSL encrypted transactions", icon: "🔒" },
        { title: "24/7 Customer Support", desc: "We're here to help anytime", icon: "🎧" },
    ];

    // Filter banks based on search input
    const filteredBanks = banksData.filter((bank) =>
        bank.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pt-36 mt-15 bg-gray-50/50 min-h-screen p-4 md:p-8 font-sans text-gray-800">
            <div className="max-w-[1207px] w-full mx-auto flex justify-between mx-auto gap-8">
                <div className=" max-w-[837px] max-h-[847px] w-full">

                    {/* Form Container */}
                    <div className="bg-white p-6  rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">FASTag Recharge</h2>
                            <button className="flex items-center gap-1.5 text-xs bg-[#fff0f2] text-[#6F0014] px-3 py-1.5 rounded-full font-semibold border border-rose-100">
                                <Info size={14} />
                                <span>How to find FASTag bank?</span>
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Bank</label>
                                <input
                                    type="text"
                                    placeholder="Enter Bank Name"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-50 focus:border-red-400 transition"
                                />
                            </div>

                            <div className="flex justify-center pt-2">
                                <button className="bg-[#6F0014] text-white font-bold py-3 px-16 rounded-xl hover:bg-[#52010f] transition-colors cursor-pointer w-full sm:w-auto">
                                    Confirm
                                </button>
                            </div>
                        </div>

                        <hr className="border-t border-gray-200 my-6" />

                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Banks</h3>

                            {/* Search Bank */}
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search for a Bank"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-50 focus:border-red-400 transition"
                                />
                            </div>
                        </div>

                        {/* Banks Card Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            {filteredBanks.map((bank, index) => (
                                <div
                                    key={index}
                                    className=" border border-[#ffffff] shadow rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer max-w-[128px] max-h[139px] gap-6"
                                >
                                    <img
                                        src={bank.logo}
                                        alt={bank.name}
                                        className="w-[92px] h-[62px] object-contain mx-auto  mb-2"
                                    />
                                    <span className="text-[11px] font-bold text-[#069341] bg-emerald-50 px-2 py-1 rounded-md w-full whitespace-nowrap">
                                        {bank.cb}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Banks Grid Container */}


                </div>

                <div className="space-y-6">



                    <div className="bg-white max-w-[348px] max-h-[260px] p-4 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold mb-4">Why Recharge On ViralPe?</h3>
                        <div className="space-y-4">
                            {ReachargeOn.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0">
                                        <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold">{item.title}</h4>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Card 2: Marketing Offer Banner */}
                    <div className="bg-[#FFEDEE] p-6 rounded-2xl shadow-sm border border-rose-100 relative overflow-hidden flex flex-row items-center justify-between min-h-[140px]">
                        <div className=" max-w-[60%]">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight">Extra 5% Cashback</h3>
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                On DTH Recharge of ₹500 or more
                            </p>
                            <span className="text-[9px] text-gray-400 block mt-4 font-medium">*T&C Apply</span>
                        </div>
                        {/* Gift Box Icon / Graphic Container */}
                        <div className="text-4xl filter drop-shadow-md pr-2">
                            <img src={Gift}/>
                        </div>
                    </div>

                    {/* Card 3: Support Help Block */}
                    <div className="max-h-[151px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col  ">
                       <div className="flex gap-7">
                        <div>
                        <img src={headphones} className="w-[51px] h-[50px]"/>
                        </div>

                        <div>
                        <h4 className="text-base font-bold text-gray-900">Need Help?</h4>
                        <p className="text-xs text-gray-500 mt-1 max-w-[200px]">
                            Chat with our support teams
                        </p>
                        <button className="mt-5 border border-[#6F0014] text-[#6F0014] font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-rose-50/50 transition flex items-center gap-2 cursor-pointer">
                            <MessageSquare size={16} />
                            <span>Chat Now</span>
                        </button>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="max-w-[1210px] max-h-[118px] rounded-[24px] mt-[32px] bg-[#FFEDEE] px-1 py-8 md:px-8 lg:px-16 mx-auto  gap-6">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 ">
                    {feature1.map((feature) => (

                        <div key={feature.id} className="flex items-center gap-4 min-w-0 ">
                            {/* Icon Box */}
                            <div className="flex h-11.75 w-11.75 flex-shrink-0 items-center justify-center rounded-[18px] bg-white text-[#8C1822] shadow-sm">
                                {renderIcon(feature.icon)}
                            </div>

                            {/* Text */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-[16px] font-semibold text-(--primary-red)">
                                    {feature.title}
                                </h3>

                                {feature.isRating ? (
                                    <div className="mt-1 flex items-center gap-1">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className="h-4 w-4 fill-current text-yellow-400"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}

                                        <span className="ml-1 text-[14px] text-[#1C1B1BCC]">
                                            {feature.description}
                                        </span>
                                    </div>
                                ) : (
                                    <p className="mt-1 text-sm text-[#1C1B1BCC]">
                                        {feature.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}