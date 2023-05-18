import React, { useEffect, useState } from 'react';
import CategoryToy from '../CategoryToy/CategoryToy';

const ShopByCategory = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('Baby')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }


    useEffect(()=>{
        fetch(`http://localhost:5000/toys/${activeTab}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)

        })
    },[activeTab])

    return (
        <div className='pt-5'>
            <h1 className='text-3xl font-bold text-center'>Shop By Category</h1>

            <div className='flex justify-end gap-5 font-semibold items-center text-lg'>
                <div onClick={() => handleTabClick('Baby')} className={`cursor-pointer ${
                activeTab == "Baby" ? "bg-[#757EFA] text-white p-2 rounded-md" : ""
              }`}>Baby Dolls</div>
                <div onClick={() => handleTabClick('Barbie')} className={`cursor-pointer ${
                activeTab == "Barbie" ? " bg-[#757EFA] text-white p-2 rounded-md" : ""
              }`}>Barbie Dolls</div>
                <div onClick={() => handleTabClick('American')} className={`cursor-pointer${
                activeTab == "American" ? " bg-[#757EFA] text-white p-2 rounded-md" : ""
              }`}>American Girls</div>
            </div>
            <div className='grid md:grid-cols-3 gap-5 '>
                {
                    toys.map(toy => <CategoryToy key={toy._id} toy={toy}></CategoryToy>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;