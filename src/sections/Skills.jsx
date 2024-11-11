import Tag from "../components/Tag";
import {animate, delay, motion} from "framer-motion";


const fadeInAnimationVariants = {
  initial:{
    opacity: 0,
    y:100,
  },
  
    animate: (index)=>({
      opacity: 1,
      y:0,
      transition: {
        delay: 0.6 * index,
      }
    })
}
const skills =[
  {
    name:"React Js",
    logo:"react.svg"
  },
  {
    name:"Tailwind CSS",
    logo:"tailwind.svg"
  },
  {
    name:"JavaScript",
    logo: "javascript.png"
  }
  ,
  {
    name:"MySQL",
    logo: "mysql.png"
  },
  {
    name:"HTML,CSS",
    logo: "html.png"
  },
 

  {
    name:"GitHub",
    logo: "github.png"
  },

  {
    name:"Debugging",
    logo: "debugging.png"
  },
  {
    name:"On Time",
    logo: "ontime.png"
  },
  
    
];

const Skills = () => {
  return (
  <section className="bg-gradient-to-r from-teal-600 to-gray-800 text-left rounded-xl p-2  shadow-md shadow-green-500 mt-6 mb-6 border-2 border-green-900 border-opacity-100">
    <h2 className="text-3xl md:text-3xl text-yellow-500 mb-2 font-mono font-bold animate-pulse mx-auto  grid s:gap-x-64 md:gap-x-52 grid-cols-2">
      Skills
      {/* <img src="requirements.png" alt="" className="self-center mx-auto w-10 h-10 border-b-2 border-yellow-400 rounded-lg brightness-105 saturate-200"/> */}
    </h2>
    <ul className="flex flex-wrap leading-10">
      {skills.map((skill,index)=>(
        <motion.li 
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        
        
        viewport={{
          once:true,
        }}
        custom={index}
        className="mr-1 mb-2" key={index}>
          <Tag 
          name={skill.name}
          logo={skill.logo}/>
          </motion.li>
      ))}
    </ul>
  </section>
  )
}

export default Skills