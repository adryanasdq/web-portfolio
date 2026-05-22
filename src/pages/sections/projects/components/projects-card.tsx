import Modal from "@/components/modal"
import { IProject } from "@/data/type/project";


interface ProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const closeModal = () => {
        (document.getElementById("project-card") as HTMLDialogElement).close();
    }

    return (
        <Modal id="project-card" title="Project" className="max-w-4xl">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-full overflow-hidden rounded-t-box">
                    <div className="carousel w-full">
                        {project.img.map((img, idx) => (
                            <div
                                key={idx}
                                id={`project-${project.id}-${idx}-img`}
                                className="carousel-item w-full"
                            >
                                <img
                                    src={img}
                                    className="w-full object-cover h-80 sm:h-96" 
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {project.img.map((_, idx) => (
                            <a 
                                key={idx}
                                href={`#project-${project.id}-${idx}-img`} 
                                className="btn btn-circle btn-xs opacity-50 hover:opacity-100 transition-opacity" 
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 px-8 pb-6 w-full max-w-3xl self-start">
                    <div className="flex items-center gap-2">
                        <span className="badge badge-primary badge-outline uppercase tracking-widest text-[10px] font-bold">
                            {project.tag}
                        </span>
                    </div>
                    <p className="text-base text-base-content/70 leading-relaxed">
                        {project.desc}
                    </p>
                    <div className="flex gap-4 justify-start pt-2">
                        {project.isAvailable ? (
                            <>
                                <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="btn btn-primary px-6"
                                >
                                    Visit
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="btn btn-outline px-6"
                                >
                                    Close
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={closeModal}
                                className="btn btn-outline border-base-300 text-sm tracking-wide px-6 norm-case"
                            >
                                🚧 Under Construction 🚧
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default ProjectCard;
