import React from 'react';
import './Home.css';
import img1 from '../images/keyboard-home.png';

const Home = () => {
    return (
        <div className='product-container my-5'>
            <div className="written-container">
                <h1>Your next <span>CONSOLE</span></h1>
                <h1>Your best <span>QWERTY</span></h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique officia quis quasi minima, odit, hic adipisci veritatis delectus eius ullam tempora asperiores, totam pariatur perspiciatis inventore. Illum, dolor non!</h5>
            </div>

            <div className="img-container">
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Home;