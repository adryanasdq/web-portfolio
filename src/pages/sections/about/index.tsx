import Education from "./components/education";
import SkillSet from "./components/skill-set";
import WorkExperience from "./components/work-exp";


const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 gap-24">
        <WorkExperience />
        <SkillSet />
        <Education />
    </section>
  );
}

export default About;