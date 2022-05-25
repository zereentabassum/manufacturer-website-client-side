import React from 'react';
import Banner from './Banner/Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import BusinessSummery from './BusinessSummery';
import Carousal from './Carousal';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Carousal></Carousal>

        </div>
    );
};

export default Home;