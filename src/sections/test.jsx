import React, {useState} from 'react';

const Work = () => {
    
const projects = [
{
id: 1,
title: 'E-commerce',
description: 'An E-commerce website with basic functionality such as Add to Cart, View Products, Show prices, and etc',
image: 'ecom.jpg',
tags: ['#ReactJs', '#Tailwind']
},
{
id: 2,
title: 'Weather App',
description: 'A simple weather App using OpenWeatherAPI where you can check the weather of the city by entering the city name',
image: 'weather.jpg',
tags: ['#ReactJS', '#HTML/CSS', '#OpenWeatherAPI']
},
{
id: 3,
title: 'Social Media App',
description: 'A Social Media platform to connect with friends and share moments',
image: 'social.jpg',
tags: ['#ReactJS', '#NodeJS', '#MongoDB']
},
{
id: 4,
title: 'Portfolio',
description: 'A portfolio website showcasing personal projects and skills',
image: 'portfolio.jpg',
tags: ['#ReactJS', '#Gatsby', '#GraphQL']
}
];

const [currentPage, setCurrentPage] = useState(1);
const projectsPerPage = 2;

const indexOfLastProject = currentPage * projectsPerPage;
const indexOfFirstProject = indexOfLastProject - projectsPerPage;
const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

const totalPages = Math.ceil(projects.length / projectsPerPage);

const handlePrevPage = () => {
if (currentPage > 1) {
setCurrentPage(currentPage - 1);
}
};

const handleNextPage = () => {
if (currentPage < totalPages) {
setCurrentPage(currentPage + 1);
}
};

return (
<section>
<h1 className='text-3xl text-left font-bold my-6 text-yellow-400 font-mono animate-pulse'>All Projects</h1>
<div className='bg-gradient-to-r from-teal-700 to-gray-400 text-left rounded-xl p-8 border-2 border-green-900'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-9'>
{currentProjects.map(project => (
<div key={project.id} className="max-w-sm rounded-lg overflow-hidden border-2 border-white shadow-lg mb-6">
<div className="px-6 py-6 bg-slate-950">
  <div className='flex justify-center items-center'>
    <img className="h-48 w-48 rounded-lg pb-2 mb-3 flex justify-center items-center" src={project.image}
         alt={project.title}/>
  </div>
  <div className="font-bold text-xl mb-4 text-green-600">{project.title}</div>
  <p className="text-white">{project.description}</p>
</div>
<div className="px-20 pt-4 pb-4 bg-slate-950 rounded-b-lg flex">
  {project.tags.map((tag, index) => (
      <span key={index}
            className="inline-block bg-gray-400 rounded-sm px-3 py-1 text-sm font-bold text-black mr-2 mb-2">{tag}</span>
  ))}
</div>
</div>
      ))}
    </div>

  <div className='flex justify-center items-center mt-4'>
    <button
        className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
    >
      Previous
    </button>
    <button
        className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
</div>
</section>
)
;
};

export default Work;