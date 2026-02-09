export default function Philosophy() {
    return (
        <section className="mx-auto mb-6 sm:mb-10 md:mb-20 max-w-7xl px-4 sm:px-6 xl:px-0 mt-12 sm:mt-16 md:mt-20">
            <div className="relative flex flex-col items-center border border-cyber-blue bg-black/20 overflow-hidden">
                <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full fill-cyber-blue/20 opacity-40">
                    <defs>
                        <pattern id="dot-pattern-philosophy" width="24" height="24" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="0.5" r="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern-philosophy)" />
                </svg>

                <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-cyber-blue z-30"></div>
                <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-cyber-blue z-30"></div>
                <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-cyber-blue z-30"></div>
                <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-cyber-blue z-30"></div>

                <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-6 px-4 sm:py-8 sm:px-6 md:p-10 xl:py-24 text-white">
                    <p className="font-cyber text-[10px] sm:text-xs text-cyber-blue md:text-base lg:text-lg xl:text-2xl mb-3 sm:mb-4 tracking-widest uppercase">
                        Our Philosophy
                    </p>

                    <div className="text-xl xs:text-2xl sm:text-3xl tracking-tighter md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-none">
                        <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-4">
                            <h1 className="font-semibold text-white">"Defense should be</h1>
                            <p className="font-extralight text-gray-300">easy to</p>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-4 mt-1 sm:mt-2">
                            <p className="font-extralight text-gray-300">understand</p>
                            <h1 className="font-semibold text-white">because</h1>
                            <p className="font-extralight text-gray-300">simple</p>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-4 mt-1 sm:mt-2">
                            <p className="font-extralight text-gray-300">rules</p>
                            <h1 className="font-semibold text-white">are quicker to</h1>
                        </div>
                        <h1 className="font-semibold text-white mt-1 sm:mt-2">execute."</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
