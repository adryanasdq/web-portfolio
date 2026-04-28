import { Experience } from "../type/work-exp";

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "test",
    company: "LG Sinarmas Technology Solutions",
    position: "Software Engineer",
    location: "Bandung, Indonesia",
    period: "June 2025 - Present",
    logo: "/src/assets/img/lgsm.jpeg",
    tags: ["Frontend", "IT Support", "Smart Factory", "Code Review"],
    description: "Architected web applications while providing specialized technical support for global smart factory logistics and production-line systems.",
    responsibilities: [
      "Develop and maintain React-based web applications, collaborating with a 7-member team and conducting code reviews to ensure code quality and best practices.",
      "Perform daily monitoring of Smart Factory IoT systems, ensuring system reliability and timely detection of anomalies.",
      "Troubleshoot and conduct manual inspections of production-line issues, working with cross-functional teams to minimize downtime.",
    ],
    isCurrent: true
  },
  {
    id: "navcore",
    company: "Navcore Nextology",
    position: "Software Developer",
    location: "Bandung, Indonesia",
    period: "Jan 2025 - May 2025",
    logo: "/src/assets/img/navcore.jpg",
    tags: ["Fullstack", "React", "FastAPI"],
    description: "Act as a full-stack developer of a scalable mobile marketplace and an integrated ERP solution, utilizing modern frameworks to bridge seamless user experiences with complex backend logic.",
    responsibilities: [
      "Developed and maintained dynamic web and mobile applications using React, TypeScript, Python, and FastAPI, ensuring responsive and user-friendly interfaces.",
      "Designed and implemented reusable, modular UI components using Material-UI Konsta UI, and RESTful APIs, ensuring seamless integration and efficient data flow between front-end and back-end systems.",
      "Built and optimized back-end services using FastAPI to enhance application performance, scalability, and security.",
    ],
    isCurrent: false
  },
  {
    id: "medco",
    company: "Medco E&P Indonesia",
    position: ".NET Developer",
    location: "Jakarta, Indonesia",
    period: "Sept 2023 - Dec 2024",
    logo: "/src/assets/img/medco.png",
    tags: [".NET Framework", "Web Form", "Global Support"],
    description: "",
    responsibilities: [
      "Scalable Engineering: Architected high-quality web solutions utilizing ASP.NET, focusing on long-term maintainability and performance scalability.",
      "System Integrity: Guaranteed application reliability through proactive debugging and thorough quality assurance, ensuring prompt resolution of technical bottlenecks.",
      "Lifecycle Management: Facilitated the entire development lifecycle by aligning with stakeholders on business goals and producing detailed technical guides for future feature development.",
    ],
    isCurrent: false
  },
];