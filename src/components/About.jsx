import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const titleSplit = new SplitText('#about h2', { type: 'words' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#about',
            start: 'top center',
          },
        });

        tl.from(titleSplit.words, {
          opacity: 0,
          yPercent: 100,
          duration: 1,
          ease: 'expo.out',
          stagger: 0.02,
        }).from(
          '.top-grid div, .bottom-grid div',
          {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.04,
          },
          '-=0.5',
        );

        return () => {
          titleSplit.revert();
        };
      }, root);

      return () => ctx.revert();
    },
    { scope: root },
  );

  return (
    <div id='about' ref={root}>
      <div className='mb-16 md:px-0 px-5'>
        <div className='content'>
          <div className='md:col-span-8'>
            <p className='badge'>Best Cocktails</p>
            <h2>
              Where every detail matters <span className='text-white'>- </span>
              from muddle to garnish
            </h2>
          </div>
          <div className='sub-content'>
            <p>
              Every cocktail we serve is a reflection of our possession with a
              touch of art. That core is what makes us special. Truely unique
              and unforgettable - from the first muddle to the last garnish.
            </p>
            <div>
              <p className='md:text-3xl text-xl font-bold'>
                <span>4.5</span>/5
              </p>
              <p className='text-sm text-white-100'>
                More than +1000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='top-grid'>
        <div className='md:col-span-3'>
          <div className='noisy'></div>
          <img
            src='/images/abt1.png'
            alt='A man preparing a cocktail at a bar'
          />
        </div>
        <div className='md:col-span-6'>
          <div className='noisy'></div>
          <img
            src='/images/abt2.png'
            alt='People drinking cocktails at a bar and they are smiling and have fun'
          />
        </div>
        <div className='md:col-span-3'>
          <div className='noisy'></div>
          <img src='/images/abt5.png' alt='A man preparing special cocktail' />
        </div>
      </div>

      <div className='bottom-grid'>
        <div className='md:col-span-8'>
          <div className='noisy'></div>
          <img
            src='/images/abt3.png'
            alt='Different colorful cocktails standing on the table'
          />
        </div>
        <div className='md:col-span-4'>
          <div className='noisy'></div>
          <img
            src='/images/abt4.png'
            alt='An orangy cocktail standing on the table'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
