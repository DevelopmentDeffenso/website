import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function AboutUs() {
    return (
        <div className="bg-grid relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
            <Navbar />

            {/* Top Black Feather Gradient */}
            <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-0"></div>

            {/* Mission Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 pt-24 sm:pt-32 md:pt-40 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                    <div>
                        <p className="text-blue-500 font-cyber tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-4 uppercase">The Mission</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cyber font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                            Bridging the <br />
                            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Security Gap</span>
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 mt-4 sm:mt-6">
                            The world faces a staggering <span className="text-white font-bold">3.5 million unfilled cybersecurity roles</span>. Deffenso Academy was built to solve this crisis by transforming students into job-ready defenders.
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                            We move beyond theory. Our academy focuses on the "Defensive Mindset"—training you to think like an attacker to build unbreakable shields.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[15px] text-center hover:border-blue-500/30 transition-all">
                            <h3 className="text-2xl sm:text-3xl font-cyber text-blue-500 mb-2">3.5M</h3>
                            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest">Global Talent Shortage</p>
                        </div>
                        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[15px] text-center hover:border-blue-500/30 transition-all">
                            <h3 className="text-2xl sm:text-3xl font-cyber text-white mb-2">Every 39s</h3>
                            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest">A New Cyber Attack</p>
                        </div>
                        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[15px] text-center hover:border-blue-500/30 transition-all">
                            <h3 className="text-2xl sm:text-3xl font-cyber text-white mb-2">100%</h3>
                            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest">Hands-on Labs</p>
                        </div>
                        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[15px] text-center border-blue-500/30 hover:border-blue-500 transition-all">
                            <h3 className="text-2xl sm:text-3xl font-cyber text-blue-500 mb-2">Elite</h3>
                            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest">Global Mentorship</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctrine Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-blue-600/5 border-y border-white/5 relative z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <p className="font-cyber text-blue-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6 md:mb-8">The Deffenso Doctrine</p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic leading-tight">
                        "Defense should be <span className="text-gray-500 font-light">easy to understand</span> because <span className="text-blue-500">simple rules</span> are quicker to execute."
                    </h2>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[75px] font-cyber font-bold mb-12 sm:mb-16 md:mb-20 lg:mb-32 xl:mb-64 text-center uppercase tracking-tighter mt-12 sm:mt-16 md:mt-20 lg:mt-32 xl:mt-64">Our Methodology</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[15px] text-center hover:border-blue-500/30 transition-all">
                        <div className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-cyber mb-3 sm:mb-4">01. WATCH</div>
                        <p className="text-gray-400 text-xs sm:text-sm">Complex security concepts broken down into short, high-energy animated lessons.</p>
                    </div>
                    <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[15px] text-center hover:border-blue-500/30 transition-all">
                        <div className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-cyber mb-3 sm:mb-4">02. PRACTICE</div>
                        <p className="text-gray-400 text-xs sm:text-sm">Apply knowledge instantly in our simulated "Red-vs-Blue" virtual environments.</p>
                    </div>
                    <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[15px] text-center hover:border-blue-500/30 transition-all">
                        <div className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-cyber mb-3 sm:mb-4">03. ASK LIVE</div>
                        <p className="text-gray-400 text-xs sm:text-sm">Direct access to Raul and our expert team for live Q&A and technical troubleshooting.</p>
                    </div>
                    <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[15px] text-center hover:border-blue-500/30 transition-all">
                        <div className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-cyber mb-3 sm:mb-4">04. APPLY</div>
                        <p className="text-gray-400 text-xs sm:text-sm">Turn skills into a career using our industry-leading templates and playbooks.</p>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-40 bg-black/40 rounded-[30px] mb-16 sm:mb-24 md:mb-32 border border-white/5 relative z-10">
                <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-32 xl:mb-64">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[75px] font-cyber font-bold uppercase">The Leadership Terminal</h2>
                    <p className="text-gray-500 text-xs sm:text-sm mt-2">Elite expertise driving the next generation of hackers.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Calvin Shejin George */}
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-6">
                        <div className="w-40 h-40 bg-blue-500/20 rounded-3xl border border-blue-500/50 flex-shrink-0 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center text-blue-500 font-cyber text-xs">C.S.G.</div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-cyber font-bold text-white mb-2">Calvin Shejin George</h3>
                            <p className="text-blue-500 text-[10px] font-cyber tracking-widest uppercase mb-4">MADHAV & CEO</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                A cybersecurity visionary with professional experience at <span className="text-white">META (USA)</span> and <span className="text-white">SAFECYBERIA</span>. Calvin specializes in scalable security frameworks and ethical hacking education.
                            </p>
                        </div>
                    </div>

                    {/* Niranjan SM */}
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-6">
                        <div className="w-40 h-40 bg-gray-500/20 rounded-3xl border border-white/10 flex-shrink-0 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center text-gray-500 font-cyber text-xs">N. S. M.</div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-cyber font-bold text-white mb-2">Niranjan SM</h3>
                            <p className="text-gray-500 text-[10px] font-cyber tracking-widest uppercase mb-4">Co-Founder</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Master of Linux administration and penetration testing. Niranjan leads the technical lab design, ensuring every student faces real-world infrastructure challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

