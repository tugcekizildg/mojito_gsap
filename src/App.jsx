import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className='text-8xl flex-center text-indigo-300 min-h-screen'>
      Hello, GSAP!
    </div>
  );
};

export default App;
