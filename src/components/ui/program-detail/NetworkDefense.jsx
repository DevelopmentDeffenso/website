import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';

export default function NetworkDefense() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Network Defense',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
    };

    const modules = [
        {
            title: "Module 1: Perimeter Security",
            italic: '"Hardening the first line of defense."',
            topics: ["Firewall Architecture & Management", "ACL Configuration", "VPN & Secure Remote Access"]
        },
        {
            title: "Module 2: IDS/IPS Configuration",
            italic: '"Spotting and stopping intrusions."',
            topics: ["Snort & Suricata Implementation", "Traffic Monitoring", "Alert Tuning & Analysis"]
        },
        {
            title: "Module 3: Network Hardening",
            italic: '"Closing the gaps in infrastructure."',
            topics: ["VLAN Segmentation", "Device Hardening (Switch/Router)", "Port Security & NAC"]
        },
        {
            title: "Module 4: Traffic Analysis",
            italic: '"Seeing through the data flows."',
            topics: ["Wireshark Mastery", "Packet Analysis", "Network Protocol Auditing"]
        }
    ];

    const roles = [
        "Network Security Engineer",
        "Firewall Administrator",
        "Infrastructure Defender",
        "Security Architect"
    ];

    return (
        <div className="bg-grid relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
            <Navbar />

            {/* Top Black Feather Gradient */}
            <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-0"></div>

            <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative z-10">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-cyber rounded-full uppercase tracking-wider mb-6 inline-block">
                        Course ID: 005 | Defense
                    </span>
                    <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-6">
                        Network <br />
                        <span className="text-cyan-500">Defense</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        The ultimate shield. Master the art of defending network infrastructure against sophisticated attacks and build a resilient digital perimeter.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/contact"
                            className="bg-blue-600 px-8 py-4 rounded-xl font-cyber text-xs tracking-widest hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 text-center flex items-center justify-center mt-5"
                        >
                            ENROLL NOW
                        </Link>
                    </div>
                </div>
                <div className="glass-card rounded-[20px] p-10 border-t-4 border-t-cyan-500 relative z-10">
                    <div className="space-y-6">
                        <div className="flex justify-between border-b border-white/5 pb-4">
                            <span className="text-gray-500 font-cyber text-xs uppercase tracking-widest">Duration</span>
                            <span className="text-white font-bold">8 Weeks</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-4">
                            <span className="text-gray-500 font-cyber text-xs uppercase tracking-widest">Level</span>
                            <span className="text-white font-bold">Intermediate</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-4">
                            <span className="text-gray-500 font-cyber text-xs uppercase tracking-widest">Labs</span>
                            <span className="text-white font-bold">25+ Defense Exercises</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 font-cyber text-xs uppercase tracking-widest">Mentorship</span>
                            <span className="text-white font-bold">Architecture Reviews</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-cyber font-bold mb-4 uppercase tracking-widest">The Curriculum</h2>
                        <p className="text-gray-500">Mastering the infrastructure protection layer.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {modules.map((module, idx) => (
                            <div key={idx} className="glass-card p-10 rounded-[20px] group transition-all border-l-4 border-l-transparent hover:border-l-cyan-500 hover:bg-cyan-500/5">
                                <h3 className="font-cyber text-cyan-500 mb-2">{module.title}</h3>
                                <p className="text-sm text-gray-400 italic mb-4">{module.italic}</p>
                                <ul className="text-xs text-gray-500 space-y-2">
                                    {module.topics.map((topic, tIdx) => (
                                        <li key={tIdx}>• {topic}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 text-center relative z-10 mt-20 mb-20">
                <h2 className="text-4xl font-cyber font-bold mb-12 uppercase tracking-widest">Potential Roles</h2>
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
                    {roles.map((role, idx) => (
                        <span key={idx} className="glass-card px-10 py-5 rounded-[20px] text-[12px] font-cyber tracking-[0.2em] text-cyan-400 uppercase">
                            {role}
                        </span>
                    ))}
                </div>
            </section>

            <section className="py-24 px-6 relative z-10 max-w-4xl mx-auto mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-cyber font-bold mb-4 uppercase tracking-widest">Direct Inquiry</h2>
                    <p className="text-gray-500">Become a guardian of network infrastructure.</p>
                </div>

                <div className="glass-card p-10 rounded-[30px] bg-[#0f0f0f]/70 backdrop-blur-3xl border border-white/10 shadow-2xl transition-all hover:border-cyan-500/30">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-cyber text-gray-400 uppercase tracking-widest mb-2 ml-1">Agent Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white text-sm focus:border-cyan-500 focus:bg-cyan-500/5 focus:outline-none transition-all shadow-inner"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-cyber text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="email@address.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white text-sm focus:border-cyan-500 focus:bg-cyan-500/5 focus:outline-none transition-all shadow-inner"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-cyber text-gray-400 uppercase tracking-widest mb-2 ml-1">Subject</label>
                            <select
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-400 text-sm focus:border-cyan-500 focus:bg-cyan-500/5 focus:outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="Network Defense">Network Defense</option>
                                <option value="Junior Ethical Hacker">Junior Ethical Hacker</option>
                                <option value="SOC Analyst Track">SOC Analyst Track</option>
                                <option value="CPENT Masterclass">CPENT Masterclass</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Business Collaboration">Business Collaboration</option>
                                <option value="Feedback">Feedback</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[10px] font-cyber text-gray-400 uppercase tracking-widest mb-2 ml-1">Transmission Data</label>
                            <textarea
                                rows="5"
                                placeholder="Enter your message here..."
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white text-sm focus:border-cyan-500 focus:bg-cyan-500/5 focus:outline-none transition-all resize-none shadow-inner"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white font-cyber text-xs tracking-[0.3em] uppercase font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] btn-glow"
                        >
                            Send Encrypted Message
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}
