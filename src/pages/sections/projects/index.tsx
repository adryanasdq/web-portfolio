import { projects } from "@/data/static/project-static";


const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 flex flex-col items-center justify-center bg-base-100">
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 uppercase tracking-widest">Projects</h1>
          <p className="text-base-content/70 tracking-widest uppercase text-sm">
            Swipe to explore my work
          </p>
        </div>

        <div className="carousel carousel-center w-full p-4 space-x-4 bg-transparent rounded-box overflow-x-auto scrollbar-hide">
          {projects.map((project) => (
            <div
              key={project.id}
              className="carousel-item flex-none w-[85vw] md:w-[400px] lg:w-[450px] transition-all duration-500 ease-in-out hover:scale-[1.02]"
            >
              <div className="relative h-[500px] w-full group overflow-hidden rounded-3xl border border-base-content/10 shadow-2xl">
                <figure>
                  <img src="" />
                </figure>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/50 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex flex-col gap-2">
                    <span className="badge badge-primary badge-sm uppercase tracking-widest">
                      {project.tag}
                    </span>

                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out">
                      <p className="text-white/70 text-sm mt-2 line-clamp-3">
                        {project.desc}
                      </p>
                      <button className="btn btn-primary btn-sm mt-4 no-animation">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 lg:hidden">
          <div className="flex gap-1 opacity-30">
            <div className="w-8 h-1 bg-base-content rounded-full"></div>
            <div className="w-2 h-1 bg-base-content rounded-full"></div>
            <div className="w-2 h-1 bg-base-content rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;