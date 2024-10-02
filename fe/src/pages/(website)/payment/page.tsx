import React from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <main className="mt-16 mb-16 max-w-6xl mx-auto">
      <h2 className="text-[40px] font-semibold mb-8">Billing details</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* left Box */}
        <div>
          <div className="grid grid-cols-2 gap-8 mb-8 ">
            <div>
              <p className="font-medium text-[16px] mb-2">First Name</p>
              <input
                className="w-full h-[40px] border border-[#A3A3A3] "
                type="text"
                required
              />
            </div>
            <div>
              <p className="font-medium text-[16px] mb-2">Last Name</p>
              <input
                className="w-full h-[40px] border border-[#A3A3A3] "
                type="text"
                required
              />
            </div>
          </div>
          {/*  */}
          <div className=" mb-8 ">
            <p className="font-medium text-[16px] mb-2">
              Company Name (Optional)
            </p>
            <input
              className="w-full h-[40px] border border-[#A3A3A3] "
              type="text"
              required
            />
          </div>
          {/*  */}
          <div className=" mb-8 ">
            <p className="font-medium text-[16px] mb-2">Country / Region</p>
            <select className="w-full h-[40px] border border-[#A3A3A3] text-[14px] text-[#A3A3A3] pl-4">
              <option value="" selected>
                Sri Lanka
              </option>
              <option value="">2</option>
            </select>
          </div>

          {/*  */}
          <div className=" mb-8 ">
            <p className="font-medium text-[16px] mb-2">Street address</p>
            <input
              className="w-full h-[40px] border border-[#A3A3A3] "
              type="text"
              required
            />
          </div>
          {/*  */}
          <div className=" mb-8 ">
            <p className="font-medium text-[16px] mb-2">Town / City</p>
            <input
              className="w-full h-[40px] border border-[#A3A3A3] "
              type="text"
              required
            />
          </div>
          {/*  */}
          <div className=" mb-8 ">
            <p className="font-medium text-[16px] mb-2">Province</p>
            <select className="w-full h-[40px] border border-[#A3A3A3] text-[14px] text-[#A3A3A3] pl-0">
              <option value="" selected>
                Western Province
              </option>
              <option value="">2</option>
            </select>
          </div>
          {/*  */}
          <div className=" mb-8 ">
            <p className="font-medium text-[16px] mb-2">ZIP code</p>
            <input
              className="w-full h-[40px] border border-[#A3A3A3] "
              type="text"
              required
            />
          </div>
          {/*  */}
          <div className=" mb-8 ">
            <p className="font-medium text-[16px] mb-2">Phone</p>
            <input
              className="w-full h-[40px] border border-[#A3A3A3] "
              type="text"
              required
            />
          </div>
          {/*  */}
          <div className=" mb-8 ">
            <p className="font-medium text-[16px] mb-2">Email address</p>
            <input
              className="w-full h-[40px] border border-[#A3A3A3] "
              type="text"
              required
            />
          </div>
        </div>

        {/* right Box */}
        <div>
          {/*  */}
          <div className="pb-[32px] border-b border-[#A3A3A3] mt-4 mb-8">
            <ul className="flex justify-between mb-4">
              <li className="font-semibold text-[24px] text-[#262626]">
                Product
              </li>
              <li className="font-semibold text-[24px] text-[#262626]">
                Subtotal
              </li>
            </ul>
            <ul className="flex justify-between mb-4">
              <li className="font-medium text-[16px] text-[#A3A3A3]">
                Asgaard sofa
              </li>
              <li className="font-medium text-[16px] text-[#262626] ml-[-330px]">
                X1
              </li>
              <li className="font-medium text-[16px] text-[#262626]">
                25.000.000đ
              </li>
            </ul>
            <ul className="flex justify-between mb-4">
              <li className="font-medium text-[16px] text-[#262626]">
                Subtotal
              </li>
              <li className="font-medium text-[16px] text-[#262626]">
                25.000.000đ
              </li>
            </ul>
            <ul className="flex justify-between">
              <li className="font-medium text-[16px] text-[#262626]">Total</li>
              <li className="font-bold text-[20px] text-[#B88E2F]">
                25.000.000đ
              </li>
            </ul>
          </div>

          {/*  */}
          <div>
            {/* radio */}
            <div>
              <div>
                <input className="mr-2 bg-[#262626]" type="radio" checked />
                <label htmlFor="" className="font-medium">
                  Direct Bank Transfer
                </label>
                <p className="text-[16px] text-[#A3A3A3] mt-[11px]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>

              {/*  */}
              <div>
                <input className="mr-2 mt-4  text-[#A3A3A3]" type="radio" />
                <label
                  htmlFor=""
                  className="mr-2 mt-4 text-[16px] font-medium text-[#A3A3A3]"
                >
                  ATM Bank Transfer
                </label>
              </div>
              {/*  */}
              <div>
                <input className="mr-2 mt-4  text-[#A3A3A3]" type="radio" />
                <label
                  htmlFor=""
                  className="mr-2 mt-4 text-[16px] font-medium text-[#A3A3A3]"
                >
                  Cash On Delivery
                </label>
              </div>
            </div>
            {/* ìnf */}
            <div className="mt-8">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <Link to="/" className="text-[#262626] font-semibold">
                privacy policy.
              </Link>{" "}
            </div>
            {/* btn */}
            <div className="flex justify-center">
              <button className="w-[324px] h-10 border border-[#CA8A04] text-[16px] text-[#CA8A04] font-semibold  mt-8">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
