import { IProject } from "../type/project";

export const projects: IProject[] = [
    { id: 1, title: "ERP System", desc: "A centralized platform for managing core business processes including Inventory, Accounting, Purchasing, etc.", thumbSrc: "/src/assets/img/erp-1.png", tag: "Fullstack" },
    { id: 2, title: "Learning Management System", desc: "A platform to not only keep a track with employee's study, but also give them appreciation.", thumbSrc: "/src/assets/img/hris-1.png.", tag: "Frontend" },
    { id: 3, title: "Job Portal (Legacy)", desc: "My very first fullstack development project.", thumbSrc: "/src/assets/img/jp-1.png", tag: "Fullstack" },
    { id: 4, title: "Employee Timesheet", desc: "A simple version of my work using .NET framework.", thumbSrc: "/src/assets/hris-2.png", tag: "Fullstack" },
];
