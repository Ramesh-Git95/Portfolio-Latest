import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Linkedin, AtSign, GitBranch } from "lucide-react";
const Bio = () => {
  return (
    <section className="flex items-end justify-start bg-gradient-to-r from-teal-500 via-teal-500  to-slate-900 text-left md:text-left rounded-xl p-3 md:p-5 shadow-md border-2 border-green-900 border-opacity-100 shadow-green-500 ">
      {/* <div className="flex flex-row">
        <div className="flex flex-col items-start">
          <h1 className="text-lg md:text-2xl font-bold mt-3 text-black text-left font-serif">
            Ramesh Kumar
          </h1>
          <p className="py-2 text-black font-semibold font-serif italic text-sm text-left">
            I'm a Front-end Developer.
          </p>
          <div className="flex flex-row gap-2">
            <a
              href="http://linkedin.com/in/sadeep-chathuranga-ramesh-kumar-ravichandran-a81b95a6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-blue-800  cursor-pointer mt-3  rounded-md border border-blue-700 p-2 size-11 shadow-md shadow-white" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <AtSign className="text-red-600 hover:text-pink-600 cursor-pointer mt-3  rounded-sm border border-red-500 p-2 size-11 shadow-md shadow-white" />
            </a>
            <a
              href="https://github.com/Ramesh-Git95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="text-black hover:text-red-500 cursor-pointer mt-3  rounded-sm border border-blackvvv p-2 size-11 shadow-md shadow-white" />
            </a>
            
          </div>
        </div>
        <div className="grid grid-cols-1 content-center">
        <img
          src="/profile-pic.png"
          alt="profile-picture"
          className="h-32 w-32 shadow-md bg-gray-400 rounded-full ml-2"
        />
        </div>
      </div> */}
      <div className="w-[100%] flex gap-2 justify-end  items-end mb-11">
        <div className="w-[75%] h-[100%] bg-gradient-to-l from-gray-200 to-gray-400 text-black font-bold p-4 font-sm rounded-t-xl rounded-bl-xl"> <TypeAnimation
      sequence={[
        1000,
        'My Name is Ramesh Kumar.',
        1000,
        'I am a Front-End Developer.',
        1000,
        'I am Using React Js',
        1000,
       
      ]}
      wrapper="span"
      deletionSpeed={50}
      speed={20}

      repeat={Infinity}
    /></div>
          <img src="/profile-pic.png" alt="" className="size-[40px] rounded-full object-cover bg-green-700" />

          
      </div>
     
    </section>
  );
};

export default Bio;
