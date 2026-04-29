import { FaReact, FaDatabase } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import {
    SiTailwindcss,
    SiRedux,
    SiJquery,
    SiProgress,
    SiMui,
    SiDotnet,
    SiFastapi,
    SiFlask,
    SiPostgresql,
    SiPostman,
    SiSwagger,
    SiGit,
    SiFigma,
    SiJira
} from "react-icons/si";

import { ISkillGroup, ISkill, ISkillCategory } from "../type/skill-set";


const skillGroups: ISkillGroup[] = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Utilities", value: "utility" },
];

const frontEndSkills: ISkill[] = [
    { skill: "React", icon: FaReact },
    { skill: "Tailwind CSS", icon: SiTailwindcss },
    { skill: "Material UI", icon: SiMui },
    { skill: "Redux", icon: SiRedux },
    { skill: "Zustand", icon: GiBearFace },
    { skill: "jQuery", icon: SiJquery },
    { skill: "Telerik UI", icon: SiProgress },
];



const backEndSkills: ISkill[] = [
    { skill: ".NET", icon: SiDotnet },
    { skill: "FastAPI", icon: SiFastapi },
    { skill: "Flask", icon: SiFlask },
    { skill: "PostgreSQL", icon: SiPostgresql },
    { skill: "SSMS", icon: FaDatabase },
    { skill: "Postman", icon: SiPostman },
    { skill: "Swagger", icon: SiSwagger },
];


const utilitySkills: ISkill[] = [
    { skill: "Git", icon: SiGit },
    { skill: "Figma", icon: SiFigma },
    { skill: "Jira", icon: SiJira },
];


const skillCategories: ISkillCategory[] = [
    { 
        id: "frontend", 
        title: "Frontend", 
        description: "Building responsive and interactive user interfaces using a modern, component-driven stack", 
        data: frontEndSkills 
    },
    { 
        id: "backend", 
        title: "Backend", 
        description: "Developing scalable and high-performance server-side architectures focused on data integrity and efficiency.", 
        data: backEndSkills 
    },
    { 
        id: "utility", 
        title: "Utils", 
        description: "Essential tools for streamlined version control, project management, and collaborative development.",
        data: utilitySkills 
    },
];

export { skillGroups, skillCategories };
