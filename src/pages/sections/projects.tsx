export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      color: 'from-blue-500/20 to-purple-500/20',
    },
    {
      id: 2,
      title: 'Design System',
      description: 'Comprehensive component library and design tokens for consistent product experiences.',
      tags: ['React', 'TypeScript', 'Storybook', 'Figma'],
      color: 'from-green-500/20 to-teal-500/20',
    },
    {
      id: 3,
      title: 'Portfolio Builder',
      description: 'No-code tool for creatives to build stunning portfolio websites in minutes.',
      tags: ['Next.js', 'Tailwind', 'Supabase'],
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics platform with interactive data visualizations and insights.',
      tags: ['React', 'D3.js', 'Python', 'FastAPI'],
      color: 'from-pink-500/20 to-purple-500/20',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-medium mb-12">Selected Work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative p-8 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
