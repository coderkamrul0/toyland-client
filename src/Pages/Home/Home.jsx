import React from 'react';
import Banner from '../../components/Banner/Banner';
import ShopByCategory from '../../components/shopByCategory/shopByCategory';
import TestiMonial from '../../components/TestiMonaial/TestiMonial';
import PhotoGellary from '../../components/PhotoGellary/PhotoGellary';
import OurServices from '../../components/OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TestiMonial/>
            <PhotoGellary/>
            <ShopByCategory/>
            <OurServices/>
        </div>
    );
};

export default Home;