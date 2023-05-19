import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, []);

  return (
    <div className="py-24">
      <Helmet>
        <title>ToyLand | Details</title>
      </Helmet>

      <h1 className="text-center text-4xl font-bold pb-10">Toy Details</h1>
      <div>
        <div className="md:flex">
            <div className="md:w-1/2">
                <img className="md:w-[80%]" src={toy.picture} alt="" />
            </div>
            <div className="md:w-1/2">
                <h4 className="text-3xl"><span className="font-bold">Name: </span> {toy.name}</h4>
                <h5 className="font-bold text-2xl">Price: $ {toy.price}</h5>
                <h5>Category: {toy.category}</h5>
                <h5>Seller Name: {toy.seller_name}</h5>
                <h5>Seller Email: {toy.seller_email}</h5>
                <h5>Rating: {toy.rating}</h5>
                <h5>Quantity: {toy.quantity}</h5>
                <p>Toy Details: {toy.details}</p>
            </div>
        </div>
      </div>


    </div>
  );
};

export default ToyDetails;
