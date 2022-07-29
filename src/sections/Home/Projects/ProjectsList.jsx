import React from "react";
import "./ProjectsList.scss";
import notepad from "./../../../assets/images/notepad.jpeg";
import pigeon from "./../../../assets/images/pigeon.png";
import fishermans from "./../../../assets/images/fishermans.png";
import pigeon_admin from "./../../../assets/images/pigeon-admin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProjectsList(props) {

  const projects = [
    {
      title: "Pigeon Arabia",
      description: "Web Based Ecommerce Project",
      type: "web",
      id: 1,
      slug: "pigeon",
      image: pigeon
    },
    {
      title: "Fishermans Cove Resort",
      description: "Web Based Ecommerce Project",
      type: "web",
      id: 2,
      slug: "fisherman",
      image: fishermans
    },
    {
      title: "Admin and CMS Panel",
      description: "Web Based Admin Panel",
      type: "web",
      id: 3,
      slug: "eahm",
      image: pigeon_admin
    },
  ];
  return (
    <div className="container mx-auto py-20 text-gray-700 dark:text-white">
      <div className="flex flex-col items-center">
        <p
          className="center text-2xl mb-4 inline-block font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
          style={{
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          My Projects
        </p>
        <h1 className="text-5xl text-center font-semibold mb-8 dark:text-white">
          Some of My Recent Projects
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-8 ">
        {projects.map((x) => {
          return (
            <div className="col-span-4">
              <div
                className="project-tile px-4 py-16 rounded-lg"
                style={{ backgroundImage: `url(${x.image})`, backgroundSize: 'cover' }}
              >
                <h1 className="text-3xl font-extrabold mb-4">{x.title}</h1>
                <p className="text-md font-semibold">{x.description}</p>
                <button
                  className="z-10 text-white active:bg-red-600 mt-4 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-red-500"
                  type="button"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className=" text-white flex items-center active:bg-red-600 m-auto mt-4 font-bold uppercase text-sm px-8 py-4 rounded-full shadow-xl hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 bg-red-500"
        type="button"
      >
        View All Projects <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
    </div>
  );
}

export default ProjectsList;
