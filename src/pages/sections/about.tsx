export default function About() {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'UI/UX Design',
    'Motion Design',
    'Three.js',
    'Figma',
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-medium mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a creative developer with a passion for building beautiful, functional web experiences.
              With a background in design and development, I bridge the gap between aesthetics and
              technical implementation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My work focuses on creating intuitive interfaces with smooth interactions, always keeping
              the user experience at the forefront of every decision.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-accent rounded-lg text-center hover:bg-muted transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
