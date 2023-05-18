import React from "react";

const CategoryToy = ({ toy }) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg max-w-sm ">
            <div className="flex justify-center">
            <img
              className="rounded-t-lg p-8 h-64"
              src={toy.picture}
              alt="product image"
            />
            </div>
          <div className="px-5 pb-5">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight ">
                {toy.name}
              </h3>
            <div className="flex items-center mt-2.5 mb-5">
              
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryToy;
