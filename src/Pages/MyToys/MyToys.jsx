import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaPencilAlt, FaEye  } from "react-icons/fa";


const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data);
        })
    },[])
    
    return (
        <div className='pb-96'>
            <h1 className='text-5xl font-bold text-center py-24'>My Toys</h1>
            <div>
            <div className="overflow-x-auto py-10">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Picture</th>
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
              {myToys.map((toy, index) => (
                <tr key={index} toy={toy}>
                  <th>{index + 1}</th>
                  <td><img className='h-10 w-10' src={toy.picture} alt="" /></td>
                  <th>{toy.name}</th>
                  <th>{toy.seller_name}</th>
                  <th>{toy.category}</th>
                  <th>$ {toy.price}</th>
                  <th className="text-center">{toy.quantity}</th>
                  <th>
                    <div className='flex  gap-2'>
                    <button className="bg-[#757EFA] px-[8px] py-[8px] text-white rounded-md">
                      <FaEye/>
                    </button>
                    <button className="bg-[#757EFA] px-[8px] py-[8px] text-white rounded-md">
                      <FaPencilAlt/>
                    </button>
                    </div>
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

export default MyToys;