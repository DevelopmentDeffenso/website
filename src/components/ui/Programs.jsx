import { Link } from 'react-router-dom';

export default function Programs() {
    const programs = [
        {
            id: 1,
            title: "Junior Ethical Hacker",
            tag: "Foundation",
            link: "/programs/jreh",
            description: "The perfect starting point for students. Learn the basics of network security, ethical hacking methodologies, and how to identify common vulnerabilities.",
            topics: ["Network Enumeration", "Vulnerability Assessment"],
            borderClass: "border-t-blue-500/30",
            tagClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
            dotClass: "bg-blue-500",
            buttonText: "VIEW CURRICULUM",
            buttonClass: "bg-white/5 hover:bg-white/10 text-white"
        },
        {
            id: 2,
            title: "SOC Analyst Track",
            tag: "Most Popular",
            link: "/programs/soc",
            description: "A professional-focused program designed to prepare you for real-world Security Operations Center roles. Focus on monitoring, detection, and response.",
            topics: ["SIEM Implementation", "Incident Handling"],
            borderClass: "border-t-blue-600",
            tagClass: "bg-blue-600 text-white",
            dotClass: "bg-blue-600",
            buttonText: "ENROLL NOW",
            buttonClass: "bg-blue-600 hover:bg-blue-500 text-white btn-glow"
        },
        {
            id: 3,
            title: "CPENT Masterclass",
            tag: "Advanced",
            link: "/programs/cpent",
            description: "Advanced penetration testing for those looking to master enterprise environments. Covers pivoting, double pivoting, and bypass techniques.",
            topics: ["Advanced Pivoting", "Binary Exploitation"],
            borderClass: "border-t-purple-500/30",
            tagClass: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
            dotClass: "bg-purple-500",
            buttonText: "REQUEST SYLLABUS",
            buttonClass: "bg-white/5 hover:bg-white/10 text-white"
        },
        {
            id: 4,
            title: "Certified Ethical Hacker (CEH)",
            tag: "Certification",
            link: "/programs/ceh",
            description: "Industry-recognized certification program covering comprehensive ethical hacking techniques and tools used by security professionals worldwide.",
            topics: ["Penetration Testing", "Security Tools Mastery"],
            borderClass: "border-t-green-500/30",
            tagClass: "bg-green-500/10 text-green-400 border border-green-500/20",
            dotClass: "bg-green-500",
            buttonText: "VIEW CURRICULUM",
            buttonClass: "bg-white/5 hover:bg-white/10 text-white"
        },
        {
            id: 5,
            title: "Network Defense",
            tag: "Defense",
            link: "/programs/network-defense",
            description: "Master the art of defending network infrastructure against sophisticated attacks. Learn firewall configuration, intrusion detection, and network hardening.",
            topics: ["Firewall Management", "IDS/IPS Configuration"],
            borderClass: "border-t-cyan-500/30",
            tagClass: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
            dotClass: "bg-cyan-500",
            buttonText: "VIEW CURRICULUM",
            buttonClass: "bg-white/5 hover:bg-white/10 text-white"
        },
        {
            id: 6,
            title: "Digital Forensics & Incident Response",
            tag: "Forensics",
            link: "/programs/forensics",
            description: "Learn to investigate cyber incidents, collect digital evidence, and respond effectively to security breaches using industry-standard forensics tools.",
            topics: ["Evidence Collection", "Incident Analysis"],
            borderClass: "border-t-orange-500/30",
            tagClass: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
            dotClass: "bg-orange-500",
            buttonText: "VIEW CURRICULUM",
            buttonClass: "bg-white/5 hover:bg-white/10 text-white"
        },
        {
            id: 7,
            title: "Capture the Flag (CTF) Challenges",
            tag: "Practical",
            link: "/programs/ctf",
            description: "Sharpen your hacking skills through hands-on CTF competitions. Practice real-world scenarios in a safe, competitive environment.",
            topics: ["Real-World Scenarios", "Competitive Training"],
            borderClass: "border-t-red-500/30",
            tagClass: "bg-red-500/10 text-red-400 border border-red-500/20",
            dotClass: "bg-red-500",
            buttonText: "JOIN CHALLENGES",
            buttonClass: "bg-white/5 hover:bg-white/10 text-white"
        }
    ];

    return (
        <section id="programs" className="py-16 sm:py-24 md:py-32 px-4 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 md:mb-20 lg:mb-32 xl:mb-64 gap-6">
                    <div className="max-w-2xl">
                        <p className="text-blue-500 font-cyber tracking-widest text-xs mb-4 uppercase">Elite Training Tracks</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cyber font-bold text-white">Programs We Offer</h2>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm max-w-xs font-light">
                        From foundational security to professional-grade penetration testing, we build the next generation of digital defenders.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            id={program.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                            className={`glass-card p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col h-full border-t-2 ${program.borderClass}`}
                        >
                            <div className="mb-4 sm:mb-6">
                                <span className={`px-3 py-1 text-[10px] font-cyber rounded-full uppercase ${program.tagClass}`}>
                                    {program.tag}
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{program.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                                {program.description}
                            </p>
                            <ul className="space-y-3 mb-6 sm:mb-8 text-xs text-gray-500">
                                {program.topics.map((topic, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className={`w-1 h-1 rounded-full ${program.dotClass}`}></div> {topic}
                                    </li>
                                ))}
                            </ul>
                            {program.link ? (
                                <Link
                                    to={program.link}
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className={`w-full py-3 sm:py-4 text-xs font-cyber transition rounded-lg text-center flex items-center justify-center min-h-[44px] ${program.buttonClass}`}
                                >
                                    {program.buttonText}
                                </Link>
                            ) : (
                                <button className={`w-full py-3 sm:py-4 text-xs font-cyber transition rounded-lg min-h-[44px] ${program.buttonClass}`}>
                                    {program.buttonText}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}