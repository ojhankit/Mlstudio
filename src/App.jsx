import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Reviews from './components/Reviews';
import Subscription from './components/Subscription';
import FAQ from './components/FAQ';
import Plans from './components/Plans';
import Footer from './components/Footer';
import News from './components/News';

const App = () => {
  return (
    <div className='app min-h-screen w-full text-white flex flex-col items-center'>
        <div className='radial-gradient-bg w-full flex flex-col items-center'>
            <Navbar />
            <Hero/>
        </div>
        <Features/>
        <Workflow />
        <Plans/>
        <News/>
        <Reviews/>
        <FAQ/>
        <Subscription/>
        <Footer/>
    </div>
  )
}

export default App;
