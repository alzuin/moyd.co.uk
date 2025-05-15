import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
import { Helmet } from 'react-helmet-async';
import LogoLight from './assets/MOYD-LTD-R1-02.png';

const Security = () => {
    const [loading, setLoading] = useState(true);

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
                <title>ISO27001 & SOC 2 Audit Support for Startups | MOYD</title>
                <meta name="description" content="Get fast, pragmatic support to prepare for ISO27001, PCI-DSS, or SOC 2 certification. Designed for lean, early-stage teams." />
                <meta property="og:title" content="Security Consulting for Startups | MOYD" />
                <meta property="og:description" content="Startup-friendly ISO27001 and SOC 2 support — without bureaucracy. Lean controls, real audits." />
                <meta property="og:image" content="https://moyd.co.uk/moyd-banner.png" />
                <meta property="og:url" content="https://moyd.co.uk/security" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>


            <div className="font-sans text-gray-800">
                {/* Hero */}
                <ParallaxBanner
                    layers={[
                        { image: "https://images.unsplash.com/photo-1614064548237-096f735f344f?auto=format&fit=crop&w=1920&q=80", speed: -60 },
                        { speed: 0, expanded: false, children: <div className="absolute inset-0 bg-black opacity-50" /> }
                    ]}
                    className="h-screen"
                >
                    <div className="flex flex-col justify-center items-center h-full text-white text-center px-4">
                        <motion.img
                            src={LogoLight}
                            alt="MOYD Logo"
                            className="w-96 md:w-[500px] lg:w-[600px] drop-shadow-lg p-4 rounded"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Secure Your Domain
                        </motion.h1>
                        <motion.p
                            className="text-2xl md:text-3xl mt-6 max-w-4xl drop-shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            ISO27001, PCI-DSS, and SOC 2 support for startups and scaleups <br/> fast, pragmatic, and audit-ready.
                        </motion.p>
                        <motion.a
                            href="#contact"
                            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg transition z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Book a Call
                        </motion.a>
                    </div>
                </ParallaxBanner>

                {/* MOYD Security Method */}
                <section className="py-20 bg-white px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10">The MOYD Security Method</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
                        <div className="p-6 bg-gray-50 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">🧭 Map the Gaps</h3>
                            <p>Run a fast, focused gap analysis against ISO27001, PCI-DSS or SOC 2 to identify what’s missing and where to start.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">🛠️ Organize Controls</h3>
                            <p>Design a lean, effective control framework aligned with your actual risks — no bloat, just clarity.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">📄 Your Policies</h3>
                            <p>Get clean, practical policies and evidence templates — ready for onboarding, audits, and growth.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow">
                            <h3 className="text-2xl font-semibold mb-2">🔍 Drive Audit Success</h3>
                            <p>Hands-on support for internal audits, supplier checks, and the final sprint to ISO27001, PCI-DSS or SOC 2 certification.</p>
                        </div>
                    </div>
                </section>

                {/* Who It's For */}
                <section className="py-20 bg-gray-50 px-4 text-center">
                    <h2 className="text-4xl font-bold mb-10">Who It's For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="p-6 bg-white rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Seed-to-Series A Startups</h3>
                            <p className="text-gray-600">Get investor-grade security without the enterprise overhead.</p>
                        </div>
                        <div className="p-6 bg-white rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">B2B SaaS & Regulated Sectors</h3>
                            <p className="text-gray-600">Meet the security demands of clients and partners with confidence.</p>
                        </div>
                        <div className="p-6 bg-white rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Teams Facing Their First Audit</h3>
                            <p className="text-gray-600">Avoid delays and pitfalls by preparing right the first time.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">Book a Call</h2>
                    <p className="mb-6 max-w-2xl mx-auto text-lg">
                        Let’s talk through your security needs. <br />No fluff, no jargon — just practical, tailored support.
                    </p>

                    <div className="mt-10">
                        {loading && <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>}
                        <div className="flex justify-center">
                            <div
                                className="calendly-inline-widget"
                                data-url="https://calendly.com/a-zuin-moyd/30min"
                                style={{ width: '100%', maxWidth: '1200px', height: '850px' }}
                            ></div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MOYD LTD</p>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/alzuin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Connect on LinkedIn
                        </a>
                    </p>
                </footer>
            </div>
            {/* Page content here */}
        </>
    );
};

export default Security;