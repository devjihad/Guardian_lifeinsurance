import React from 'react';
import right1 from '../../assets/right1.png'
import right2 from '../../assets/right2.png'
const Pricing = () => {
    return (
        <div className='container'>
            <div className='text-center mt-20 mb-12'>
                <h3 className='text-4xl font-bold mb-3'>Pricing</h3>
                <p className="text-[14px] text-gray-500">Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <div className='flex justify-center gap-0.5 w-full'>
                <div className='py-5 px-5 border border-blue-400 w-82 rounded-lg'>
                    <h4 className='text-center text-2xl font-bold my-5 '>FREE</h4>
                    <p className='text-[14px] font-semibold text-gray-500 text-center mb-5'>Organize across all <br />apps by hand</p>
                    <p className='text-xl text-blue-500 text-center font-semibold mb-3 '>0$ per month</p>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold mb-2.5 '><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold  mb-2.5'><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold  mb-2.5'><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold  mb-2.5'><img src={right2} alt="" /> 1GB Cloud Store </h4>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold  mb-2.5'><img src={right2} alt="" /> Email & Comunity Support </h4>

                    <div className='flex justify-center mt-4'>
                        <button className="px-5 py-2 border border-gray-400 rounded-xl font-semibold flex gap-2 items-center text-[16px] hover:bg-button hover:text-white ">Try for Free</button>
                    </div>
                </div>


                <div className='py-5 px-5 border border-blue-400 w-82 rounded-lg bg-gray-800 text-white'>
                    <h4 className='text-center text-2xl font-bold my-5 '>STANDARD</h4>
                    <p className='text-[14px] font-semibold  text-center mb-5'>Organize across all <br />apps by hand</p>
                    <p className='text-xl text-blue-500 text-center font-semibold mb-3 '>0$ per month</p>
                    <h4 className='flex gap-2 items-center  font-semibold mb-2.5 '><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center  font-semibold  mb-2.5'><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center  font-semibold  mb-2.5'><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center  font-semibold  mb-2.5'><img src={right2} alt="" /> 1GB Cloud Store </h4>
                    <h4 className='flex gap-2 items-center  font-semibold  mb-2.5'><img src={right2} alt="" /> Email & Comunity Support </h4>

                    <div className='flex justify-center mt-4'>
                        <button className="px-5 py-2 border border-gray-400 rounded-xl font-semibold flex gap-2 items-center text-[16px] hover:bg-button hover:text-white ">Try for Free</button>
                    </div>
                </div>


                <div className='py-5 px-5 border border-blue-400 w-82 rounded-lg'>
                    <h4 className='text-center text-2xl font-bold my-5 '>PRUMIUM</h4>
                    <p className='text-[14px] font-semibold text-gray-500 text-center mb-5'>Organize across all <br />apps by hand</p>
                    <p className='text-xl text-blue-500 text-center font-semibold mb-3 '>0$ per month</p>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold mb-2.5 '><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold  mb-2.5'><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold  mb-2.5'><img src={right1} alt="" /> Unlimited Product Update</h4>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold  mb-2.5'><img src={right2} alt="" /> 1GB Cloud Store </h4>
                    <h4 className='flex gap-2 items-center text-gray-700 font-semibold  mb-2.5'><img src={right2} alt="" /> Email & Comunity Support </h4>

                    <div className='flex justify-center mt-4'>
                        <button className="px-5 py-2 border border-gray-400 rounded-xl font-semibold flex gap-2 items-center text-[16px] hover:bg-button hover:text-white ">Try for Free</button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Pricing;