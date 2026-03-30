import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import logo from './../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center container text-white py-3'>
            <img src={logo} alt=""  className='w-30 h-16'/>
            <ul className='flex items-center gap-5 font-semibold text-[16px] '>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>

            <div className='flex gap-3'>
                <button className='px-5 py-2 border border-gray-400 rounded-xl font-semibold text-[16px] hover:bg-button hover:text-white'>Login</button>
                <button className='px-5 py-2 border border-gray-400 rounded-xl font-semibold flex gap-2 items-center text-[16px] hover:bg-button hover:text-white '>Become a Member <IoMdArrowRoundForward/></button>
            </div>

        </div>
    );
};

export default Navbar;