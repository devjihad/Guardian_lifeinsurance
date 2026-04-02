import React from 'react';
import rightbg from '../../assets/rightbg.png'
const Apointment = () => {
    return (
        <div className='bg-gray-900 mt-20'>
            <div className=' container  min-h-screen'>
            <div className='py-16 flex justify-between items-center text-white'>
                <div >
                    <h3 className='text-4xl font-semibold mb-3'>We Have Branches All <br />Over The World</h3>
                     <p className='text-gray-300'>The gradual accumulation of information about atomic and <br />small-scale behaviour during the first quarter of the 20th <br />century, which gave some indications about how small things <br />do behave, produced an increasing confusion which was Heisenberg, and Born.</p>
                </div>

                <img src={rightbg} alt="" />
            </div>
             </div>
        </div>
    );
};

export default Apointment;