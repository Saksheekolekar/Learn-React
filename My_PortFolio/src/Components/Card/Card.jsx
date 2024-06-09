// src/components/Card.js
import React from 'react';

const Card = ({ image,name, description, technologies, link, isActive }) => {
  return (
    <div className={`flex flex-col items-center p-4  dark:bg-slate-700 bg-white shadow-md rounded-lg transform transition-transform ${isActive ? 'scale-105 dark:shadow-slate-200 shadow-black shadow-lg' : 'scale-100'}`}>
      <img src={image} alt="Project" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="mt-4 text-center">
        <p className="text-lg dark:text-slate-50 font-serif font-bold">{name}</p>
        <p className=" font-semibold text-wrap text-sm  text-slate-500 dark:text-slate-500">{description}</p>
        <p className="mt-2 font-mono text-wrap dark:text-blue-200 hover:text-gray-900 hover:underline text-gray-600">{technologies.join('  ')}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block   bg-transparent shadow-lg border-2 border-double border-separate dark:border-zinc-600 text-zinc-500 dark:text-white py-2 px-4 rounded-lg"
        >
          Explore ↗️
        </a>
      </div>
    </div>
  );
};

export default Card;
