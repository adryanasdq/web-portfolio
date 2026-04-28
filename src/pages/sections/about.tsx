import { WORK_EXPERIENCE } from "@/data/static/work-exp-static";
import { Calendar, Factory, MapPin } from "lucide-react";

const About = () => {
  const carreerStart = new Date(2023, 9, 1);
  const today = new Date();
  const yearsOfExperience = Math.floor((today.getTime() - carreerStart.getTime()) / (1000 * 24 * 60 * 60 * 365.25));

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-2 uppercase tracking-widest">EXPERIENCE</h1>
          <p className="text-base-content/70 italic">
            Professional journey as a Fullstack Developer for {yearsOfExperience}+ years.
          </p>
        </div>

        {WORK_EXPERIENCE.map((exp) => (
          <div key={exp.id} className="group flex justify-center gap-12 md:gap-24 py-10 border-b border-base-content/5 last:border-0">

            <div className="flex w-2/5 items-start gap-4 sticky top-24 h-fit">
              <div className="flex items-center justify-center h-10 shrink-0">
                {exp.isCurrent ? (
                  <span className="loading loading-ring loading-sm text-primary" />
                ) : (
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 transition-all duration-300 group-hover:bg-primary group-hover:scale-110" />
                )}
              </div>
              <h1 className="text-xl font-bold leading-10 uppercase">{exp.company}</h1>
            </div>

            <div className="flex flex-col gap-6 w-3/5">
              <div className="flex gap-6">
                <div className="hidden lg:block">
                  <img src={exp.logo} className="w-40 h-40"/>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 opacity-60">
                    <MapPin size={16} />
                    <h2 className="text-lg">{exp.location}</h2>
                  </div>
                  <h2 className="text-4xl font-black text-primary leading-tight">{exp.position}</h2>

                  <div className="flex flex-wrap gap-2 my-2">
                    {exp.tags.map(tag => (
                      <div key={tag} className="badge badge-outline text-[10px] uppercase">{tag}</div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 opacity-60 text-sm">
                    <Calendar size={14} />
                    <p>{exp.period}</p>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200/40 backdrop-blur-sm border border-base-content/5 shadow-sm">
                <div className="card-body p-6">
                  <p className="text-sm leading-relaxed opacity-90">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="card bg-base-200/40 backdrop-blur-sm border border-base-content/5 shadow-sm">
                <div className="card-body p-6">
                  <h6 className="text-xs font-bold tracking-widest text-secondary mb-2 uppercase">💻 Key Responsibilities</h6>
                  <div className="flex flex-col gap-4">
                    {exp.responsibilities.map((point, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-neutral-500 transition-all duration-300 group-hover:bg-primary" />
                        <p className="text-sm opacity-80 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;