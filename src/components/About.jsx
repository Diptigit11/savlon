import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white p-6 font-poppins">

      <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">Check out the <span className="text-red-500">Features</span> of our App</h1>

      {/* Card Container Start */}
      <div className="flex flex-wrap justify-center">

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img src="images/database-icon.svg" alt="" className="h-20 m-6" />
          <h2 className="text-center px-2 pb-5">Database Support</h2>
          <a href="#" className="bg-purple-800 text-white p-3 text-center hover:bg-purple-500 transition-all duration-500">Know More</a>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img src="images/email-icon.svg" alt="" className="h-20 m-6" />
          <h2 className="text-center px-2 pb-5">Email Support</h2>
          <a href="#" className="bg-purple-800 text-white p-3 text-center hover:bg-purple-500 transition-all duration-500">Know More</a>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img src="images/chat-icon.svg" alt="" className="h-20 m-6" />
          <h2 className="text-center px-2 pb-5">Chat Support</h2>
          <a href="#" className="bg-purple-800 text-white p-3 text-center hover:bg-purple-500 transition-all duration-500">Know More</a>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img src="images/terminal-icon.svg" alt="" className="h-20 m-6" />
          <h2 className="text-center px-2 pb-5">Terminal Commands</h2>
          <a href="#" className="bg-purple-800 text-white p-3 text-center hover:bg-purple-500 transition-all duration-500">Know More</a>
        </div>
        </div>
    </div>
  );
};

export default About;
