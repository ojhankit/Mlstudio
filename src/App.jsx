import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='app min-h-screen w-full radial-gradient-bg text-white flex flex-col items-center'>
        <Navbar />
        <Hero/>
    </div>
  )
}

export default App;
