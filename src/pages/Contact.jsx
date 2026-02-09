import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Course Inquiry (Jr|EH, SOC, CPENT)',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add actual submission logic (e.g., EmailJS) here if needed
        alert('Message sent successfully!');
    };

    return (
        <div className="bg-grid relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
            {/* Top & Bottom Black Feather Gradients */}
            <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-0"></div>

            <Navbar />

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 md:pt-40 pb-8 sm:pb-12">
                <div className="text-center mb-16 sm:mb-24 md:mb-32">
                    <p className="text-blue-500 font-cyber tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs mb-3 sm:mb-4 uppercase">Direct Link Established</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cyber font-bold text-white">Get in Touch</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

                    <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[30px] bg-[#0f0f0f]/70 backdrop-blur-3xl border border-white/10 shadow-2xl">
                            <h3 className="font-cyber text-xs sm:text-sm tracking-widest text-blue-500 uppercase mb-4 sm:mb-6">Headquarters</h3>

                            <div className="space-y-6 sm:space-y-8">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-blue-500/10 rounded-[10px] text-blue-500">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm sm:text-base">Location</p>
                                        <p className="text-gray-500 text-xs sm:text-sm mt-1">Kerala, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-blue-500/10 rounded-[10px] text-blue-500">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm sm:text-base">Email Support</p>
                                        <p className="text-gray-500 text-xs sm:text-sm mt-1">support@deffenso.academy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
                                <p className="text-[9px] sm:text-[10px] font-cyber text-gray-600 uppercase tracking-widest mb-3 sm:mb-4">Leadership Links</p>
                                <div className="flex gap-3 sm:gap-4">
                                    <a href="#" className="p-2 sm:p-3 bg-white/5 border border-white/5 rounded-2xl text-gray-400 hover:text-blue-500 hover:bg-blue-500/5 transition-all">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[30px] bg-[#0f0f0f]/70 backdrop-blur-3xl border border-white/10 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-[9px] sm:text-[10px] font-cyber text-gray-400 uppercase tracking-widest mb-2 ml-1">Agent Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white text-sm focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none transition-all shadow-inner min-h-[44px]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[9px] sm:text-[10px] font-cyber text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="email@address.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white text-sm focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none transition-all shadow-inner min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[9px] sm:text-[10px] font-cyber text-gray-400 uppercase tracking-widest mb-2 ml-1">Subject</label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-400 text-sm focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none transition-all appearance-none min-h-[44px]"
                                    >
                                        <option value="Course Inquiry (Jr|EH, SOC, CPENT)">Course Inquiry (Jr|EH, SOC, CPENT)</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Business Collaboration">Business Collaboration</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[9px] sm:text-[10px] font-cyber text-gray-400 uppercase tracking-widest mb-2 ml-1">Transmission Data</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Enter your message here..."
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white text-sm focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none transition-all resize-none shadow-inner"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 sm:py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white font-cyber text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] btn-glow min-h-[44px]"
                                >
                                    Send Encrypted Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
