import React, { useState } from "react";

const AddaToy = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target.value;
    const category = selectedOption;
    console.log(category);
  };

  return (
    <div className="py-28">
      <h1 className="text-5xl font-bold text-center">Add a toy</h1>

      <div className="w-3/4 mx-auto py-10">
        <form onSubmit={handleAddAToy}>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="toyName">ToyName</label> <br />
              <input
                type="text"
                placeholder="Toy Name"
                name="toyName"
                id="toyName"
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="sellerName">Seller Name</label> <br />
              <input
                type="text"
                placeholder="Seller Name"
                name="sellerName"
                id="sellerName"
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
          </div>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="photoUrl">photo Url</label> <br />
              <input
                type="text"
                placeholder="Photo Url"
                name="photoUrl"
                id="photoUrl"
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="sellerEmail">Seller Email</label> <br />
              <input
                type="text"
                placeholder="Seller Name"
                name="sellerEmail"
                id="sellerEmail"
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
          </div>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="price">Price</label> <br />
              <input type="text" placeholder="Price" name="price" id="price" className="w-full py-1 outline-none border border-[#757efa]"/>
              
            </div>
            <div className="w-full">
              <label htmlFor="quantity">Available Quantity</label> <br />
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                id="quantity"
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
          </div>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="rating">Rating</label> <br />
              <input
                type="text"
                placeholder="rating"
                name="rating"
                id="rating"
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="category">Category</label> <br />
              <select
                id="mySelect"
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-full py-1 outline-none border border-[#757efa]"
              >
                <option value="">-- Select --</option>
                <option value="Baby">Baby Doll</option>
                <option value="Barbie">Barbie Doll</option>
                <option value="American">American Doll</option>
              </select>
            </div>
          </div>
            <div>
              <textarea className="w-full mb-5 outline-none border border-[#757efa]" name="details" cols="70" rows="5"></textarea>
            </div>
            <button className="bg-[#757EFA] px-[20px] py-[8px] text-white rounded-md w-full" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddaToy;
