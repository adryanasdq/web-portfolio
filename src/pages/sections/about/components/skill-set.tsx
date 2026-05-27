import { useMemo, useState } from "react";

import { skillGroups, skillCategories } from '@/data/static/skill-set-static';
import { TShowGroup } from "@/data/type/skill-set";

const SkillSet = () => {
    const [showGroup, setShowGroup] = useState<TShowGroup>("all");
    const skillCount = useMemo(() => {
        const activeCategories = skillCategories.filter(
            (cat) => showGroup === "all" || cat.id === showGroup
        );

        return activeCategories.reduce((acc, cat) => acc + cat.data.length, 0);
    }, [showGroup, skillCategories]);

    return (
        <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-6 md:mb-12 lg:mb-16">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 uppercase tracking-widest">Programming Skills</h1>
                <p className="text-xs lg:text-sm text-base-content/70 tracking-widest uppercase">List of My Skill Set</p>
            </div>

            <h4 className="text-center text-sm mb-4 text-base-content/70 tracking-widest">
                <span className="text-xs lg:text-base font-bold text-primary">{skillCount} </span>
                {showGroup === "all" ? (
                    <span className="text-xs lg:text-base">
                        skills across <span className="font-bold text-primary">{skillCategories.length} </span>
                    categories</span>
                ) : (
                    <span className="text-xs lg:text-base">
                        skills in <span className="font-bold text-primary capitalize">{showGroup}</span>
                    </span>
                )}
            </h4>

            <div className="flex flex-col gap-8">
                <div className="flex justify-center">
                    <div className="join bg-base-200/40 backdrop-blur-sm border border-base-content/5 shadow-sm p-1 rounded-lg">
                        {skillGroups.map((group) => (
                            <button
                                key={group.value}
                                onClick={() => setShowGroup(group.value)}
                                className={`btn btn-md join-item transition-all text-xs lg:text-base
                                    ${showGroup === group.value
                                        ? "btn-primary" : "btn-ghost opacity-60"
                                    }`}
                            >
                                {group.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {skillCategories
                        .filter(cat => showGroup === "all" || showGroup === cat.id)
                        .map((category) => (
                            <div key={category.id} className="flex justify-center">
                                <div className="card w-full min-w-[300px] bg-base-200/40 backdrop-blur-sm border border-base-content/5 shadow-sm">
                                    <div className="card-body p-8 lg:px-8 lg:py-4">
                                        <h4 className="text-base lg:text-lg text-center font-bold tracking-widest uppercase mb-2">
                                            {category.title}
                                        </h4>
                                        <div className="flex flex-wrap justify-center gap-4 mb-2">
                                            {category.data.map((s) => {
                                                const Icon = s.icon;
                                                return (
                                                    <div
                                                        key={s.skill}
                                                        className="badge badge-outline badge-primary badge-sm gap-2 p-5 hover:bg-primary hover:text-primary-content transition-all cursor-default"
                                                    >
                                                        <Icon size={20} />
                                                        <span className="font-medium text-white">{s.skill}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <h6 className="text-xs text-center italic tracking-widest">
                                            {category.description}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SkillSet;