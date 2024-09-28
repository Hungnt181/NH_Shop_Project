import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegPaperPlane,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
const ContactPage = () => {
  return (
    <main className="mt-4">
      {/* Banner */}
      <div>
        <img src="https://picsum.photos/1920/720" alt="Banner" />
      </div>
      {/*  */}
      <div className="grid grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        <div className="flex">
          <img
            className="w-[64px] h-[64px] "
            src="/contact_adress.svg"
            alt=""
          />

          <div className="ml-6">
            <h5 className="font-bold text-[24px] text-[#000000] mb-5 uppercase">
              address
            </h5>
            <p className="text-[18px] text-[#71717A]">
              60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
            </p>
          </div>
        </div>

        <div className="flex">
          <img className="w-[64px] h-[64px]" src="/Component 2.svg" alt="" />

          <div className="ml-6">
            <h5 className="font-bold text-[24px] text-[#000000] mb-2 uppercase">
              contact details
            </h5>
            <p className="text-[18px] text-[#71717A]">info@furniro.com</p>
            <h5 className="font-bold text-[24px] text-[#71717A] mb-5 ">
              02056278686
            </h5>
          </div>
        </div>

        <div className="flex">
          <img className="w-[64px] h-[64px]" src="/Component 3.svg" alt="" />

          <div className="ml-6">
            <h5 className="font-bold text-[24px] text-[#000000] mb-5 uppercase">
              social networks
            </h5>
            <ul className="flex justify-between gap-5">
              <li>
                <Link to="/">
                  <FaFacebookSquare className="w-10 h-10 text-[#71717A]" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaInstagram className="w-10 h-10 text-[#71717A]" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiFillTikTok className="w-10 h-10 text-[#71717A]" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaTwitterSquare className="w-10 h-10 text-[#71717A]" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaSquareYoutube className="w-10 h-10 text-[#71717A]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      {/*  */}
      <div className="grid grid-cols-2">
        <img className="w-full" src="https://picsum.photos/704/485" alt="" />
        <div className="bg-[#F1F1F1]">
          <div className="mt-[73px] ml-8 mr-20">
            <h4 className="font-semibold text-[20px] uppercase">contact</h4>
            <h1 className="font-bold text-[40px] mt-4 uppercase">
              connect with us now
            </h1>

            <form action="" className="mt-8">
              <ul className="grid grid-cols-2 gap-8 mb-6">
                <li>
                  <input
                    className="h-[32px] pb-3 w-full border-b border-[#9CA3AF] bg-[#F1F1F1] placeholder-[#9CA3AF]"
                    type="text"
                    placeholder="First Name"
                  />
                </li>
                <li>
                  <input
                    className="h-[32px] pb-3 w-full border-b border-[#9CA3AF] bg-[#F1F1F1] placeholder-[#9CA3AF]"
                    type="text"
                    placeholder="Last Name"
                  />
                </li>
              </ul>
              <ul className="grid grid-cols-2 gap-8 mb-6">
                <li>
                  <input
                    className="h-[32px] pb-3 w-full border-b border-[#9CA3AF] bg-[#F1F1F1] placeholder-[#9CA3AF]"
                    type="text"
                    placeholder="Email"
                  />
                </li>
                <li>
                  <input
                    className="h-[32px] pb-3 w-full border-b border-[#9CA3AF] bg-[#F1F1F1] placeholder-[#9CA3AF]"
                    type="text"
                    placeholder="Phone Number"
                  />
                </li>
              </ul>
              <input
                className="h-[32px] pb-3 w-full border-b border-[#9CA3AF] bg-[#F1F1F1] placeholder-[#9CA3AF]"
                type="text"
                placeholder="Message"
              />

              <button className="w-[200px] h-[43px] bg-[#CA8A04] text-[16px] text-[#FFFFFF] font-bold  mt-8 flex justify-center items-center">
                <FaRegPaperPlane className="mr-2" />
                Send Infomation
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
