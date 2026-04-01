import React from 'react';

import Hero from './Component/Home/Hero';
import Threecard from './Component/Home/Threecard';
import Industry from './Component/Home/Industry';
import FiveCard from './Component/Home/FiveCard';

const App = () => {
  return (
    <div className='font-sans'>    
      <Hero/>
      <Threecard/>
      <Industry/>
      <FiveCard/>
    </div>
  );
};

export default App;