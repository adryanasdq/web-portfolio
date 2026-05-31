import { useState } from "react";

import { defaultProject, projects } from "@/data/static/project-static";
import { IProject } from "@/data/type/project";

import Section from "@/components/section";

import ProjectCard from "./components/projects-card";


const Projects = () => {
  const [project, setProject] = useState(defaultProject);

  const openModal = (project: IProject) => {
    setProject(project);

    (document.getElementById("project-card") as HTMLDialogElement).showModal();
  }

  return (
    <>
      <ProjectCard project={project} />

      <Section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto w-full px-4 py-10">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 uppercase tracking-widest">Projects</h1>
            <p className="text-xs lg:text-sm text-base-content/70 tracking-widest uppercase">
              Complex Logic — Functional Design
            </p>

            <div className="max-w-2xl mx-auto pt-4">
              <p className="text-xs md:text-sm lg:text-sm italic tracking-wide leading-relaxed opacity-80">
                Most of my professional work is hosted in private repositories. The selections below serve as a technical showcase of my development workflow and architectural style.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {projects.map((project) => (

              <div
                key={project.id}
                className="relative w-full md:h-[600px] overflow-hidden rounded-sm group"
              >
                <div className="absolute inset-0">
                  <img
                    src={project.bg}
                    className="w-full h-full object-cover opacity-60 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="relative z-10 h-full w-full p-8 md:p-16 flex items-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

                    <div className="text-white space-y-6">
                      <div className="space-y-3">
                        <p className="text-base md:text-xl font-bold tracking-[0.2em] uppercase text-primary">
                          {project.tag}
                        </p>
                        <h3 className="text-2xl md:text-4xl font-black leading-[1.1] uppercase">
                          {project.title}
                        </h3>
                        <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-sm">
                          {project.desc}
                        </p>
                      </div>

                      <button
                        onClick={() => openModal(project)}
                        className={`btn btn-outline border-white/40 text-white rounded-none hover:bg-white hover:text-black uppercase text-[10px] tracking-widest px-6 bg-black/20 backdrop-blur-sm`}
                      >
                        Details
                      </button>
                    </div>

                    <div className="relative hidden lg:flex justify-center items-center">
                      <div className="w-full max-w-[550px] transform transition-all duration-500">
                        <img
                          src={project.img[0]}
                          alt="Interface Screenshot"
                          className="w-full h-auto shadow-2xl rounded-md border border-white/10"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Projects;