import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <div className='h-[500px]'></div>
      <Services />
      <div className='h-[500px]'></div>
      <Work />
      <div className='h-[1000px]'></div>
      <Contact />
      <div className='h-[500px]'></div>
    </div>
  );
};

export default App;