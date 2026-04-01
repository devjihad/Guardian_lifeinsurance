import React from 'react';
import one from '../../assets/alien.png'
import two from '../../assets/hooli.png'
import three from '../../assets/lyft.png'
import four from '../../assets/piper-hat.png'
import five from '../../assets/stripe.png'
const FiveCard = () => {
    return (
        <div className='container'>
            <div className='flex justify-center gap-22 mt-30 '>
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
                <img src={five} alt="" />
            </div>
        </div>
    );
};

export default FiveCard;