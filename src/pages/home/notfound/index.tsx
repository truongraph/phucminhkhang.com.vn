import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#ffffff] p-20">
      <div className="text-center p-30">
       
        <h1 className="text-2xl font-medium text-gray-500">Trang này không tồn tại trên hệ thống</h1>
       
        <img
          src={"/images/empty.svg"}
          alt="Logo"
          className={clsx(["w-12/12 z-max text-center block m-auto my-10"])}
        />
         <div className="mt-6">
          <Link
        to="/"
        className="px-6 py-3 bg-[#5FCF86] text-white font-bold rounded-lg text-xl hover:bg-[#54b877] transition"
      >
       Về trang chủ
      </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
