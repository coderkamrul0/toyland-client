import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaPencilAlt, FaArchive } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`https://toyland-server-xi.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`https://toyland-server-xi.vercel.app/allToys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining);
                }
            })
    }
}


  

  return (
    <div className="pb-96">
      <Helmet>
        <title>ToyLand | My Toys</title>
      </Helmet>

      <h1 className="text-5xl font-bold text-center py-24">My Toys</h1>
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
                  <td>
                    <img className="h-10 w-10" src={toy.picture} alt="" />
                  </td>
                  <th>{toy.name}</th>
                  <th>{toy.seller_name}</th>
                  <th>{toy.category}</th>
                  <th>$ {toy.price}</th>
                  <th className="text-center">{toy.quantity}</th>
                  <th>
                    <div className="flex  gap-2">
                      <Link to={`/update/${toy._id}`}>
                        <button className="bg-[#757EFA] px-[8px] py-[8px] text-white rounded-md">
                          <FaPencilAlt />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(toy._id)}
                        className="bg-[#757EFA] px-[8px] py-[8px] text-white rounded-md"
                      >
                        <FaArchive />
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
