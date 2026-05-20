import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import lockicon from "../../../public/images/lock.png";
import verified from "../../../public/images/verified.png";
import Thunder from "../../../public/images/Thunder.png";
import myntra from "../../../public/images/myntra.png";
import starbucks from "../../../public/images/starbucks.png";
import nike from "../../../public/images/nike.png";
export default function PopularVouchers() {
  const [activeCategory, setActiveCategory] = useState('All (09)');

  // Dummy data arrays for easy mapping
  const categories = [
    'All (09)', 'Fashion', 'Entertainment', 'Books', 'Gaming',
    'Food', 'Beauty', 'Travel', 'Medicine', 'Cosmetics'
  ];

  const vouchers = [
    {
      id: 1,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
    {
      id: 2,
      brand: 'Starbucks',
      priceText: 'Starting Price from ₹200',
      badgeText: 'Get ₹50 Cashback',
      badgeType: 'blue',
      logoUrl: starbucks
    },
    {
      id: 3,
      brand: 'Nike',
      priceText: 'Starting Price from ₹200',
      badgeText: '',
      badgeType: 'none',
      logoUrl: nike
    },
    {
      id: 4,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
    {
      id: 5,
      brand: 'Starbucks',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: starbucks
    }
  ];

  return (
    <div className="w-full max-w-[1205px]  mt-[32px] mx-auto bg-white rounded-[20px] p-8 md:p-10 shadow-sm border border-gray-100">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-[48px] font-semibold tracking-tight mb-2 text-[#222222]">
            <span className="text-[#8B232A]">Popular</span> Vouchers
          </h2>
          <p className="text-gray-600 text-[24px]">
            Buy vouchers from leading brands and save more on every purchase
          </p>
        </div>

        <button className="flex items-center gap-1 text-(--primary-red) font-medium text-[16px]  group whitespace-nowrap">
          View More
          <ArrowRight size={16} className="transition-transform font-medium" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center gap-3.25 md:gap-3.25 mt-6">

        <div className="flex items-center gap-2 text-(--primary-red) text-[15px] mr-[13px] font-semibold tracking-wider w-42 ">
          <img
            src={verified}
            alt="verified"
            className="w-[24px] h-[24px] object-contain"
          />   Verified Brands
        </div>

        <div className="flex items-center gap-2 text-(--primary-red) text-[15px] font-semibold tracking-wider w-42 mr-[13px] ">
          <img
            src={Thunder}
            alt="verified"
            className="w-[24px] h-[24px] object-contain"
          />   Instant Redeem
        </div>
        <div className="flex items-center gap-2 text-(--primary-red) text-[15px] font-semibold tracking-wider mr-[13px]">
          <img
            src={lockicon}
            alt="verified"
            className="w-[24px] h-[24px] object-contain"
          />    Secure Payments   </div>
      </div>

      {/* Category Pills (Scrollable horizontally) */}
      <div className="flex items-center gap-3 mt-8 pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`h-[34.26px] px-6 py-2.5 rounded-xl text-[13px] font-medium whitespace-nowrap transition-all duration-300  flex align-center justify-center  ${activeCategory === cat
                ? 'bg-(--primary-red) text-white shadow-md'
                : ' bg-linear-to-r from-[#f1eeee] via-white to-white text-[#1C1B1B] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.09)]'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Vouchers Carousel Section */}
      <div className="relative mt-8">
        {/* Left Navigation Arrow */}
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#8B232A] hover:border-gray-200 transition-colors hidden md:flex">
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Cards Container */}
        <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide pt-2 px-1">
          {vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="min-w-[200px] bg-white border border-gray-100 rounded-[16px] p-4 flex flex-col hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Badge Area (Preserves height even if empty) */}
              <div className="h-[24px] mb-2">
                {voucher.badgeType !== 'none' && (
                  <span className={`px-2 py-1 rounded-[6px] text-[10px] font-bold ${voucher.badgeType === 'green'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-blue-50 text-blue-600'
                    }`}>
                    {voucher.badgeText}
                  </span>
                )}
              </div>

              {/* Brand Logo */}
              <div className="flex-1 flex items-center justify-center py-4">
                <img
                  src={voucher.logoUrl}
                  alt={voucher.brand}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Text Info */}
              <div className="text-center mt-2">
                <h4 className="font-bold text-[#222222] text-[16px]">{voucher.brand}</h4>
                <p className="text-[11px] text-gray-500 mt-1">{voucher.priceText}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-[#8B232A] hover:bg-gray-50 transition-colors hidden md:flex">
          <ChevronRight size={20} />
        </button>

      </div>
    </div>
  );
};

