import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[100vh]">
      <main className="h-screen w-full flex flex-col justify-center items-center ">
        <img className="w-96" src="https://i.ibb.co/S67BD1N/Pngtree-404-cartoon-cute-hamster-error-4043582.png" alt="" />
        
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default ErrorPage;
