import React from 'react';
import  './Home.css'
import Header from '../Shared/Header/Header';
const Home = () => {
    return (
        <div>
            <div className="container-fluid pb-5" id="banner">
        <Header />
        
        <div className='text-center mt-5 up'>
            <h1 className='text-center text-white headline display-2 pt-5'>Creating Value Globally</h1>
            <p className='text-white fs-6'>Your Trusted Furniture Partner</p>
            <h4 className='headline text-warning'>MAHIRA FURNITURE</h4>
            <button class="btn btn-danger mt-4 mb-3">Contact Us</button>
        </div>
        </div>
        
        </div>
        
    );
};

export default Home;