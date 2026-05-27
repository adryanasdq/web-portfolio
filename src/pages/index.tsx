import Hero from './sections/hero';
import About from './sections/about/index';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Navigation from './sections/navigation';


export default function App() {
  return (
    <div className="">
      {/* <Navigation /> */}
      <main className="">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
