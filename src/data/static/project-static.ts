import { IProject } from "../type/project";

export const defaultProject: IProject = {
    id: 0,
    title: "Title",
    desc: "Brief description",
    img: [],
    bg: "",
    tag: "",
    url: "",
    isAvailable: false,
}

export const projects: IProject[] = [
    {
        id: 1,
        title: "ERP System",
        desc: "A centralized platform for managing core business processes including Inventory, Accounting, Purchasing, etc.",
        img: ["/assets/img/erp-1.png", "/assets/img/erp-2.png", "/assets/img/erp-3.png"],
        bg: "/assets/img/erp-bg.jpg",
        tag: "Fullstack",
        url: "https://erp-fe-coral.vercel.app",
        isAvailable: true,
    },
    {
        id: 2,
        title: "Learning Management System",
        desc: "A platform to not only keep a track with employee's study, but also give them appreciation.",
        img: ["/assets/img/hris-1.png", "/assets/img/hris-2.png", "/assets/img/hris-3.png"],
        bg: "/assets/img/lms-bg.png",
        tag: "Frontend",
        url: "https://hris.lgsinarmas.com",
        isAvailable: true,
    },
    {
        id: 3,
        title: "Job Portal (Legacy)",
        desc: "My very first fullstack development project built using vanilla HTML, CSS, and Javascript",
        img: ["/assets/img/jp-1.png", "/assets/img/jp-2.png", "/assets/img/jp-3.png"],
        bg: "/assets/img/jp-bg.jpg",
        tag: "Fullstack",
        url: "",
        isAvailable: false,
    },
    {
        id: 4,
        title: "Employee Timesheet",
        desc: "A simple version of my work using .NET framework.",
        img: ["/assets/img/tpc.png"],
        bg: "/assets/img/timesheet-bg.jpeg",
        tag: "Fullstack",
        url: "",
        isAvailable: false,
    },
];
