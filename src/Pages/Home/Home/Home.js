import React from 'react';
import BannerBg from '../BannerBg/BannerBg';
import SecondHeader from '../Shared/SecondHeader/SecondHeader';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <BannerBg></BannerBg>
            <SecondHeader></SecondHeader>
            <Outlet />
        </div>
    );
};

export default Home;
