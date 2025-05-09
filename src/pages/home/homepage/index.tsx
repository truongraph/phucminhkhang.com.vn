import clsx from "clsx";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#fff]">
      <div className="max-w-screen-2xl px-10 items-center justify-center grid grid-cols-1 lg:grid-cols-3">
      <div className=" relative w-5/12 lg:w-8/12 p-3 block mx-auto">
      <img
          src={"/logo/img.png"}
          alt="Logo"
          className={clsx(["w-full z-max block m-auto relative"])}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B974E] to-[#EF6F4B] rounded-full"></div>
      </div>
       <div className="mt-10 lg:mt-0 col-span-2 text-center">
       <img
          src={"/logo/logo.png"}
          alt="Logo"
          className={clsx(["w-5/12 lg:w-2/12 block mx-auto mb-5"])}
        />
       <h1 className="text-5xl uppercase font-extrabold text-gray-900">đang trong quá trình xây dựng</h1>
        <p className="mt-5 italic text-lg font-medium text-gray-500">
        CƠ SỞ KHÁM BỆNH, CHỮA BỆNH Y HỌC GIA ĐÌNH THUỘC CÔNG TY TNHH BÁC SĨ GIA ĐÌNH PHÚC MINH KHANG
        </p>
        <div className="mt-5">
          <button className="px-10 py-5 bg-[#4B9E4E] text-white font-bold rounded-full text-xl hover:bg-[#54b877] transition">
          Liên hệ cho chúng tôi
          </button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default HomePage;
