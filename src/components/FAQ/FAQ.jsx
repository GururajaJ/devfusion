import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    if (!faqs || faqs.length === 0) return null;

    const toggleOpen = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    // Schema.org FAQPage Structured Data
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="my-10 border-t border-slate-100 pt-10">
            {/* Inject JSON-LD FAQ Schema */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
                Frequently Asked Questions
            </h3>
            
            <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div 
                            key={index}
                            className="border border-slate-100 rounded-2xl bg-white shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleOpen(index)}
                                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-blue-600 transition-colors"
                            >
                                <span>{faq.question}</span>
                                <ChevronDown 
                                    size={18} 
                                    className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                                />
                            </button>
                            
                            <div 
                                className={`transition-all duration-300 ease-in-out ${
                                    isOpen ? 'max-h-96 opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0 pointer-events-none'
                                }`}
                            >
                                <div className="p-5 text-sm leading-relaxed text-slate-600 bg-slate-50/30">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
