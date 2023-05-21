import React from "react";

const PhotoGellary = () => {
  return (
    <div className="shadow-xl pb-5">
        
      <div className="container mx-auto px-5 py-2  lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block shadow-2xl h-full w-full rounded-lg object-cover object-center"
                src="https://ksltv.com/wp-content/uploads/2023/04/hypatia-h_fbc847d989af417f9f33b0516b6fcf80-h_2e8962a9e927b9af0d817adb5474d69d-900x506.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block shadow-2xl h-full w-full rounded-lg object-cover object-center"
                src="https://ksltv.com/wp-content/uploads/2023/04/hypatia-h_3a65f76af0e9c309ad4b50ab55796abc-h_2e8962a9e927b9af0d817adb5474d69d-900x506.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block shadow-2xl h-full w-full rounded-lg object-cover object-center"
                src="https://img.money.com/2019/10/judge-barbie-459019345.jpg?quality=60&w=1280"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block shadow-2xl h-full w-full rounded-lg object-cover object-center"
                src="https://i.ytimg.com/vi/Ns_cjzRO1T0/maxresdefault.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block shadow-2xl h-full w-full rounded-lg object-cover object-center"
                src="https://people.com/thmb/CKA6be5VXjiof9zWPOuxbEI0RR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/barbies-bbe03dd1f94f491a94fb48a4610d0b06.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block shadow-2xl h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3G8QftdI4pkqDQtgV0KzXPm4olox-784W0Q&usqp=CAU"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGellary;
