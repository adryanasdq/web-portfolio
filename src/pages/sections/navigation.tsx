import { useScroll } from '@/hooks/use-scroll';


const Navigation = () => {
  const { scrolled, activeSection, scrollToSection } = useScroll();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
    >
      <div className='flex justify-between items-center p-6'>
        <button className='btn btn-ghost text-white'>
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
                  className={`capitalize tab ${activeSection.toLowerCase() === section ? 'tab-active' : ''}`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='flex gap-0'>
          <a className="btn btn-ghost text-white" href='https://github.com/adryanasdq' target='_blank'>
            <svg
              aria-label="GitHub logo"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </a>
          <a className="btn btn-ghost text-white" href='https://www.linkedin.com/in/adryanashidiq/' target='_blank'>
            <svg
              aria-label="LinkedIn logo"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"
              />
            </svg>
          </a>
          <a className="btn btn-ghost text-white" href='https://www.instagram.com/adryanasdq/' target='_blank'>
            <svg
              aria-label="Instagram logo"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15M17.25,5.5A1.25,1.25 0 0,0 16,6.75A1.25,1.25 0 0,0 17.25,8A1.25,1.25 0 0,0 18.5,6.75A1.25,1.25 0 0,0 17.25,5.5Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
