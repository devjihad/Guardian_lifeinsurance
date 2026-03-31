import React from 'react';
import banner from './../../assets/background.png'
import Navbar from './Navbar';
const Hero = () => {
    return (
        <div className='bg-cover bg-center min-h-150 r' style={{backgroundImage: `url(${banner})`}}>
             <Navbar/>
            
            <div className='container text-white flex flex-col justify-center items-center mt-14'>
                <h2 className=' text-[58px] font-bold leading-16 '>We Ensure A Best <br /> Insurance Service</h2>
                <p className='my-10'>We know how large objects will act, but things on a <br />small scale just do not act that way.</p>
                <div className='flex gap-3'>
                     <button className='px-5 py-2 border border-gray-400 rounded-xl font-semibold text-[16px] hover:bg-button hover:text-white'>Get Quote Now </button>

                     <button className='px-5 py-2 border border-gray-400 rounded-xl font-semibold flex gap-2 items-center text-[16px] hover:bg-button hover: '>Learn More </button>
                 </div>
            </div>
        </div>
    );
};

export default Hero;