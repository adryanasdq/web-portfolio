import { useEffect, useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    console.log("section: ", activeSection);
  }, [activeSection])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
    >
      <div className='flex justify-between items-center p-6'>
        <button>
          HOME
        </button>
        <div className='flex gap-4'>
          <div className='flex gap-4'>
            <div role="tablist" className="tabs tabs-border tabs-lg">
              {['about', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  role='tab'
                  onClick={() => scrollToSection(section)}
                  className={`capitalize tab ${activeSection.toLowerCase() === section ? 'tab-activa' : ''}`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
        <button>TEST</button>
      </div>
    </nav>
    // <nav
    //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    //   }`}
    // >
    //   <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    //     <button
    //       onClick={() => scrollToSection('home')}
    //       className="text-lg font-medium hover:text-muted-foreground transition-colors"
    //     >
    //       Portfolio
    //     </button>

    //     <div className="flex gap-8">
    //       {['about', 'projects', 'contact'].map((section) => (
    //         <button
    //           key={section}
    //           onClick={() => scrollToSection(section)}
    //           className={`capitalize hover:text-foreground transition-colors ${
    //             activeSection === section ? 'text-foreground' : 'text-muted-foreground'
    //           }`}
    //         >
    //           {section}
    //         </button>
    //       ))}
    //     </div>

    //     <div>

    //     </div>
    //   </div>
    // </nav>
  );
}
