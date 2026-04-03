import React from 'react';

import Hero from './Component/Home/Hero';
import Threecard from './Component/Home/Threecard';
import Industry from './Component/Home/Industry';
import FiveCard from './Component/Home/FiveCard';
import Pricing from './Component/Home/Pricing';
import Apointment from './Component/Home/Apointment';
import Contact from './Component/Home/Contact';
import Footer from './Component/Home/Footer';

const App = () => {
  return (
    <div className='font-sans'>    
      <Hero/>
      <Threecard/>
      <Industry/>
      <FiveCard/>
      <Pricing/>
      <Apointment/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;