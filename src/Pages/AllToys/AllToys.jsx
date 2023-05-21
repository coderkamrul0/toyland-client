import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { AuthContext } from "../../providers/AuthProvider";


const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const {user} = useContext(AuthContext)
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    fetch(`https://toyland-server-xi.vercel.app/allToys`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  console.log(allToys);

//   useEffect(()=>{
    
//   },[])

const handleSearch = () => {
    fetch(`https://toyland-server-xi.vercel.app/toySearchByName/${searchText}`)
    .then(res => res.json())
    .then(data => {
        setAllToys(data);
    })
}



  return (
    <div className="py-16">
      <Helmet>
        <title>ToyLand | All Toys</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center">All Toys</h1>
      <div className="text-center">
        <input className="md:w-2/5 py-2 mt-5 outline-none border border-[#757EFA] px-3 rounded-md " onChange={(event)=> setSearchText(event.target.value)} type="text" name="search" id="" />
        <button onClick={handleSearch} className="bg-[#757EFA] px-[22px] py-[9px] text-white rounded-md">Search</button>
      </div>
      <div>
        <div className="overflow-x-auto py-10">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allToys.map((toy, index) => (
                <tr key={index} toy={toy}>
                  <th>{index + 1}</th>
                  <th>{toy.name}</th>
                  <th>{toy.seller_name}</th>
                  <th>{toy.category}</th>
                  <th>$ {toy.price}</th>
                  <th className="text-center">{toy.quantity}</th>
                  <th>
                    <Link to={`/toy/${toy._id}`}>
                    <button className="bg-[#757EFA] px-[20px] py-[8px] text-white rounded-md">
                      View Details
                    </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
