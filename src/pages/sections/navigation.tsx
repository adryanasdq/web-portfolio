import { useScroll } from '@/hooks/use-scroll';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Navigation = () => {
  const { scrolled, scrollProgress, activeSection, scrollToSection } = useScroll();

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'>
      <progress className="progress progress-primary fixed top-0 w-full h-1" value={scrollProgress} max="100"></progress>
      <div className='flex justify-between items-center p-6'>
        <div className='flex items-center'>
          <button
            className='btn btn-ghost text-white h-auto p-0 m-2 flex items-center gap-3'
            onClick={() => scrollToSection('')}
          >
            <svg width="32" height="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <circle cx="256" cy="256" r="256" fill="#1A1A1A" />
              <path
                d="M268.4 125.6C260.2 121.3 250.8 123.4 245.5 130.8C235.2 145.2 215.4 185.6 195.2 230.4C175 275.2 145.5 330.8 135.2 355.6C128.5 372.4 112.4 395.2 90.5 405.4C75.2 412.5 55.4 400.2 45.8 385.4C38.2 373.2 40.5 355.6 52.4 340.8C65.4 325.2 88.5 315.4 110.2 318.5M268.4 125.6C280.5 132.4 310.2 165.4 340.5 210.2C370.8 255 410.5 330.4 420.2 360.5C425.4 375.2 420.5 395.2 405.4 405.4C390.2 415.6 365.4 410.2 350.5 395.2C335.5 380.2 330.2 355.6 335.4 330.8M268.4 125.6C275.5 110.2 300.2 90.5 330.5 85.4C360.8 80.3 390.5 100.2 395.4 130.8M180.5 285.4C210.2 280.5 250.5 285.4 280.5 305.2C310.5 325.2 325.4 350.5 320.2 370.8"
                stroke="#E8E6D5"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M370.5 220.4C395.4 215.2 410.5 235.4 405.4 260.5C400.2 285.4 370.5 300.2 345.4 290.5"
                stroke="#E8E6D5"
                strokeWidth="18"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className='flex flex-col items-start leading-tight'>
            <span className='text-sm font-bold tracking-tight uppercase'>
              Adryan
            </span>
            <span className='text-[10px] opacity-70 font-medium uppercase tracking-widest -mt-0.5'>
              Fullstack Dev.
            </span>
          </div>
        </div>
        <div className={`flex gap-4 ${scrolled ? 'bg-background/80 backdrop-blur-md p-1 border rounded-md border-transparent' : 'bg-transparent'}`}>
          <div role="tablist" className="tabs tabs-border tabs-lg">
            {['about', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                role='tab'
                onClick={() => scrollToSection(section)}
                className={`capitalize tab ${activeSection.toLowerCase() === section ? 'tab-active' : ''}`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
        <div className='flex gap-0'>
          <a className="btn btn-ghost text-white" href='https://github.com/adryanasdq' target='_blank'>
            <FaGithub size={24} />
          </a>
          <a className="btn btn-ghost text-white" href='https://www.linkedin.com/in/adryanashidiq/' target='_blank'>
            <FaLinkedin size={24} />
          </a>
          <a className="btn btn-ghost text-white" href='https://www.instagram.com/adryanasdq/' target='_blank'>
            <FaInstagram size={24}/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
