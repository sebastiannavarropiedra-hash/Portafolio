import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function NotFound() {
    return (
        <>
            <div className='NotFoundContainer'>

                <Navbar active="NotFound" />

                <div className="NotFoundContent">
                    <h1>404</h1>
                    <p>Página no encontrada</p>
                </div>

                <Footer />

            </div>
        </>
    );
}

export default NotFound;
