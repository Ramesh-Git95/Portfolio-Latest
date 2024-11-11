import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Weather App",
    description:
      "A Simple Weather App where you can check the weather details by entering city name",
    url: "",
    imgUrl: "weather.png",
    status : "Working On"
  },
  {
    name: "E-commerce website",
    description:
      "A Simple Weather App where you can check the weather details by entering city name",
    url: "",
    imgUrl: "/E-commerce.png",
    status : "Finished"
  },
  {
    name: "Project 3",
    description:
      "A Simple Weather App where you can check the weather details by entering city name",
    url: "",
    imgUrl: "food.png",
     status : "Outdated"
  },
  {
    name: "Project 4",
    description:
      "A Simple Weather App where you can check the weather details by entering city name",
    url: "",
    imgUrl: "portfolio.png",
     status : "Working On"
  },
  {
    name: "Weather App",
    description:
      "A Simple Weather App where you can check the weather details by entering city name",
    url: "",
    imgUrl: "weather.png",
     status : "Working On"
  },
  {
    name: "E-commerce website",
    description:
      "A Simple Weather App where you can check the weather details by entering city name",
    url: "",
    imgUrl: "/E-commerce.png",
     status : "Working On"
  },
  {
    name: "Project 3",
    description:
      "A Simple Weather App where you can check the weather details by entering city name",
    url: "",
    imgUrl: "food.png",
     status : "Finished"
  },
  {
    name: "Project 4",
    description:
      "A Simple Weather App where you can check the weather details by entering city name",
    url: "",
    imgUrl: "portfolio.png",
     status : "Outdated"
  },
];
const Projects = () => {
  const initailValue = true;
  const [toggle, setToggle] = useState(initailValue);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const paginationVariants = {
    hidden: {
      opcity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 3;
  const pagesVisited = pageNumber * projectsPerPage;
  const displayProjects = projects
    .slice(pagesVisited, pagesVisited + projectsPerPage)
    .map((project, i) => {
      return (
        <li key={i}>
          <ProjectCard
            name={project.name}
            description={project.description}
            url={project.url}
            imgUrl={project.imgUrl}
            status={project.status}
          />
        </li>
      );
    });
  const pageCount = Math.ceil(projects.length / 3);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <ul className="bg-gradient-to-r from-teal-700 to-gray-400 rounded-xl p-4 border-2 border-green-900 border-opacity-100 shadow-md shadow-green-500">
        <div className="flex flex-row mb-8 justify-between">
          <h1 className="text-3xl text-left font-bold mb-2 text-yellow-400 font-mono animate-pulse">
            {" "}
            Recent Projects
          </h1>
          <button className="flex items-center gap-3" onClick={handleToggle}>
            {toggle ? "View All" : "Recent"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </button>
        </div>

        {
          //toggle
          //   ? projects.slice(0, 2).map((project, i) => (
          //       <li key={i}>
          //         <ProjectCard
          //           name={project.name}
          //           description={project.description}
          //           url={project.url}
          //           imgUrl={project.imgUrl}
          //         />
          //       </li>
          //     )):

          toggle
            ? projects.slice(0, 2).map((project, i) => (
                <li key={i}>
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    url={project.url}
                    imgUrl={project.imgUrl}
                    status={project.status}
                  />
                </li>
              ))
            : displayProjects
        }
        {!toggle ? (
          <ReactPaginate
            breakLabel={<span className="mr-4">...</span>}
            nextLabel={
              <span className="size-10 flex items-center justify-center bg-gray-200 rounded-md text-black shadow-md shadow-black">
                <BsChevronRight />
              </span>
            }
            //onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={
              <span className="size-10 flex items-center justify-center bg-gray-200 rounded-md mr-2 text-black shadow-md shadow-black">
                <BsChevronLeft />
              </span>
            
            }
            containerClassName="flex items-center justify-center mt-5 mb-2"
            pageClassName="block border border-solid border-black hover:bg-gray-200 size-10 flex items-center justify-center rounded-md mr-2"
            pageLinkClassName="text-black"
            activeClassName="bg-gray-200"
            
          />
        ) : (
          ""
        )}
      </ul>
    </>
  );
};

export default Projects
