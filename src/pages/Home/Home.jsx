import "./Home.scss";

import React from "react";
import Header from "../../sections/Home/Header/Header";
import AboutMe from "../../sections/Home/AboutMe/AboutMe";
import HireMe from "../../sections/Home/HireMe/HireMe";
import ProjectsList from "../../sections/Home/Projects/ProjectsList";

function Home() {
  return (
    <div className="dark:bg-gray-700">
      <Header />
      <hr />
      <AboutMe />
      <hr />
      <ProjectsList />
      <hr />
      <HireMe />
    </div>
  );
}

export default Home;
