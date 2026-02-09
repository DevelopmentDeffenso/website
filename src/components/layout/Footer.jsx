export default function Footer() {
    return (
        <footer className="py-12 sm:py-16 px-4 md:px-8 bg-[#050505] mt-[20px]">
            <div className="max-w-7xl mx-auto mt-20">
                <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-12">
                    <div className="mb-2 md:mb-0">
                        <a href="/" className="flex flex-col items-start gap-[1px] mb-4 sm:mb-6">
                            <img
                                src="/assets/logo/weblogo.png"
                                alt="Deffenso Academy"
                                className="h-[60px] sm:h-[80px] md:h-[120px] lg:h-[160px] w-auto object-contain"
                            />
                            <img
                                src="/assets/logo/weblogo.2png.png"
                                alt="Deffenso Academy"
                                className="h-[60px] sm:h-[80px] md:h-[120px] lg:h-[160px] w-auto object-contain"
                            />
                        </a>

                        <h1 className="text-gray-400 text-xs sm:text-sm">
                            Securing the future by <br />
                            <span className="text-cyber-blue font-semibold">Training the next generation.</span>
                        </h1>

                        <div className="mt-4 sm:mt-6">
                            <a
                                href="https://x.com/deffenso"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-md text-[10px] sm:text-xs font-medium text-white hover:bg-white/10 transition-all min-h-[44px]"
                            >
                                Share Your Thoughts On
                                <svg className="w-3 h-3 fill-current" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                                </svg>
                            </a>
                        </div>

                        <p className="text-[10px] sm:text-xs text-gray-500 mt-6 sm:mt-8">
                            © 2023 Deffenso Academy. All rights reserved.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-20">
                        <div>
                            <h3 className="text-white font-cyber text-[10px] uppercase tracking-widest mb-4 sm:mb-6">Academy</h3>
                            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500">
                                <li><a href="/#programs" className="hover:text-blue-400 transition">Programs</a></li>
                                <li><a href="/#philosophy" className="hover:text-blue-400 transition">Methodology</a></li>
                                <li><a href="/contact" className="hover:text-blue-400 transition">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-cyber text-[10px] uppercase tracking-widest mb-4 sm:mb-6">Connect</h3>
                            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500">
                                <li><a href="#" className="hover:text-blue-400 transition">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition">Instagram</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition">Twitter (X)</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-cyber text-[10px] uppercase tracking-widest mb-4 sm:mb-6">Legal</h3>
                            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500">
                                <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full flex mt-8 sm:mt-12 items-center justify-center overflow-hidden">
                    <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[10rem] xl:text-[15rem] font-black tracking-tighter text-large-footer select-none">
                        DEFFENSO
                    </h1>
                </div>
            </div>
        </footer>
    );
}
