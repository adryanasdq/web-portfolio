const Education = () => {
    return (
        <section className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-6 md:mb-12 lg:mb-16">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 uppercase tracking-widest">Education</h1>
                <p className="text-xs lg:text-sm text-base-content/70 tracking-widest uppercase">
                    Academic milestones and professional growth
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">

                <div className="md:col-span-4 lg:col-span-4 p-8 rounded-3xl bg-base-200/40 border border-white/5 flex flex-col justify-between group hover:border-primary/30 transition-all">
                    <div>
                        <div className="flex justify-between gap-2 mb-4 flex-wrap">
                            <h2 className="text-base md:text-lg lg:text-2xl font-black tracking-tight">Universitas Pendidikan Indonesia</h2>
                            <span className="text-xs md:text-sm badge badge-primary badge-outline px-4 py-3">2018 — 2022</span>
                        </div>
                        <p className="text-sm lg:text-xl text-base-content/90 mb-1">Bachelor of Science (B.Sc.) — Material Physics</p>
                        <p className="text-xs md:text-sm lg:text-base text-base-content/60 mb-6 italic">Bandung, Indonesia</p>

                        <h6 className="text-xs md:text-sm lg:text-sm italic tracking-wide leading-relaxed opacity-80 border-l-2 border-primary/40 pl-4">
                            Although my educational background is not IT-related, I gained problem solving, deep analysis, even some of the pillars of <a href="https://www.bbc.co.uk/bitesize/guides/zp92mp3/revision/1" target="_blank" className="underline decoration-primary/50 hover:text-primary transition-colors">Computational Thinking</a>.
                        </h6>
                    </div>
                </div>

                <div className="md:col-span-2 lg:col-span-2 p-8 rounded-3xl bg-primary text-primary-content flex flex-col justify-center items-center text-center shadow-xl shadow-primary/10 hover:border-primary/30">
                    <h3 className="text-xs md:text-sm lg:text-lg font-bold uppercase tracking-widest mb-2">Bootcamp</h3>
                    <h2 className="text-base md:text-lg lg:text-2xl font-black mb-2">Makers Institute</h2>
                    <p className="text-xs md:text-sm lg:text-base opacity-90">Full Stack Web Development</p>
                    <span className="mt-4 text-xs font-mono bg-white/20 px-3 py-1 rounded-full text-white">COMPLETED 2023</span>
                </div>

                <div className="md:col-span-2 lg:col-span-2 h-64 rounded-3xl overflow-hidden border border-white/5 relative group">
                    <img
                        src="/assets/img/edu1.jpg"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Graduation"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-3xl font-black uppercase tracking-[0.2em] text-center drop-shadow-xl">
                            Graduation Day
                        </p>
                    </div>
                </div>

                <div className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-base-200/40 border border-white/5 flex flex-col gap-3 hover:border-primary/30">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary font-bold">🔬</div>
                    <h4 className="text-base lg:text-lg font-bold leading-tight">Research</h4>
                    <p className="text-xs md:text-sm lg:text-sm text-base-content/70">Published a solar cell study in a <span className="text-primary font-bold">Q2 Scopus-indexed journal</span> and presented findings at a 2021 International Conference.</p>
                </div>

                <div className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-base-200/40 border border-white/5 flex flex-col gap-3 hover:border-primary/30">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold">🏆</div>
                    <h4 className="text-base lg:text-lg font-bold leading-tight">Leadership</h4>
                    <p className="text-xs md:text-sm lg:text-sm text-base-content/70">Successfully led a scientific project team to secure <span className="text-primary font-bold">silver and bronze medals</span> in <span className="text-primary font-bold">international science competitions</span>.</p>
                </div>

                <div className="md:col-span-1 lg:col-span-1 p-6 rounded-3xl bg-base-200/40 border border-white/5 flex flex-col items-center justify-center text-center hover:border-primary/30">
                    <p className="text-xs uppercase tracking-widest text-base-content/50 mb-1">GPA</p>
                    <p className="text-2xl lg:text-3xl font-black text-primary">3.52</p>
                    <p className="text-[10px] text-base-content/40">/ 4.00</p>
                </div>

                <div className="md:col-span-3 lg:col-span-3 p-6 rounded-3xl bg-neutral/10 border border-white/5 flex items-center gap-6 hover:border-primary/30">
                    <div className="text-3xl">🎖️</div>
                    <div>
                        <p className="text-sm md:text-base lg:text-lg font-bold">Recognition</p>
                        <p className="text-xs md:text-sm lg:text-sm text-base-content/70 italic">"Mahasiswa Bidikmisi Berprestasi UPI 2020"</p>
                    </div>
                </div>

                <div className="md:col-span-2 lg:col-span-2 h-40 rounded-3xl overflow-hidden border border-white/5 relative group">
                    <img src="/assets/img/edu2.jpeg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Campus Life" />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-3xl font-black uppercase tracking-[0.2em] text-center drop-shadow-xl">
                        UPI
                    </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
