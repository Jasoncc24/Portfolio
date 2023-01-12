import React from "react";

//images
import weather from '../assets/portfolio/weather.png'
import memoryM from '../assets/portfolio/memorymatchg.png'
import Mernwb from '../assets/portfolio/workoutbuddy.png'
import Enchating from '../assets/portfolio/salon.png'
import Todo from '../assets/portfolio/Todoapp.png'
import xpense from '../assets/portfolio/xpense.png'




const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: xpense,
      link: 'https://xpense-t.netlify.app/',
      repo: 'https://github.com/Jasoncc24/Xpense'
    },
    {
      id: 2,
      src: Enchating,
      link: 'https://enchanting-salon.netlify.app/',
      repo: 'https://github.com/Jasoncc24/Enchanting-Salon-'
    },
    {
      id: 3,
      src: Mernwb,
      link: '',
      repo: 'https://github.com/Jasoncc24/Backend--WorkoutBuddy'
    },
    {
      id: 4,
      src: Todo,
      link: 'https://todo-app-tracker.netlify.app/',
      repo: 'https://github.com/Jasoncc24/Todo-app-CRUD-'
    },
    {
      id: 5,
      src: weather,
      link: 'https://leafy-youtiao-d19eb0.netlify.app/',
      repo: 'https://github.com/Jasoncc24/React-Weather-App'
    },
    {
      id: 6,
      src: memoryM,
      link: 'https://rainbow-kashata-2d4307.netlify.app/',
      repo: 'https://github.com/Jasoncc24/Memory-Match-Game'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of the cool things i built</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
