export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-8">
            <span className="text-sm text-accent-foreground">Available for work</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-medium mb-6 tracking-tight">
          Creative Developer
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I design and build digital experiences that merge creativity with functionality
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
