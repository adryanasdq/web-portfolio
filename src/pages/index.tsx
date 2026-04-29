import Hero from './sections/hero';
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Navigation from './sections/navigation';


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
