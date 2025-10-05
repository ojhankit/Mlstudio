import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';

const App = () => {
  return (
    <div className='app min-h-screen w-full radial-gradient-bg text-white flex flex-col items-center'>
        <Navbar />
        <Hero/>
        <Features/>
        <Workflow />
    </div>
  )
}

export default App;
