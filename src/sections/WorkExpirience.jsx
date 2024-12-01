import React from 'react'
import {motion} from "framer-motion"


const skills =[
  {
    name:"MySQL",
    logo: "mysql.png",
    time: "2022"
  },
  {
    name:"HTML,CSS",
    logo: "html.png",
    time: "2022"
  },
  {
    name:"JavaScript",
    logo: "javascript.png",
    time: "2022"
  },

  {
    name:"Bitbucket,GitHub",
    logo: "github.png",
    time: "2023"
  },

];
const fadeInAnimationVariants = {
    initial:{
      opacity: 0,
      x:-100,
    },
    
      animate: (index)=>({
        opacity: 1,
        x:0,
        transition: {
          delay: 0.25 * index,
          duration: 0.5
          
        }
      })
  }
const WorkExpirience = () => {
  return (
    <section
      className="flex flex-col justify-center divide-y divide-slate-200 border-2 border-green-900 border-opacity-100 rounded-xl 
    bg-gradient-to-r from-teal-700 to-gray-800 shadow-md shadow-green-500"
    >
      <div className="text-left rounded-xl p-2 md:-p-2 shadow-md w-full max-w-full mx-auto h-full">
        <h2 className="text-3xl md:text-3xl text-yellow-500 font-bold animate-pulse font-mono mx-auto grid gap-x-16 md:gap-x-52 grid-cols-2">
          Experience
          {/* <img src="experience.png" alt="" className="mx-auto w-10 h-10 border-b-2 border-yellow-400 rounded-lg brightness-105 saturate-200"/> */}
          
        </h2>
        
        
         
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-20">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-36">
                {skills.map((skill, index) => (
                  <div
                    className="relative pl-8 sm:pl-32 py-6 group"
                    key={index}
                  >
                    <div className="font-caveat font-medium text-s text-black mb-1 sm:mb-0 bg-gradient-to-l from-gray-400 to-gray-500  shadow-lg p-2 rounded-md shadow-black">
                      <motion.div
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                      >
                        {skill.name}
                      </motion.div>
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-black sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-700 after:border-4 after:box-content after:border-white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <motion.time
                          variants={fadeInAnimationVariants}
                          initial="initial"
                          whileInView="animate"
                          custom={index}
                          className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-s font-semibold uppercase w-20 h-10 mb-3 sm:mb-0 text-black bg-gradient-to-l from-gray-100 to-slate-400 rounded-sm  border-2 border-black"
                        >
                          {skill.time}
                        </motion.time>
                        <motion.div
                          variants={fadeInAnimationVariants}
                          initial="initial"
                          whileInView="animate"
                          custom={index}
                          className="text-s font-bold text-slate-90 inline-flex gap-2"
                        >
                          <svg
                            className="h-5 w-5 mt-1 text-red-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <p className="text-sm text-black">
                            Colombo, Sri Lanka
                          </p>
                        </motion.div>
                      </div>
                      <motion.div
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        className="text-black text-xs font-bold"
                      >
                        abo eveniet! A culpa, esse eaque architecto nulla optio
                        mollitia aliquam.
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExpirience