import React from 'react';
import utd_pretty from '../assets/utd_pretty.png';
import './housing.css'; 
import Navbar from './Navbar'; 

const Capella = () => {
  return (
    <div className="capella-container">
      <div className="banner">
        <Navbar/>
        <img src={utd_pretty} alt="UTD Pretty" className="banner-image" />
        <div className="banner-text">Capella Hall</div>
      </div>
        <div>
            <button className='review'>Write a review</button>
        </div>
    </div>
  );
};

export default Capella;