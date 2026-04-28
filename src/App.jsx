import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <div className='h-dvh bg-black'></div>
      </main>
    </div>
  );
};

export default App;
