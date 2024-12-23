import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">Header (Home Layout)</header>
      <main className="flex-grow p-4">
        <Outlet /> {/* Đây sẽ render nội dung từ các trang con như HomePage */}
      </main>
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </div>
  );
};

export default HomeLayout;
