import React from 'react';

import Hero from './Component/Home/Hero';
import Threecard from './Component/Home/Threecard';
import Industry from './Component/Home/Industry';
import FiveCard from './Component/Home/FiveCard';
import Pricing from './Component/Home/Pricing';

const App = () => {
  return (
    <div className='font-sans'>    
      <Hero/>
      <Threecard/>
      <Industry/>
      <FiveCard/>
      <Pricing/>
    </div>
  );
};

export default App;