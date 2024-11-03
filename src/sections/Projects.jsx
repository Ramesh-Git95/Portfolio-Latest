import React from 'react'
import ProjectCard from '../components/ProjectCard';
const projects = [
    {
        name:"Weather App",
        description: "A Simple Weather App where you can check the weather details by entering city name",
        url:"",
        imgUrl:"weather.png"

    },
    {
        name:"E-commerce website",
        description: "A Simple Weather App where you can check the weather details by entering city name",
        url:"",
        imgUrl:"/E-commerce.png"

    },
    {
        name:"Project 3",
        description: "A Simple Weather App where you can check the weather details by entering city name",
        url:"",
        imgUrl:"food.png"
    },
    {
        name:"Project 4",
        description: "A Simple Weather App where you can check the weather details by entering city name",
        url:"",
        imgUrl:"portfolio.png"

    }


];
const Projects = () => {
  return (
   <>
    
    <ul className='bg-gradient-to-r from-teal-700 to-gray-400 rounded-xl p-4 border-2 border-green-900 border-opacity-100'>
        
        <div className='flex flex-row mb-8 justify-between'>
        <h1 className='text-3xl text-left font-bold mb-2 text-yellow-400 font-mono animate-pulse'> Recent Projects 

</h1>
    <button className='flex items-center gap-3'>View All<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
      <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
    </svg> </button></div>

        {projects.map((project,i)=>(
            <li key={i}>
           <ProjectCard
           name={project.name}
           description={project.description}
           url={project.url}
           imgUrl={project.imgUrl}/>
           </li>
        ))}
    </ul>
   </>
  )
}

export default Projects