import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(1); // Defaulting to the second item open as per screenshot

    const faqs = [
        {
            question: "Do I need a technical background to enroll?",
            answer: "Not necessarily. While basic computer literacy is helpful, our foundation modules are designed to take beginners from ground zero to industry-ready proficiency."
        },
        {
            question: "Are the certifications globally recognized?",
            answer: "Yes. Our curriculum aligns with major industry standards such as CompTIA Security+, CEH, and CISSP, ensuring your credentials hold weight with employers worldwide."
        },
        {
            question: "Does Deffenso Academy provide placement assistance?",
            answer: "Absolutely. We offer dedicated career support, including resume building, mock interviews, and direct connections to our network of hiring partners in the tech industry."
        },
        {
            question: "What kind of hands-on training will I receive?",
            answer: "Students spend over 70% of their time in virtual labs and \"Capture The Flag\" (CTF) simulations, tackling real-world scenarios like data breaches and network vulnerabilities."
        },
        {
            question: "Will I get access to recorded sessions if I miss a class?",
            answer: "Yes. All online and hybrid students have 24/7 access to our Learning Management System (LMS), where lectures are archived for review at your own pace."
        }
    ];

    return (
        <section className="bg-[#050505] text-white py-20 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Side: FAQ */}
                <div>
                    <h2 className="text-4xl font-bold font-cyber mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 mb-10 max-w-lg">
                        Looking for answers about cyber security education? Check out our FAQ section for
                        commonly asked questions about our online, offline, and hybrid classes.
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-white/10 overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full py-6 flex justify-between items-center text-left hover:text-blue-500 transition-colors"
                                >
                                    <span className={`text-sm md:text-base font-medium ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-blue-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    )}
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="flex justify-center lg:justify-end items-start">
                    <div className="w-full max-w-xl bg-[#111111] p-10 rounded-xl border border-white/5 shadow-2xl">
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-[#1a1a1a] border border-transparent focus:border-blue-500 focus:outline-none p-4 rounded-lg text-gray-200 placeholder-gray-600 transition"
                            />
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="w-full bg-[#1a1a1a] border border-transparent focus:border-blue-500 focus:outline-none p-4 rounded-lg text-gray-200 placeholder-gray-600 transition"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-[#1a1a1a] border border-transparent focus:border-blue-500 focus:outline-none p-4 rounded-lg text-gray-200 placeholder-gray-600 transition"
                            />
                            <textarea
                                placeholder="Ask us any queries you have"
                                rows="4"
                                className="w-full bg-[#1a1a1a] border border-transparent focus:border-blue-500 focus:outline-none p-4 rounded-lg text-gray-200 placeholder-gray-600 transition resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-4 bg-cyber-blue/10 border border-cyber-blue/50 text-cyber-blue font-bold uppercase tracking-widest rounded-lg hover:bg-cyber-blue hover:text-white transition-colors shadow-[0_0_20px_rgba(57,255,20,0.3)] btn-glow"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
