import React from 'react';
import Card from '../Card/Card';
/// src/components/CardContainer.js
import { useState, useEffect, useRef } from 'react';


const CardContainer = ({ cards }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleScroll = () => {

    const container = containerRef.current;

    const scrollPosition = container.scrollLeft + container.offsetWidth / 58;

    const cardWidth = container.children[0].offsetWidth;

    const newIndex = Math.round(scrollPosition / cardWidth);

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative  bg-slate-600 mt-4  dark:bg-opacity-100 bg-opacity-30">
      <h1 className='text-2xl text-center font-Embed_code dark:bg-transparent underline dark:text-slate-50  bg-transparent bg-opacity-50 '> Some Highlight Projects</h1>

      <div
        ref={containerRef}
        className="flex lg:mx-64 p-8 overflow-x-auto hide-scrollbar   space-x-14"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-none w-72  mx-2  `}
          >
            <Card {...card} isActive={index === currentIndex} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
