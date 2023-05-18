import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="md:flex justify-between items-center py-20">
        <div className="">
          <h1 className="text-5xl md:text-6xl font-bold pb-5">Find your best <br /> Toys for your <br /> Children</h1>
          <p className="pb-5"> We deliver best of fantastic, hand-piched, age <br /> appropriate toys book and puzzles straight to your door.</p>
          <button className=" bg-[#757EFA] px-[20px] py-[8px] text-white rounded-md ">Get Started</button>
        </div>
        <div>
          <img className="" src={'https://i.ibb.co/fCFMMyX/pexels-pixabay-163036-removebg-preview.pnghttps://i.ibb.co/fCFMMyX/pexels-pixabay-163036-removebg-preview.png'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
