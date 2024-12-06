import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, AtSign, GitBranch } from "lucide-react";
const Bio = () => {
  return (
    <section className="w-64 h-[40rem] bg-gradient-to-r from-teal-500 via-teal-500  to-slate-900 text-left md:text-left rounded-xl p-3 md:p-5 shadow-md border-2 border-green-900 border-opacity-100 shadow-green-500 ">
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
      <div className="w-[100%] flex flex-col gap-2 justify-center  items-center text-center">
        {/* <div className="w-[75%] h-[100%] bg-gradient-to-l from-gray-200 to-gray-400 text-black font-bold p-4 font-sm rounded-t-xl rounded-bl-xl shadow-lg shadow-green-900">
          {" "}
          <TypeAnimation
            sequence={[
              1000,
              "My Name is Ramesh Kumar.",
              1000,
              "I am a Front-End Developer.",
              1000,
              "I am Using React Js",
              1000,
            ]}
            wrapper="span"
            deletionSpeed={50}
            speed={20}
            repeat={Infinity}
          />
        </div> */}
        <img
          src="/profile.png"
          alt=""
          className="size-40 rounded-[3.5rem] object-cover bg-gray-900 px-2 py-2 mb-2 mt-2"
        />
        <h1 className="text-4xl font-bold mb-2">Ramesh Kumar.</h1>
        <button className="flex flex-row items-center text-black bg-transparent w-auto h-10 border-black shadow-black shadow-md rounded-xl font-bold text-sm">
          Front end Developer
        </button>
        <hr className="px-24 mt-4 border border-green-200"></hr>
      </div>
      <div className="flex flex-col mt-4 items-start mx-2">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            className="size-10 p-3 bg-gray-900 rounded-[9px] shadow-cyan-200 shadow-inner"
          >
            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <div>
            <text className="flex items-start text-xs font-bold text-gray-600">EMAIL</text>
            <text className="flex items-start font-bold text-black text-xs">rameshkumara@gmail.com</text>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="gold"
            className="size-10 p-2 bg-gray-900 rounded-[9px] shadow-cyan-200 shadow-inner"
          >
            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <div>
            <text className="flex items-start">EMAIL</text>
            <text className="flex items-start">ramesh</text>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-end  mt-5 gap-2">
        <div className="flex flex-row w-2/3 justify-end gap-1">

        
          <button className="flex h-8 w-20 items-center justify-center text-sm gap-2">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            CV
          </button>
        </div>
        <div className="flex flex-row w-1/3 gap-2">
          <a
            href="https://github.com/Ramesh-Git95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch className="text-black hover:text-gray-200 cursor-pointer rounded-sm border-2 border-black p-1 size-8 shadow-sm shadow-black" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <AtSign className="text-red-600 hover:text-gray-200 cursor-pointer   rounded-sm border-2 border-red-500 p-1 size-8 shadow-sm shadow-red-400" />
          </a>
          <a
            href="http://linkedin.com/in/sadeep-chathuranga-ramesh-kumar-ravichandran-a81b95a6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-white hover:text-gray-200  cursor-pointer rounded-sm border-2 border-blue-800 p-1 size-8  shadow-sm shadow-white" />
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default Bio;
