import { Link } from 'react-router-dom';
import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function Hero() {
    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
            <ShaderAnimation />

            <div className="absolute pointer-events-none z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl">
                <p className="text-cyber-blue font-cyber tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm uppercase">SECURE THE FRONTIER</p>

                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-cyber tracking-tighter text-gradient leading-tight">
                    Become <br /> Unstoppable
                </h1>

                <p className="text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed px-2 sm:px-4 md:px-0 mx-auto mb-8 sm:mb-10 mt-6 sm:mt-8 md:mt-10">
                    Building a digitally resilient generation capable of defending systems, data, and nations against modern cyber threats.
                </p>

                <div className="flex justify-center gap-4 pointer-events-auto">
                    <Link to="/contact">
                        <button className="px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-xs sm:text-sm tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95 min-h-[44px]">
                            START JOURNEY
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
}
