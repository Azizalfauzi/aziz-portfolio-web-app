import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Skill from "./components/Skill";
import WorkingExperience from "./components/WorkingExperience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skill />
      <WorkingExperience />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default App;
