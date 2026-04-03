import React from 'react';
import rightbg from '../../assets/rightbg.png'
import right from '../../assets/media.png'
const Apointment = () => {
    return (
        <div className='bg-gray-900 mt-20 relative'>
            <div className=' container  min-h-200'>
            <div className='py-16 flex justify-between items-center text-white'>
                <div >
                    <h3 className='text-4xl font-semibold mb-3'>We Have Branches All <br />Over The World</h3>
                     <p className='text-gray-300'>The gradual accumulation of information about atomic and <br />small-scale behaviour during the first quarter of the 20th <br />century, which gave some indications about how small things <br />do behave, produced an increasing confusion which was Heisenberg, and Born.</p>
                </div>

                <img src={rightbg} alt="" />
            </div>
             </div>

           <div className='absolute top-120 right-1/2 translate-x-1/2'>
             <div className=' bg-gray-50 w-210 flex rounded-lg '>
                <div className='w-1/3 '>
                    <img src={right} alt="" />
                </div>
                <div className='w-2/3 mx-8'>
                    <h4 className='text-3xl font-bold text-center my-10 '>Book Apoinment</h4>
                    <div className='flex flex-col gap-2.5 mb-2.5 '>
                        <label htmlFor="" className='text-[14px] font-semibold'>Name*</label>
                        <input type="text" placeholder='Full Name' className='py-2 px-5 border border-gray-500 rounded-lg outline-0 bg-gray-200 text-[16px] font-semibold'/>
                    </div>

                    <div className='flex flex-col gap-2.5 mb-2.5'>
                        <label htmlFor="" className='text-[14px] font-semibold'>Email*</label>
                        <input type="text" placeholder='Enter Email' className='py-2 px-5 border border-gray-500 rounded-lg outline-0 bg-gray-200 text-[16px] font-semibold'/>
                    </div>

                    <div className='flex flex-col gap-2.5 mb-2.5'>
                        <label htmlFor="" className='text-[14px] font-semibold'>Depertment*</label>
                        <input type="text" placeholder='Enter Depertment' className='py-2 px-5 border border-gray-500 rounded-lg outline-0 bg-gray-200 text-[16px] font-semibold'/>
                    </div>

                    <div className='flex flex-col gap-2.5 mb-10'>
                        <label htmlFor="" className='text-[14px] font-semibold'>Time*</label>
                        <input type="text" placeholder='Enter your time' className='py-2 px-5 border border-gray-500 rounded-lg outline-0 bg-gray-200 text-[16px] font-semibold'/>
                    </div>

                    <button className="px-5 py-2 w-full text-center  border border-gray-400 rounded-xl font-semibold   text-[16px] hover:bg-button hover:text-white "> Book Apoinment</button>
                   
                   
                </div>
            </div>
           </div>

        </div>
    );
};

export default Apointment;