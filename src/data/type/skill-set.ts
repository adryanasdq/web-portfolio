import { IconType } from "react-icons";

type TShowGroup = "all" | "frontend" | "backend" | "utility";

interface ISkillGroup {
    label: string;
    value: TShowGroup;
}

interface ISkill {
    skill: string;
    icon: IconType
}

interface ISkillCategory {
    id: string;
    title: string;
    description: string;
    data: ISkill[];
}

export { TShowGroup, ISkillGroup, ISkill, ISkillCategory }
