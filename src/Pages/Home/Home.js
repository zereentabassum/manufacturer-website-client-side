import React from 'react';
import Banner from './Banner/Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import BusinessSummery from './BusinessSummery';
import Carousal from './Carousal';
import LastSection from './LastSection';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Carousal></Carousal>
            <LastSection></LastSection>

        </div>
    );
};

export default Home;