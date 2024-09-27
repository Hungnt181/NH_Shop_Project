import React from "react";
import { AiFillDelete } from "react-icons/ai";
const CartPage = () => {
  return (
    <main className="max-w-6xl mx-auto grid grid-cols-12 gap-8 mb-16 mt-16">
      {/* left Box */}
      <div className="col-span-8">
        <ul className="flex bg-[#F5F5F5] w-full h-[56px] items-center mb-4">
          <li className="font-medium ml-4">Product</li>
          <li className="ml-[154px] mr-[94px] font-medium">Price</li>
          <li className="mr-[100px] font-medium">Quantity</li>
          <li className="font-medium">Subtotal</li>
        </ul>
        <div className="flex  w-full  items-center">
          <ul className="flex items-center">
            <li>
              <img src="https://picsum.photos/70/70" alt="NHShop" />
            </li>
            <li className="text-[#A3A3A3] text-[16px] font-medium ml-[16px] mr-[22px]">
              Asgaard sofa
            </li>
            <li className="text-[#A3A3A3] text-[16px] font-medium">
              25.000.000đ
            </li>
            <li className="text-[#262626] text-[16px] font-medium ml-[94px] mr-[120px]">
              1
            </li>
            <li className="text-[#262626] text-[16px] font-medium">
              25.000.000đ
            </li>
            <li className="text-[#EF4444] ml-[80px] ">
              <button>
                <AiFillDelete className="w-[22px] h-[22.88px]" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* right Box Cart tota */}
      <div className="col-span-4 px-8 pt-8 w-full  h-[279px] bg-[#F5F5F5]">
        <h3 className="font-semibold text-[24px]">Cart Total</h3>
        {/* content */}
        <div className="pt-[20px] border-t border-[#A3A3A3] mt-4">
          <ul className="flex justify-between mb-4">
            <li className="font-medium text-[16px] text-[#262626]">Subtotal</li>
            <li className="font-medium text-[16px] text-[#A3A3A3]">
              25.000.000đ
            </li>
          </ul>
          <ul className="flex justify-between mb-7">
            <li className="font-medium text-[16px] text-[#262626]">Total</li>
            <li className="font-bold text-[20px] text-[#EF4444]">
              25.000.000đ
            </li>
          </ul>
          <button className="w-full h-10 border border-[#CA8A04] text-[16px] text-[#CA8A04] font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
