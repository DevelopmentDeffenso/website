export default function Feedback() {
    const row1 = [
        { text: "The JR. Ethical Hacking track changed my career path. Clear, concise, and professional.", author: "Alex M., Student" },
        { text: "Finally a course that focuses on the defensive mindset rather than just tools.", author: "Sarah K., SOC Analyst" },
        { text: "Best cybersecurity community I've ever been a part of. The mentorship is 10/10.", author: "Jordan T., Learner" },
        { text: "Raul's teaching style is unmatched. He dives deep into the 'why' behind every attack.", author: "Kevin L., Professional" },
    ];

    const row2 = [
        { text: "Simple ideas are quicker to grasp, and Deffenso excels at making complex topics simple.", author: "Maria G., Designer" },
        { text: "What a Gem man... I really appreciate your confidence and the swag you maintain.", author: "YouTube Community" },
        { text: "Raul goes above and beyond, diving into the mechanics of each tool. Brilliant.", author: "Professional Track" },
        { text: "Defense should be easy to understand. Deffenso makes it possible for everyone.", author: "Security Lead" },
    ];

    const TestimonialCard = ({ text, author }) => (
        <div className="glass-card p-4 sm:p-6 rounded-xl w-72 sm:w-80 flex-shrink-0 mx-2 sm:mx-3">
            <p className="text-gray-300 text-xs sm:text-sm">"{text}"</p>
            <p className="mt-3 sm:mt-4 text-cyber-blue font-bold text-[10px] sm:text-xs">- {author}</p>
        </div>
    );

    return (
        <section className="relative py-16 sm:py-20 md:py-24 bg-[#050505] bg-grid overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-[#050505] to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>

            <div className="relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-cyber font-bold text-white mb-3 sm:mb-4">Community Feedback</h2>
                    <p className="text-gray-400 tracking-widest uppercase text-[10px] sm:text-xs">Real Results from Real Defenders</p>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="relative overflow-hidden w-full py-2">
                        <div className="animate-horizontal-marquee flex">
                            {[...row1, ...row1].map((item, i) => (
                                <TestimonialCard key={i} {...item} />
                            ))}
                        </div>
                    </div>

                    <div className="relative overflow-hidden w-full py-2">
                        <div className="animate-horizontal-marquee-reverse flex">
                            {[...row2, ...row2].map((item, i) => (
                                <TestimonialCard key={i} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
