import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function Download() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('https://api.moyd.co.uk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Submission failed');

            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80)' }}
        >
            <motion.div
                className="bg-black bg-opacity-70 max-w-2xl w-full py-16 px-6 rounded-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-4xl font-bold text-center mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Get Your Startup CTO Toolkit
                </motion.h1>

                <p className="text-center text-lg mb-10">
                    A free guide for founders to avoid expensive tech mistakes — clear, concise, and startup-tested.
                </p>

                {status === 'success' ? (
                    <div className="bg-green-100 text-green-700 p-6 rounded text-center">
                        ✅ Thanks! The guide is on its way to your inbox.
                    </div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 text-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email<span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                required
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 text-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-white">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 text-black"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Submitting...' : 'Send Me the Guide'}
                        </button>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
                        )}
                    </motion.form>
                )}
            </motion.div>
        </div>
    );
}

export default Download;
