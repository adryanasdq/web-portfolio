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
        <Modal id="project-card" title="Project">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-full overflow-hidden rounded-box">
                    <div className="carousel w-full">
                        {project.img.map((img, idx) => (
                            <div
                                key={idx}
                                id={`project-${project.id}-${idx}-img`}
                                className="carousel-item w-full"
                            >
                                <img
                                    src={img}
                                    className="w-full object-fill h-64"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {project.img.map((_, idx) => (
                            <a href={`#project-${project.id}-${idx}-img`} className="btn btn-circle btn-xs opacity-50 hover:opacity-100 transition-opacity" />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 px-4 pb-4">
                    <div className="flex items-center gap-2">
                        <span className="badge badge-primary badge-outline uppercase tracking-widest text-[10px]">
                            {project.tag}
                        </span>
                    </div>
                    <p className="text-sm text-base-content/70 leading-relaxed">
                        {project.desc}
                    </p>
                    <div className="flex gap-4 justify-center">
                        {project.isAvailable
                            ? (
                                <>
                                    <button className="btn btn-primary shadow-lg">
                                        <a href={project.url} target="blank">Visit</a>
                                    </button>
                                    <button
                                        onClick={() => closeModal()}
                                        className="btn btn-primary btn-outline shadow-lg"
                                    >Close</button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => closeModal()}
                                        className="btn btn-outline border-white/40 text-white rounded-none hover:bg-white hover:text-black uppercase text-[10px] tracking-widest px-6 bg-black/20 backdrop-blur-sm"
                                    >🚧 Under Construction 🚧</button>
                                </>
                            )
                        }
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default ProjectCard;
