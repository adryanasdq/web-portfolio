import Education from "./components/education";
import SkillSet from "./components/skill-set";
import WorkExperience from "./components/work-exp";


const About = () => {
    return (
        <section id="about" className="flex flex-col gap-20 px-4 py-20">
            <Education />
            <SkillSet />
            <WorkExperience />
        </section>
    )
}

export default About;
