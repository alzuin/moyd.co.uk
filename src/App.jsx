import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ParallaxBanner } from "react-scroll-parallax";
import MoydAnimation from "./assets/moyd-method.json";
import AlbertoPhoto from './assets/alberto.jpg';
import LogoLight from './assets/MOYD-LTD-R1-02.png';
import useGTMPageView from './hooks/useGTMPageView';
import { Helmet } from 'react-helmet-async';
import Cal, { getCalApi } from "@calcom/embed-react";

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
    const [loading, setLoading] = useState(true);

    useGTMPageView();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setLoading(false);
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <Helmet>
                <title>Moyd: Master Of Your (Tech) Domain | Tech Clarity for Startup Founders</title>
                <meta name="description" content="Helping early-stage founders make high-stakes tech decisions with confidence — before hiring a full-time CTO." />
                <meta property="og:title" content="MOYD — Tech Clarity for Startup Founders" />
                <meta property="og:description" content="Tech leadership, AI strategy, and scalable solutions for startups." />
                <meta property="og:image" content="https://moyd.co.uk/moyd-banner.png" />
                <meta property="og:url" content="https://moyd.co.uk" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MOYD – Fractional CTO Services" />
                <meta name="twitter:description" content="A strategic tech partner for founder-led teams making their first serious build decisions." />
                <meta name="twitter:image" content="https://moyd.co.uk/moyd-banner.png" />
            </Helmet>
            <div className="font-sans text-gray-800">
                {/* Hero Section with Parallax */}
                <ParallaxBanner
                    layers={[{ image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80", speed: -60 },
                    { speed: 0, expanded: false, children: <div className="absolute inset-0 bg-black opacity-50" /> }]}
                    className="h-screen"
                >
                    <div className="flex flex-col justify-center items-center h-full text-white text-center px-4 ">
                        {/*<motion.h1*/}
                        {/*    className="text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-lg p-4 rounded"*/}
                        {/*    initial={{ opacity: 0, y: -30 }}*/}
                        {/*    animate={{ opacity: 1, y: 0 }}*/}
                        {/*    transition={{ duration: 0.8 }}*/}
                        {/*>*/}
                        {/*    Master of Your (Tech) Domain*/}
                        {/*</motion.h1>*/}
                        <motion.img
                            src={LogoLight}
                            alt="MOYD Logo"
                            className="w-96 md:w-[500px] lg:w-[600px] drop-shadow-lg p-4 rounded"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mt-6 drop-shadow-lg p-4 rounded">
                            Technical Clarity for Founders
                        </motion.h2>
                        <motion.p
                            className="text-2xl md:text-3xl mt-4 max-w-7xl drop-shadow-lg p-4 rounded"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Each month, I help founders avoid expensive tech mistakes <br/> before they write a line of code or sign a single contract.
                        </motion.p>
                        <motion.a
                            href="#contact"
                            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg transition z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Book a Call
                        </motion.a>
                        <motion.a
                            href="/download"
                            className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg transition z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            Get the Free CTO Toolkit
                        </motion.a>
                    </div>
                </ParallaxBanner>

                {/* About Section */}
                <section className="py-20 bg-white px-4">
                    <h2 className="text-4xl font-bold mb-10 text-center">Who’s Behind MOYD</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto text-lg leading-relaxed text-center md:text-left">
                        <img
                            src={AlbertoPhoto}
                            alt="Alberto Zuin"
                            className="w-48 h-48 rounded-full object-cover shadow-md"
                        />
                        <div>
                            <p>
                                “Hi, I'm Alberto. I’ve led the tech side of a venture-backed SaaS from MVP to scale. <br/>
                                These days, I work with a small number of early-stage founders, offering clear thinking, hands-on experiments, and strategic guidance before they commit to full-time hires or expensive rewrites. <br/>
                                It’s not just advice: it’s a shared investment in helping you build momentum and make the right calls early so you can move faster, not just further”
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 bg-gray-50 px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10">How I Help Founders</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Weekly 30-min strategy calls</h3>
                            <p className="text-gray-600">Talk through challenges, roadmaps, or decisions: a consistent space to think clearly and move forward.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Help choosing the right architecture, team, or tech stack</h3>
                            <p className="text-gray-600">Get a second opinion before you lock in expensive decisions and avoid months of technical debt.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Fast-turn experiments to test before you build too much</h3>
                            <p className="text-gray-600">Quickly validate risky assumptions or unknowns with just-enough code and structure.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">Supporting a limited number of founders</h3>
                            <p className="text-gray-600">I only work with a few teams each month to keep the support hands-on, focused, and genuinely useful.</p>
                        </div>
                    </motion.div>
                </section>

                {/* Who It's For Section */}
                <section className="py-20 bg-white px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10">Who It’s For</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="p-6 bg-gray-50 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Funded, founder-led startups without a technical cofounder</h3>
                            <p className="text-gray-600">You’ve raised money and built traction, but still need a trusted tech voice on your side before hiring full-time.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Early-stage teams feeling the weight of tech debt or dev delays</h3>
                            <p className="text-gray-600">Things are shipping, but slowly, and the architecture or dev team might be holding you back from scaling smart.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Pre-seed founders shaping their first build plan</h3>
                            <p className="text-gray-600">You’ve got an idea and early validation; now you want to build right without overcommitting too soon.</p>
                        </div>
                    </motion.div>
                </section>

                {/* Testimonials Section  */}
                <section className="py-20 bg-gray-50 px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10">What People Say</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <blockquote className="italic text-lg">
                            “Alberto helped shape our early tech strategy and architecture. His guidance set us on the right path from day one, helping us launch a focused MVP and avoid costly rework later.”<br />
                            <span className="block mt-2 font-semibold">
                                — Diana Simpson Hernandez, CEO of{" "}
                                <a
                                    href="https://propmatchiq.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black underline"
                                >
                                    PropMatchIQ
                                </a>
                            </span>
                        </blockquote>
                        <blockquote className="italic text-lg">
                            “When our pilot launched faster than planned and we had no tech team in place, Alberto went beyond mentoring: he stepped in with calm, human support to help me turn the idea into something real.”<br />
                            <span className="block mt-2 font-semibold">
                                — Izzy Mintus, Founder of{" "}
                                <a
                                    href="https://officialforma.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black underline"
                                >
                                    Forma Technology
                                </a>
                            </span>
                        </blockquote>
                        {/*<blockquote className="italic text-lg">
                            “Alberto is the way to go to assess the technical posture of a possible investment.”<br />
                            <span className="block mt-2 font-semibold">— Angel Investor</span>
                        </blockquote>*/}
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
                                <p>A strategic review to get clarity on your architecture, roadmap, and risks, so you can move forward with confidence. Often the starting point for deeper collaboration.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg shadow text-left">
                                <h3 className="text-2xl font-semibold mb-2">🧠 Optimize</h3>
                                <p>Define smart, stage-appropriate tech decisions, from stack and system design to AI integration and vendor selection.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg shadow text-left">
                                <h3 className="text-2xl font-semibold mb-2">🚀 Your Domain</h3>
                                <p>Execute with ongoing strategic support, staying focused, moving fast, and avoiding costly rewrites or misfires.</p>
                            </div>
                        </motion.div>
                    </div>
                    {/* Engagement model */}
                    <div className="mt-12 text-left max-w-4xl mx-auto text-lg leading-relaxed">
                        <h3 className="text-2xl font-bold mb-4">How We Can Work Together</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>One-time Strategic Review:</strong><br />
                                A 30-minute intro call (free) to explore needs, constraints, and fit.
                            </li>
                            <li>
                                <strong>Project-Based Engagements:</strong> <br />
                                If there’s alignment, we work together in short, focused cycles, usually anchored by weekly calls.
                            </li>
                            <li>
                                <strong>Small-scope technical probes</strong><br />
                                When needed, I’ll get hands-on to test risky ideas or evaluate options before you commit.
                            </li>
                            <li>
                                <strong>Low-commitment, high-trust:</strong><br />
                                Everything is designed to support your team without pressure, lock-ins, or jargon.
                            </li>
                        </ul>
                        <p className="mt-4">
                            Engagements are outcome-focused, transparent, and tailored to your business stage and pace. Let’s discuss what works best for you.
                        </p>
                    </div>
                </section>



                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">Book a Call</h2>
                    <p className="mb-6 max-w-2xl mx-auto text-lg">
                        Ready to master your tech domain? <br />Book a meeting below: I’m currently opening 2–3 founder slots this quarter.
                    </p>

                    <div className="mt-10">
                        {/* keep your spinner */}
                        {loading && (
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
                        )}

                        {/* Cal.com embed */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-[1200px]" style={{ height: 850 }}>
                                <Cal
                                    namespace="moyd-30min"               // arbitrary but stable
                                    calLink="alberto-zuin-moyd/30min"    // your Cal.com username/event slug
                                    style={{ width: "100%", height: "100%", overflow: "auto" }}
                                    config={{
                                        layout: "month_view",              // 'month_view' | 'week_view' | 'column_view'
                                        theme: "system",                   // respects dark mode automatically
                                        hideEventTypeDetails: false,
                                        // Optional: prefill fields if you have them
                                        // prefill: { name: "First Last", email: "user@domain.com" }
                                    }}
                                    onLoad={() => setLoading(false)}
                                    // Fire GTM/analytics on successful booking
                                    onBookingSuccessful={() => {
                                        try {
                                            // GTM-friendly event
                                            window.dataLayer = window.dataLayer || [];
                                            window.dataLayer.push({
                                                event: "cal_booking_success",
                                                cal_event: "30min",
                                                origin: "moyd.co.uk",
                                            });
                                            console.log("Cal.com booking created successfully");
                                        } catch (e) {}
                                    }}
                                />
                            </div>
                        </div>

                        {/* No-JS fallback link (good for SEO/accessibility) */}
                        <noscript>
                            <div className="mt-4">
                                <a
                                    className="text-blue-600 underline"
                                    href="https://cal.com/alberto-zuin-moyd/30min"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Open booking page
                                </a>
                            </div>
                        </noscript>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MOYD LTD v2.0</p>
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
                        Looking for help with security audits? Visit our <a
                            href="/security"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Information Security page
                        </a>
                    </p>
                </footer>
            </div>
        </>
    )
}

export default App
