import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        const isHomePage = window.location.pathname === '/';

        if (isHomePage) {
            const element = document.getElementById(targetId);
            if (element) {
                e.preventDefault();
                const navHeight = 90; // Balanced offset for the fixed navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
        // If not on home page, the default href="/#target" handles navigation + jump
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    const programs = [
        "SOC Analyst Track",
        "Junior Ethical Hacker",
        "CPENT Masterclass",
        "Certified Ethical Hacker (CEH)",
        "Network Defense",
        "Digital Forensics & Incident Response",
        "Capture the Flag (CTF) Challenges"
    ];

    const programRoutes = {
        "Junior Ethical Hacker": "/programs/jreh",
        "SOC Analyst Track": "/programs/soc",
        "CPENT Masterclass": "/programs/cpent",
        "Certified Ethical Hacker (CEH)": "/programs/ceh",
        "Network Defense": "/programs/network-defense",
        "Digital Forensics & Incident Response": "/programs/forensics",
        "Capture the Flag (CTF) Challenges": "/programs/ctf"
    };

    return (
        <>
            {/* Backdrop overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <div className="fixed w-full top-2 sm:top-3 md:top-6 z-50 px-2 md:px-4">
                <nav className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-4 md:px-8 py-3 md:py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                    <div className="flex items-center">
                        <Link to="/" onClick={(e) => { if (window.location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } setIsMobileMenuOpen(false); }} className="flex items-center">
                            <img
                                src="/assets/logo/Official_logo.png"
                                alt="Deffenso Academy"
                                className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform hover:scale-110 ml-2 sm:ml-4 md:ml-7"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10 text-[10px] font-cyber uppercase tracking-[0.2em] text-gray-300">
                        <Link to="/about" className="hover:text-cyber-blue transition">About</Link>
                        {/* Programs Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <a
                                href="/#programs"
                                onClick={(e) => handleScroll(e, 'programs')}
                                className="flex items-center gap-1 hover:text-cyber-blue transition uppercase tracking-[0.2em]"
                            >
                                Programs
                                <svg className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max min-w-[280px] bg-black/95 backdrop-blur-3xl border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,1)] transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                <div className="py-2">
                                    {programs.map((program, index) => {
                                        const route = programRoutes[program];

                                        return (
                                            <Link
                                                key={index}
                                                to={route}
                                                onClick={() => {
                                                    setIsDropdownOpen(false);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="block px-6 py-4 text-[10px] text-gray-400 hover:text-cyber-blue hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 whitespace-nowrap uppercase tracking-widest"
                                            >
                                                {program}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <Link to="/contact" className="hover:text-cyber-blue transition">Contact</Link>
                    </div>

                    <button className="hidden md:block px-6 py-2.5 bg-cyber-blue/10 border border-cyber-blue/50 text-cyber-blue text-[10px] font-cyber tracking-widest rounded-xl hover:bg-cyber-blue hover:text-white transition-all duration-300 btn-glow mr-9">
                        JOIN US
                    </button>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>

                {/* Mobile Menu Drawer */}
                <div className={`md:hidden fixed top-[80px] sm:top-[90px] right-2 w-[calc(100%-16px)] max-w-sm bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}>
                    <div className="p-6 space-y-1">
                        {/* About Link */}
                        <Link
                            to="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-cyber uppercase tracking-widest text-gray-300 hover:text-cyber-blue hover:bg-white/5 rounded-lg transition-colors min-h-[44px] flex items-center"
                        >
                            About
                        </Link>

                        {/* Programs Accordion */}
                        <div className="border-t border-white/5 pt-1">
                            <button
                                onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                                className="w-full px-4 py-3 text-sm font-cyber uppercase tracking-widest text-gray-300 hover:text-cyber-blue hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between min-h-[44px]"
                            >
                                <span>Programs</span>
                                <svg className={`w-4 h-4 transition-transform ${isMobileProgramsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Programs Submenu */}
                            <div className={`overflow-hidden transition-all duration-300 ${isMobileProgramsOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-4 mt-1 space-y-1">
                                    {programs.map((program, index) => {
                                        const route = programRoutes[program];
                                        return (
                                            <Link
                                                key={index}
                                                to={route}
                                                onClick={() => {
                                                    setIsMobileMenuOpen(false);
                                                    setIsMobileProgramsOpen(false);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="block px-4 py-3 text-xs text-gray-400 hover:text-cyber-blue hover:bg-white/5 rounded-lg transition-colors min-h-[44px] flex items-center"
                                            >
                                                {program}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Contact Link */}
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-cyber uppercase tracking-widest text-gray-300 hover:text-cyber-blue hover:bg-white/5 rounded-lg transition-colors min-h-[44px] flex items-center"
                        >
                            Contact
                        </Link>

                        {/* Join Us Button */}
                        <div className="pt-4 border-t border-white/5">
                            <button className="w-full px-6 py-3 bg-cyber-blue/10 border border-cyber-blue/50 text-cyber-blue text-xs font-cyber tracking-widest rounded-xl hover:bg-cyber-blue hover:text-white transition-all duration-300 min-h-[44px]">
                                JOIN US
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
