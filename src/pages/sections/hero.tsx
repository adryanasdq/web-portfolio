const Hero = () => {
  return (
    <section id="home" className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Adryan Ashidiq</h2>
          <h1 className="text-5xl my-4 font-bold">
            Fullstack Developer
          </h1>
          <h3 className="text-lg leading-tight">Turning Complex Business <span className="text-primary italic">Logic</span> into Seamless Products. </h3>
          <div className="flex flex-col gap-8">
            <p>From .NET Web Apps to E-commerce platforms and LMS dashboards — I build end-to-end solutions that are fast, secure, and user-centric. With more than 2 years of experience in delivering and supporting software for global users, I help brands modernize their digital infrastructure</p>
            <div className="flex gap-4">
              <button className="btn btn-primary"><a download={true} href="/assets/file/CV Adryan (2026).pdf">My Resume</a></button>
              <button className="btn btn-primary">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;