import clsx from "clsx";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#e6e6e6]">
      <div className="text-center bg-[#fff] p-30 rounded-2xl">
        <img
          src={"/logo/logo.png"}
          alt="Logo"
          className={clsx(["w-2/6 z-max text-center block m-auto mb-10"])}
        />
        <h1 className="text-4xl font-bold text-gray-900">Hệ thống đang trong quá trình phát triển!</h1>
        <p className="mt-4 text-2xl text-gray-400">
        Mioto - Cùng Bạn Đến Mọi Hành Trình
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-[#5FCF86] text-white font-bold rounded-lg text-xl hover:bg-[#54b877] transition">
          <i className="fi fi-rr-phone-call mr-2"></i> Liên hệ cho tôi
          </button>
        </div>
        <p className="mt-10">Được phát triển bởi Võ Trường</p>
      </div>
    </div>
  );
};

export default HomePage;
