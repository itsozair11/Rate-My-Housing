import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[black]' onClick={() => navigate('/WelcomePage')}>RateMyHousing</h1>
      <ul className='hidden md:flex'>
      </ul>
     
      
    </div>
  );
};

export default Navbar;