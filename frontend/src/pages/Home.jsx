import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <Banner/>
            <Categories/>
        </div>
    );
};

export default Home;