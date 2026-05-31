import { Calendar, MapPin } from "lucide-react";

import Section from "@/components/section";

import { WORK_EXPERIENCE } from "@/data/static/work-exp-static";


const WorkExperience = () => {
  const carreerStart = new Date(2023, 9, 1);
  const today = new Date();
  const yearsOfExperience = Math.floor((today.getTime() - carreerStart.getTime()) / (1000 * 24 * 60 * 60 * 365.25));

  return (
    <Section id="work-exp" className="max-w-6xl mx-auto w-full">
      <div className="text-center mb-6 md:mb-12 lg:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 uppercase tracking-widest">EXPERIENCE</h1>
        <p className="text-xs lg:text-sm text-base-content/70 tracking-widest uppercase">
          Professional journey as a Fullstack Developer for {yearsOfExperience}+ years.
        </p>
      </div>

      {WORK_EXPERIENCE.map((exp) => (
        <div key={exp.id} className="group relative border-l-2 border-base-300 pl-6 pb-12 last:pb-0">
          <div className="absolute -left-[11px] top-1.5 flex items-center justify-center">
            {exp.isCurrent ? (
              <span className="loading loading-ring loading-md text-primary bg-base-100 p-0.5" />
            ) : (
              <span className="h-5 w-5 rounded-full bg-neutral border-2 border-base-300 transition-all duration-300 group-hover:border-primary group-hover:bg-primary-content" />
            )}
          </div>

          <div className="card md:card-side bg-base-200/40 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/20 border border-transparent">

            <figure className="p-6 md:p-8 flex items-center justify-center md:w-48 shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-xl bg-white flex items-center justify-center shadow-md">
                <img
                  alt={`${exp.company} Logo`}
                  src={exp.logo}
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </figure>

            <div className="card-body p-6 md:p-8 gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-base-300 pb-1">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{exp.company}</span>
                  <h2 className="text-xl md:text-2xl font-black text-base-content mt-0.5">{exp.position}</h2>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs opacity-70 sm:text-right sm:flex-col sm:items-end">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(tag => (
                  <div key={tag} className="badge badge-sm badge-outline uppercase font-medium opacity-80">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs md:text-sm lg:text-sm text-base-content/80 mt-2">
                <p className="leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-xs md:text-sm lg:text-sm font-bold uppercase tracking-wider text-white mb-1.5">Key Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {exp.responsibilities.map((point, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-neutral-500 transition-all duration-300 group-hover:bg-primary" />
                        <p className="text-xs md:text-sm lg:text-sm opacity-80 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </Section>
  )
}

export default WorkExperience;
