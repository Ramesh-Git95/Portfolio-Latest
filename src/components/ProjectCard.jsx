import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ name, description, url, imgUrl, status }) => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0.7, 0.5, 0.5, 1.1],
      }}
      className="flex p-4 px-rounded-md gap-4 mb-5 items-center bg-gradient-to-l from-gray-100 to-gray-400 hover:bg-slate-400 mt-1  rounded-md shadow-lg shadow-black"
      href={url}
    >
      <img
        src={imgUrl}
        alt={name}
        height="80"
        width="80"
        className="object-contain bg-transparent brightness-105 border-2 ml-4 p-2 border-white rounded-full"
      />
      <div className="flex flex-col flex-grow">
        <p className="group-hover/item:text-black text-xl text-left text-black font-bold underline">
          {name}
        </p>
        <p className="text-black text-left mt-2">{description}</p>
        <div className="flex items-end justify-end gap-2">
          <button className="w-auto h-9  flex justify-center items-center bg-white text-black font-semibold rounded-md text-xs disabled gap-1 shadow-md shadow-black">
            <img src="github.png" className="size-5"/>
            
            GitHub

          </button>
          <button className="w-auto h-9 flex justify-center items-center bg-white text-black font-semibold rounded-md text-xs disabled gap-1 shadow-md shadow-black">
          <img src={status == "Working On" ? "dotyellow.png" :status == "Finished" ? "dotcomplete.png" : "dotoutdate.png"} className="size-5"/>
           {status}</button>
        </div>
      </div>

      <div>
        <ChevronRight className="text-black mb-2" />
      </div>
    </motion.a>
  );
};

export default ProjectCard;
