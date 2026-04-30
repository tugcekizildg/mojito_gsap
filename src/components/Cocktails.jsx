import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cocktailLists, drinkLists } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 30%',
          end: 'bottom 80%',
          scrub: true,
        },
      });

      tl.from('#c-left-leaf', { x: -200, y: 10, ease: 'none' }).from(
        '#c-right-leaf',
        { x: 100, y: 50, ease: 'none' },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderList = (title, data) => (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map(({ name, country, detail, price }) => (
          <li key={`${name}-${price}`}>
            <div className='me-28'>
              <h3>{name}</h3>
              <p>
                {country} | {detail}
              </p>
            </div>
            <span>- {price}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section ref={sectionRef} id='cocktails' className='noisy'>
      <img
        src='/images/cocktail-left-leaf.png'
        alt=''
        aria-hidden='true'
        id='c-left-leaf'
      />
      <img
        src='/images/cocktail-right-leaf.png'
        alt=''
        aria-hidden='true'
        id='c-right-leaf'
      />

      <div className='list'>
        {renderList('Most popular cocktails:', cocktailLists)}
        {renderList('Most loved drinks:', drinkLists)}
      </div>
    </section>
  );
};

export default Cocktails;
