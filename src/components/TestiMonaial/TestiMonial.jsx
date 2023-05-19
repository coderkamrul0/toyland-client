import React from "react";
import ReactStars from "react-rating-stars-component";

const TestiMonial = () => {
  return (
    <div className="py-14 px-5">
      <div className="grid md:grid-cols-2">
        <div className="flex p-5 md:p-10 rounded-lg gap-5 md:gap-16 items-center bg-[#717FFE]">
          <div>
            <p className="text-white font-bold text-xl">Products</p>
            <h4 className="text-white font-bold text-3xl">2452</h4>
          </div>
          <div>
            <p className="text-white font-bold text-xl">Customers</p>
            <h4 className="text-white font-bold text-3xl">20k+</h4>
          </div>
          <div>
            <p className="text-white font-bold text-xl">Happy</p>
            <h4 className="text-white font-bold text-3xl">19k+</h4>
          </div>
        </div>
        <div className="flex items-center gap-5 border border-[#717ffe] py-4 rounded-lg">
          <div>
            <img
              className="h-24 w-24 "
              src={"https://i.ibb.co/t3hDrkp/219970.png"}
              alt=""
            />
          </div>
          <div>
            <p className="text-2xl font-semibold">Our Testimonial</p>
            <p>
              ToyLand deliver best of fantastic <br /> toys and puzzles straight to
              your door.
            </p>
            <ReactStars value={4} count={5} size={24} activeColor="#ffd700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiMonial;
