import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HomeContent from '../Components/HomeContent';
function Home() {
    return (

        <>
            <Navbar active="Home" />
            
            <HomeContent/>
            <Footer />
        </>
    );
}

export default Home;
