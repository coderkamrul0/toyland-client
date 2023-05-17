import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundPosition: "center",
          backgroundImage: `url('https://i.ibb.co/0c9ksPw/Slider-BD31427-Veronika-BD31428-Mirabelle.jpg')`,
          height: "60vh",
        }}
        className="relative overflow-hidden bg-no-repeat bg-cover"
      >
        <div className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
          <div className="flex  items-center h-full bg-gradient-to-r from-fuchsia-300">
            <div className=" text-white px-6 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-bold ">The Best Toys and <br /> Dolls for Kids</h1>
            <p className="text-white">We have a wide selection of toys and dolls for <br /> kids of all ages. Whether you're looking for a <br /> new doll for your daughter or a new action <br /> figure for your son, we have something for everyone.</p>
            <div className="flex gap-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View All</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Shop</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
