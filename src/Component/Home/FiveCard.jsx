import React from 'react';
import one from '../../assets/alien.png'
import two from '../../assets/hooli.png'
import three from '../../assets/lyft.png'
import four from '../../assets/piper-hat.png'
import five from '../../assets/stripe.png'
import six from '../../assets/aws.png'
const FiveCard = () => {
    return (
        <div className='container'>
            <div className='flex justify-center gap-25 mt-40 '>
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
                <img src={five} alt="" />
                <img src={six} alt="" />
            </div>

            <div className='w-full flex justify-between items-center py-4 px-10  bg-linear-to-r  from-gray-800   via-stone-600  to-zinc-700  text-white rounded-lg mt-10 '>
                <h3 className='text-3xl font-semibold'>Subscribe for Latest <br /> Newsletter </h3>
                <div className='relative w-1/2'>
                    <input type="email" placeholder='Your email'  className='w-full text-xl py-3 px-5 bg-white text-black rounded-lg pr-35 border-0 outline-0'/>
                    <button className="px-5 py-2.5 text-black border border-gray-400 rounded-xl font-semibold flex gap-2 items-center text-[16px] hover:bg-button hover:text-white absolute top-1 right-1 ">Subscribe </button>
                </div>
            </div>
        </div>
    );
};

export default FiveCard;