import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        // Simulate subscription API request
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setEmail('');
        }, 1200);
    };

    return (
        <section className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-xl px-8 py-12 md:p-16 text-center text-white max-w-4xl mx-auto my-12 animate-on-scroll">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                <span className="bg-blue-900/50 text-blue-400 border border-blue-800/50 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                    STAY INSPIRED
                </span>
                
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    Get Custom Tech Insights directly to your inbox
                </h3>
                
                <p className="text-slate-400 text-sm md:text-base mb-8">
                    We publish detailed reports about software pricing, app development guides, and tech architectures once a week. Zero spam.
                </p>

                {submitted ? (
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-3 rounded-2xl text-sm font-semibold"
                    >
                        <CheckCircle2 size={18} />
                        Subscription successful! Thank you.
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your work email address"
                            className="w-full px-5 py-3.5 bg-slate-800/80 border border-slate-700/80 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all text-sm"
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                            disabled={loading}
                        >
                            {loading ? 'Subscribing...' : 'Subscribe'}
                            <Send size={15} />
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
