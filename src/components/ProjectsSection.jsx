"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
  {
    id: 1,
    title: "React Coffee Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Coffee Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Coffee Website",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All","Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );


  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={setTag} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={setTag} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={setTag} name="Mobile" isSelected={tag === "Mobile"} />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
