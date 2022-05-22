import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import BusinessSummery from './BusinessSummery';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;