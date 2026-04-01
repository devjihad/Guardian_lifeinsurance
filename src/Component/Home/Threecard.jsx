import React from 'react';
import man from '../../assets/menIcon.png'
import file from '../../assets/file.png'
import save from '../../assets/save.png'
const Threecard = () => {
    return (
        <div className='bg-gray-200 py-30'>
            <div className='container flex gap-10 justify-center'>
                <div className='  px-8 py-5 rounded-lg flex flex-col items-center gap-1'>
                    <img src={file} alt="" />
                    <h3 className="text-[20px] font-bold">Peace of Ming</h3>
                    <p className="text-[14px] text-gray-500 text-center">So it really behaves like neither. <br />Now we have given up. </p>
                </div>
                <div className='  px-8 py-5 rounded-lg flex flex-col items-center gap-1'>
                    <img src={save} alt="" />
                    <h3 className="text-[20px] font-bold">Set for Life</h3>
                    <p className="text-[14px] text-gray-500 text-center">They were used to create the <br />machines that launched </p>
                </div>
                <div className='  px-8 py-5 rounded-lg flex flex-col items-center gap-1'>
                    <img src={man} alt="" className=' w-18' />
                    <h3 className="text-[20px] font-bold">100% Satisfaction</h3>
                    <p className="text-[14px] text-gray-500 text-center">So it really behaves like neither. <br />Now we have given up. </p>
                </div>
            </div>
        </div>
    );
};

export default Threecard;