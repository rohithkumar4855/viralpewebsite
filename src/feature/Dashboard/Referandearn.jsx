import React from 'react';
import {
  Share2,
  Copy,
  Users,
  CheckCircle,
  Wallet,
  ChevronRight,
  Clock,
  Gift
} from 'lucide-react';
import Refer from "/images/refer.svg"
import referopenbox from "/images/referopenbox.svg";

export default function ReferAndEarnFlex() {

  // Mock Data
  const referralCode = "VIRALPE2026";
  const referralLink = "https://viralpe.app.link.Viralpe";

  const myReferrals = [
    { id: 1, name: "Arun Kumar", phone: "+91 90000 00000", date: "02 May 2026, 10:30 AM", amount: "₹25", status: "Earned" },
    { id: 2, name: "Bhavna Singh", phone: "+91 91000 11111", date: "03 May 2026, 11:00 AM", amount: "₹15", status: "Pending" },
    { id: 3, name: "Chirag Mehta", phone: "+91 91200 22222", date: "04 May 2026, 12:00 PM", amount: "₹45", status: "Earned" },
    { id: 4, name: "Arun Kumar", phone: "+91 90000 00000", date: "02 May 2026, 10:30 AM", amount: "₹25", status: "Earned" },
    { id: 5, name: "Bhavna Singh", phone: "+91 91000 11111", date: "03 May 2026, 11:00 AM", amount: "₹15", status: "Pending" },
    { id: 6, name: "Chirag Mehta", phone: "+91 91200 22222", date: "04 May 2026, 12:00 PM", amount: "₹45", status: "Earned" }, { id: 1, name: "Arun Kumar", phone: "+91 90000 00000", date: "02 May 2026, 10:30 AM", amount: "₹25", status: "Earned" },
    { id: 7, name: "Bhavna Singh", phone: "+91 91000 11111", date: "03 May 2026, 11:00 AM", amount: "₹15", status: "Pending" },
    { id: 8, name: "Chirag Mehta", phone: "+91 91200 22222", date: "04 May 2026, 12:00 PM", amount: "₹45", status: "Earned" },
  ];

  const topReferrers = [
    { rank: 1, name: "Rohit Sharma", amount: "₹9,680.00" },
    { rank: 2, name: "Virat Kohli", amount: "₹8,250.00" },
    { rank: 3, name: "Jasprit Bumrah", amount: "₹7,500.00" },
    { rank: 9, name: "Srinivas (You)", amount: "₹3,900.00", isCurrentUser: true },
    { rank: 4, name: "KL Rahul", amount: "₹3,820.00" },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const referralSteps = [
    {
      id: 1,
      title: "1. Share your Code/Link",
      description: "Share your referral code or link with your friends",
      // You can use SVG paths or Lucide React icons here
      icon: "share"
    },
    {
      id: 2,
      title: "2. Friend Joins & Transacts",
      description: "Your friend signs up and completed their first transaction",
      icon: "users"
    },
    {
      id: 3,
      title: "3. You Earn Rewards",
      description: "You earn ₹25 instantly once your friend's transaction is successful.",
      icon: "coins"
    }
  ];
  const metricsData = [
    {
      id: 'total-referrals',
      label: 'Total Referrals',
      value: '21',
      subtext: 'Friends Joined',
      icon: <Users size={20} />,

    },
    {
      id: 'successful-referrals',
      label: 'Successful Referrals',
      value: '14',
      subtext: 'Completed Transaction',
      icon: <CheckCircle size={20} />,

    },
    {
      id: 'total-earned',
      label: 'Total Earned',
      value: '₹525.00',
      subtext: 'Lifetime Earnings',
      icon: <Wallet size={20} />,

    },
  ];

  return (
    <div className="min-h-screen  bg-gray-50 p-4 md:p-8 font-sans text-gray-800">
      {/* Outer Layout Wrapper using Flex instead of Grid */}
      <div className="pt-20 max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* LEFT & CENTER COLUMN (Main Content Area) */}
        <div className="flex-1 flex flex-col gap-6 max-h-[418px] w-full max-w-[721px]">

          {/* Hero Banner */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 max-w-[721px]   md:max-h-[418px]">
            <div className='flex flex-col'>
              <div className='flex  flex-row '>

                <div className=" flex-col p-5 ">
                  <p className="text-[14px] font-semibold text-[#1C1B1BCC]">Refer & Earn with ViralPe</p>
                  <h1 className=" md:text-[24px] font-bold text-[#1C1B1B]">
                    Refer Your Friends & <br/>
                    Earn <span className="text-[#901C27]">Exciting Rewards!</span>
                  </h1>
                  <p className="text-[14px] text-[#1C1B1BCC]">
                    Your friends get a great experience and you earn cashback successful referral.
                  </p>
                  <button className="bg-[#6b0d1e] hover:bg-[#520a16] text-white font-medium py-3 px-6 rounded-xl flex items-center gap-2 transition duration-200 shadow-md ">
                    <Share2 size={18} />
                    Refer Now
                  </button>
                </div>

                {/* Illustration Area */}
                <div className="  w-full md:w-[318px] w-full h-full md:h-[384px]    ">
                  <img src={Refer} alt='refer' />
                </div>
              </div>

              {/* Share Links & Codes Container (Flex Row on Desktop) */}

              <div className="bg-[#FFEDEE] border border-pink-100 rounded-2xl p-4 flex flex-col md:flex-row gap-4 md:-mt-26">
                <div className="flex-1  p-3   flex flex-col justify-between  md:border-r-1 border-gray-500   ">
                  <span className="text-xs text-gray-500 font-medium mb-1">Your Referral Code</span>
                  <div className="flex items-center justify-between font-mono bg-gray-50 px-3 py-2 rounded-lg text-sm font-bold text-gray-700">
                    <span>{referralCode}</span>
                    <div className="flex gap-2 text-red-400 ">
                      <button onClick={() => handleCopy(referralCode)} className="hover:text-gray-600"><Copy size={16} /></button>
                      <button className="hover:text-gray-600"><Share2 size={16} /></button>
                    </div>
                  </div>
                </div>

                <div className="flex-1  p-3 rounded-xl  border-gray-100 flex flex-col justify-between overflow-hidden">
                  <span className="text-xs text-gray-500 font-medium mb-1">Share your Link</span>
                  <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-600">
                    <span className="truncate mr-2">{referralLink}</span>
                    <div className="flex gap-2 text-red-400 flex-shrink-0">
                      <button onClick={() => handleCopy(referralLink)} className="hover:text-gray-600"><Copy size={16} /></button>
                      <button className="hover:text-gray-600"><Share2 size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Breakdown (Flexboxes inside) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-[721px] max-h-[196px] ">
            <h2 className="text-[24px] font-bold text-gray-900 mb-2">Earnings Breakdown</h2>

            {/* 2. Map through the data array to render rows dynamically */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              {metricsData.map((metric) => (
                <div
                  key={metric.id}
                  className="flex-1 p-4 rounded-xl flex items-start gap-3"
                >
                  {/* Dynamic Icon Container */}
                  <div className={`p-2 rounded-lg hidden sm:block ${metric.bgClass}`}>
                    {metric.icon}
                  </div>

                  {/* Content Blocks */}
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{metric.label}</p>
                    <p className="text-xl font-bold">{metric.value}</p>
                    <p className="text-[10px] text-gray-400">{metric.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          {/* Footer Banner */}
          <div className="bg-green-100 text-green-700  p-3 flex items-center justify-center  gap-2 text-sm font-medium -mt-16  ">
            <Gift size={14} /> You will earn ₹25 for each successful referral.
          </div>

          {/* My Referrals */}
          <div className="bg-white rounded-2xl px-[35px] max-h-[255px] overflow-y-scroll  shadow-sm border border-gray-100 w-fullmd:max-w-[721px] w-full ">
            <div className="flex justify-between items-center p-[20px] -mb-5">
              <h2 className="text-lg font-bold text-gray-900  ">My Referrals</h2>
              <button className="text-xs font-bold text-[#800020] flex items-center gap-1 hover:underline ">
                View All <ChevronRight size={14} />
              </button>
            </div>
            <div className="flex flex-col divide-y divide-gray-100  ">
              {myReferrals.map((user) => (
                <div key={user.id} className="py-3 flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{user.name}</h4>
                      <p className="text-xs text-gray-400 flex flex-row justify-center gap-40 ">{user.phone} <span className="text-[10px]">{user.date}</span></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-950">{(user.amount)}</p>
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${user.status === 'Earned' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-[#6b0d1e] text-white rounded-2xl p-2md:p-6 flex flex-col md:flex-row justify-between items-center overflow-hidden  w-fullmd:max-w-[721px]   h-fullmd:max-h-[180px]">
            <div className="space-y-2  text-center md:text-left  md:mb-0 -mt-9">
              <h3 className="text-xl font-bold">Refer More, Earn More!</h3>
              <p className="text-sm text-red-200">There's no limit on how much you can earn. Keep referring and keep earning!</p>
            </div>
            <div className="flex items-center justify-center flex-shrink-0">
              <img src={referopenbox} alt='refer' />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Widgets Panel) */}
        <div className="flex-1 flex flex-col gap-6   ">

          {/* Earnings & Withdrawal Widget */}
          <div className="bg-[#3d050e] text-white rounded-3xl p-6 shadow-md flex flex-col w-fullmd:w-[463px] h-[417px] justify-between">
            <p className="text-xs font-semibold text-white-200/70 tracking-wider mb-1">Your Earnings</p>
            <h2 className="text-3xl font-black mb-6">₹1,225.00</h2>

            <hr className="border-white-100 mb-6" />

            {/* Split row items via flex-row instead of grid */}
            <div className="flex justify-between items-center gap-4 mb-6 ">
              <div className="flex-1 border-r-1 border-white-100 ">
                <p className="text-xl font-bold">₹825.00</p>
                <p className="text-[11px] text-red-200/70">Confirmed Earnings</p>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold flex items-center gap-1">
                  <Clock size={16} className="text-amber-400" /> ₹400.00
                </p>
                <p className="text-[11px] text-red-200/70">Pending Earnings</p>
              </div>
            </div>

            <button className="w-full bg-white text-[#3d050e] font-bold py-3 px-4 rounded-xl hover:bg-gray-100 transition duration-150 text-sm mb-2">
              Withdraw Earnings
            </button>
            <p className="text-[10px] -mt-3 text-center text-red-200/60">Minimum withdraw amount is ₹200</p>

            <div className="mt-6 flex items-center  gap-1.5 text-xs  ">

              Safe & Secure Payments
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-fullmd:w-[463px] h-[405px] ">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-md font-bold text-gray-900">How it Works?</h3>
              <button className="text-[10px] font-bold text-red-800 uppercase tracking-wider hover:underline">T&C Apply</button>
            </div>

            {/* Structured timeline content inside vertical flex element */}
            <div className="flex flex-col max-w-md mx-auto p-1 font-sans ">
              {referralSteps.map((step, index) => {
                return (
                  <div key={step.id} className="flex flex-col">
                    {/* Step Row */}
                    <div className="flex items-start gap-4">
                      {/* Icon Container */}
                      <div className="flex items-center justify-center w-14 h-14 border border-gray-200 rounded-xl bg-white shadow-sm flex-shrink-0">
                        {step.icon}
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col pt-1">
                        <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Dotted Connector Line (Only show if it's NOT the last item) */}
                    {index !== referralSteps.length - 1 && (
                      <div className="w-14 flex justify-center my-2">
                        <div className="h-8 border-l-2 border-dotted border-red-800"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Referrers */}
          <div className="bg-white rounded-2xl p-6 shadow-sm  border border-gray-100 w-fullmd:w-[463px] h-[342px]  ">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-bold text-gray-900">Top Referrers</h3>
              <button className="text-xs font-bold text-[#800020] flex items-center gap-1 hover:underline">
                View All <ChevronRight size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-3 -mt-2">
              {topReferrers.map((referrer, idx) => (
                <div key={idx} className={`flex justify-between items-center p-2 rounded-xl transition ${referrer.isCurrentUser ? 'bg-red-50 border border-red-100' : ''}`}>
                  <div className="flex items-center  gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 ${referrer.rank === 1 ? 'bg-amber-500' : referrer.rank === 2 ? 'bg-slate-400' : referrer.rank === 3 ? 'bg-amber-700' : 'bg-red-900'
                      }`}>
                      {referrer.rank}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <span className={`text-xs font-medium ${referrer.isCurrentUser ? 'font-bold text-red-900' : 'text-gray-800'}`}>
                      {referrer.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-900">{referrer.amount}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}