import React from "react";
import Banner from "../../components/Banner/Banner";
import ShopByCategory from "../../components/shopByCategory/shopByCategory";
import TestiMonial from "../../components/TestiMonaial/TestiMonial";
import PhotoGellary from "../../components/PhotoGellary/PhotoGellary";
import OurServices from "../../components/OurServices/OurServices";
import { Helmet } from "react-helmet";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ToyLand | Home</title>
      </Helmet>
      <Banner />
      {/* <TestiMonial /> */}
      <PhotoGellary />
      <ShopByCategory />
      <OurServices />
      <Newsletter/>
    </div>
  );
};

export default Home;
