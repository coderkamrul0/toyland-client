import React from "react";

const OurServices = () => {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold pb-10 text-center">Our Services</h1>

      <div className="md:flex justify-between">
        <div>
          <div className="flex items-center gap-3 py-5"  data-aos="zoom-out">
            <div>
              <img className="w-20 bg-white p-4 rounded-[50%]" src={"https://i.ibb.co/P4x0rTR/delivery-truck.png"} alt="" />
            </div>
            <div >
              <p className="font-bold pb-2">Worldwide Delivery</p>
              <p className="font-bold text-gray-400">On order over $150</p>
            </div>
          </div>
          <div className="flex items-center gap-3  py-5"  data-aos="zoom-out">
            <div>
              <img className="w-20 bg-white p-4 rounded-[50%]" src={"https://i.ibb.co/RT4hQb7/piggy-bank.png"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">Great Saving</p>
              <p className="font-bold text-gray-400">How to save money</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-5 "  data-aos="zoom-out">
            <div>
              <img className="w-20 bg-white p-4 rounded-[50%]" src={"https://i.ibb.co/PFqzcrR/giftbox.png"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">Gift Voucher</p>
              <p className="font-bold text-gray-400">Good Gift for Good Relation</p>
            </div>
          </div>
        </div>
        <div  className=" rounded-full " data-aos="flip-down">
            <img className="w-80" src="https://i.ibb.co/qkHXc7m/pngwing-com-7.png" alt="" />
        </div>
        <div>
        <div className="flex items-center gap-3 py-5"  data-aos="zoom-out">
            <div>
              <img className="w-20 bg-white p-4 rounded-[50%]" src={"https://i.ibb.co/zrk4J8F/customer-service.png"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">Money Back Guarantee</p>
              <p className="font-bold text-gray-400">Send within 30 days</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-5"  data-aos="zoom-out">
            <div>
              <img className="w-20 bg-white p-4 rounded-[50%]" src={"https://i.ibb.co/PFqzcrR/giftbox.png"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">24X7 Support</p>
              <p className="font-bold text-gray-400">Call us at 000-111</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-5"  data-aos="zoom-out">
            <div>
              <img className="w-20 bg-white p-4 rounded-[50%]" src={"https://i.ibb.co/56kMxjW/tour-guide.png"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">Shopping Guide</p>
              <p className="font-bold text-gray-400">Shopping Guid Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
