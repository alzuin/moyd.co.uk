import { useState } from 'react'
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ParallaxBanner } from "react-scroll-parallax";
import MoydAnimation from "./assets/moyd-method.json";
import AlbertoPhoto from './assets/alberto.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
    }
};

import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [mode, setMode] = useState("message"); // or "booking"

    return (
        <>
            <div className="font-sans text-gray-800">
                {/* Hero Section with Parallax */}
                <ParallaxBanner
                    layers={[{ image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80", speed: -60 }]}
                    className="h-screen"
                >
                    <div className="flex flex-col justify-center items-center h-full text-white text-center px-4 bg-black/40">
                        <motion.h1
                            className="text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-lg"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Master of Your (Tech) Domain
                        </motion.h1>
                        <motion.p
                            className="text-2xl md:text-3xl mt-4 max-w-3xl drop-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Fractional CTO services for startups and scale-ups — build with clarity, scale with confidence.
                        </motion.p>
                        <motion.a
                            href="#contact"
                            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg transition z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Let’s Talk
                        </motion.a>
                    </div>
                </ParallaxBanner>

                {/* About Section */}
                <section className="py-20 bg-white px-4">
                    <h2 className="text-4xl font-bold mb-10 text-center">Hi, I'm Alberto</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto text-lg leading-relaxed text-center md:text-left">
                        <img
                            src={AlbertoPhoto}
                            alt="Alberto Zuin"
                            className="w-48 h-48 rounded-full object-cover shadow-md"
                        />
                        <div>
                            <p>
                                I’m Alberto Zuin, a fractional CTO with 25+ years of leadership in fast-moving tech companies.
                                From launching complex, regulated products in new markets to managing ISO27001 audits and AI strategy,
                                I’ve helped companies make the right decisions at the right time — without overbuilding.
                            </p>
                            <br />
                            <p>
                                MOYD started over a decade ago as my original consultancy — helping clients tackle early-stage tech decisions. Today, MOYD v2.0 brings that legacy into the AI era with sharper focus and broader experience.
                            </p>
                            <br />
                            <p>
                                <strong>Certifications:</strong> CITP, CGEIT, CISM, ITIL, AWS, PMI-ACP<br />
                                <strong>Academic:</strong> MBA Tech Mgmt, MSc in Artificial Intelligence
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 bg-gray-50 px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10">What I Do</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Tech Leadership</h3>
                            <p>On-demand strategic tech guidance — from MVP to roadmap execution.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Architecture & AI Readiness</h3>
                            <p>Designing scalable systems with future-proof tech and AI integration in mind.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Security & Governance</h3>
                            <p>Compliance, ISO27001, and risk reduction strategies baked into your stack.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Team Strategy</h3>
                            <p>Helping you hire or structure internal/external tech teams effectively.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Vendor Evaluation</h3>
                            <p>Support for choosing the right tools, platforms, or outsourced partners.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Product-Market Fit Acceleration</h3>
                            <p>Helping early-stage teams validate product direction and avoid costly missteps in tech execution.</p>
                        </div>
                    </motion.div>
                </section>

                {/* Who It's For Section */}
                <section className="py-20 bg-white px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10">Who It’s For</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="p-6 bg-gray-50 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Startup Founders</h3>
                            <p>Launching your MVP with confidence and avoiding common tech pitfalls.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Scale-Up Execs</h3>
                            <p>Need a CTO but not full-time? Get expert leadership when and where you need it.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Investors</h3>
                            <p>Want a tech sanity check before funding or reviewing a portfolio’s progress?</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Non-Technical Teams</h3>
                            <p>Looking for clarity and direction to align business goals with tech execution.</p>
                        </div>
                    </motion.div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-gray-50 px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10">What People Say</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <blockquote className="italic text-lg">
                            “Alberto gave us the clarity we needed to understand our gaps in information security.”<br />
                            <span className="block mt-2 font-semibold">— Founder, early-stage sports betting startup</span>
                        </blockquote>
                        <blockquote className="italic text-lg">
                            “We needed a CTO, but weren’t ready to hire one full-time. Alberto filled that role seamlessly and helped us scale with confidence.”<br />
                            <span className="block mt-2 font-semibold">— CEO, Real Estate SaaS startup</span>
                        </blockquote>
                        <blockquote className="italic text-lg">
                            “Alberto is the way to go to assess the technical posture of a possible investment.”<br />
                            <span className="block mt-2 font-semibold">— Angel Investor</span>
                        </blockquote>
                    </div>
                </section>

                {/* MOYD Method Section */}
                <section className="py-20 bg-white text-center px-4">
                    <h2 className="text-4xl font-bold mb-10">The MOYD Method</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
                        <div className="w-full md:w-1/2">
                            <Lottie animationData={MoydAnimation} loop={true} />
                        </div>
                        <motion.div
                            className="w-full md:w-1/2 grid gap-6"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-6 bg-gray-50 rounded-lg shadow text-left">
                                <h3 className="text-2xl font-semibold mb-2">🗺️ Map</h3>
                                <p>A one-time strategic review to evaluate architecture, risks, and roadmap alignment.<br />
                                    This fixed-cost engagement is fully waived if we move forward into an ongoing collaboration.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg shadow text-left">
                                <h3 className="text-2xl font-semibold mb-2">🧠 Optimize</h3>
                                <p>Define the right tech decisions, architecture, AI strategy, and vendor selection — tailored to your stage and goals.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg shadow text-left">
                                <h3 className="text-2xl font-semibold mb-2">🚀 Your Domain</h3>
                                <p>Execute confidently with ongoing strategic guidance through a flexible fractional CTO arrangement (e.g., 8–16 hours/month).</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">Let’s Talk</h2>
                    <p className="mb-6 max-w-2xl mx-auto text-lg">
                        Ready to master your tech domain? Choose to send a message or request a meeting below.
                    </p>

                    {/* Toggle */}
                    <div className="flex justify-center gap-6 mb-10">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="contactMode"
                                value="message"
                                checked={mode === "message"}
                                onChange={() => setMode("message")}
                                className="mr-2"
                            />
                            Send a Message
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="contactMode"
                                value="booking"
                                checked={mode === "booking"}
                                onChange={() => setMode("booking")}
                                className="mr-2"
                            />
                            Book a Meeting
                        </label>
                    </div>

                    {/* Message Form */}
                    {mode === "message" && (
                        <div className="mt-10">
                            <iframe
                                src="https://sibforms.com/serve/MUIFAPkGoJzfNXVrxIF7ftz3GQCdcQNNwLMi3lwLwXgPZNMmoQxgBTg_uqhivOgs-kZylp4TH0QieeEb4fyr7PW-bYo12hVlUGRfhZsrt8SiRkpgLMDDx_XHBmEE3PHarUhKBONQ2Q3fO1tfQkHmtTdecnj_2BJQTZTnRSZhEFH85ikhaNC-XvvoKR_vqJfmGy0qBkvJtvzTtSnU"
                                title="Send a Message"
                                className="w-full max-w-2xl h-auto min-h-[700px] mx-auto border-none"
                                loading="lazy"
                            ></iframe>
                        </div>
                    )}

                    {/* Booking Form */}
                    {mode === "booking" && (
                        <div className="mt-10">
                            <iframe
                                src="https://meet.brevo.com/alberto-zuin/30-minute-meeting"
                                title="Book a Meeting"
                                className="w-full max-w-2xl h-auto min-h-[900px] mx-auto border-none"
                                loading="lazy"
                            ></iframe>
                        </div>
                    )}
                </section>

                {/* Footer */}
                <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Alberto Zuin – MOYD v2.0</p>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/alzuin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Connect on LinkedIn
                        </a>
                        <span className="mx-2">|</span>
                        <a
                            href="https://github.com/alzuin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            GitHub
                        </a>
                    </p>
                </footer>
            </div>
        </>
    )
}

export default App
