import Hero from './sections/hero';
import About from './sections/about/index';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Navigation from './sections/navigation';


export default function App() {
  return (
    <>
      <Navigation>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Navigation>
    </>
  );
}
