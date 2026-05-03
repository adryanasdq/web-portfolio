import { IProject } from "../type/project";

export const projects: IProject[] = [
    { id: 1, title: "ERP System", desc: "A centralized platform for managing core business processes including Inventory, Accounting, Purchasing, etc.", thumbSrc: "/assets/img/erp-1.png", bg: "/assets/img/erp-bg.jpg", tag: "Fullstack" },
    { id: 2, title: "Learning Management System", desc: "A platform to not only keep a track with employee's study, but also give them appreciation.", thumbSrc: "/assets/img/hris-1.png", bg:"/assets/img/lms-bg.png", tag: "Frontend" },
    { id: 3, title: "Job Portal (Legacy)", desc: "My very first fullstack development project.", thumbSrc: "/assets/img/jp-1.png", bg:"/assets/img/jp-bg.jpg", tag: "Fullstack" },
    { id: 4, title: "Employee Timesheet", desc: "A simple version of my work using .NET framework.", thumbSrc: "/assets/img/hris-2.png", bg:"/assets/img/timesheet-bg.jpeg", tag: "Fullstack" },
];
