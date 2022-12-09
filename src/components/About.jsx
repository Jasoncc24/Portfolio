import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-6">
        Hello, I'm a Software Engineer building my version of the Digital World one step at a time. 
        I find enjoyment in solving problems and helping people live happier lives through leveraging technology. 
        I bring my strong entrepreneurial mindset to life by building robust scalable software that has a direct impact on end-users with the goal of improving the customer experience.
        </p>

      </div>
    </div>
  );
};

export default About;
