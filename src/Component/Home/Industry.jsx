import React from 'react';
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import review from '../../assets/Ratting.png'
const Industry = () => {
    return (
        <div className='container'>
            <div className='text-center mt-20 mb-12'>
                <h3 className='text-4xl font-bold mb-3'>Industry</h3>
                <p className="text-[14px] text-gray-500">Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <div className='flex justify-between gap-8'>
                <div  className='w-75 px-8 py-8 rounded-lg bg-gray-100 flex flex-col items-center gap-3'>
                    <img src={user1} alt="" className='w-30' />
                    <p className="text-[14px] text-gray-500 text-center">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <div className='flex gap-2'>
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                    </div>

                </div>
                <div className='w-75 px-8 py-8 rounded-lg bg-gray-100 flex flex-col items-center gap-3'>
                    <img src={user2} alt=""  className='w-30' />
                    <p  className="text-[14px] text-gray-500 text-center">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <div className='flex gap-2'>
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                    </div>

                </div>
                <div className='w-75 px-8 py-8 rounded-lg bg-gray-100 flex flex-col items-center gap-3'>
                    <img src={user3} alt=""  className='w-30'  />
                    <p className="text-[14px] text-gray-500 text-center">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <div className='flex gap-2'>
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                    </div>

                </div>
                <div className='w-75 px-8 py-8 rounded-lg bg-gray-100 flex flex-col items-center gap-3'>
                    <img src={user3} alt=""  className='w-30'  />
                    <p className="text-[14px] text-gray-500 text-center">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <div className='flex gap-2'>
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                        <img src={review} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Industry;