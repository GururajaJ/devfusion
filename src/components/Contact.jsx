import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !details) {
            setStatus('error');
            setMessage('Please fill in all fields.');
            return;
        }

        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            setMessage(`Thank you, ${name}! We have received your details and will get back to you within 24 hours.`);
            
            setName('');
            setEmail('');
            setDetails('');
        }, 1200);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container container-narrow animate-on-scroll">
                <div className="contact-card">
                    <div className="contact-header text-center">
                        <h2 className="section-title text-white">Ready for Software That Doesn't Overcharge or Trap You?</h2>
                        <p className="section-body text-light text-center-max-width">
                            Tell us what you need, and we'll get back to you within 24 hours with a clear, honest quote.
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="form-name">Your Name</label>
                                <input 
                                    type="text" 
                                    id="form-name" 
                                    required 
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="form-email" 
                                    required 
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-details">Project Details</label>
                            <textarea 
                                id="form-details" 
                                rows="4" 
                                required 
                                placeholder="Tell us briefly about what you want to build (e.g. mobile app, web dashboard, landing page)..."
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                disabled={status === 'loading'}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-accent form-submit-btn"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Sending...' : 'Get a Free Quote'}
                        </button>
                    </form>
                    
                    {status && status !== 'loading' && (
                        <div className={`form-status ${status}`}>
                            {message}
                        </div>
                    )}

                    <div className="contact-alternatives">
                        <span className="alternative-text">Or reach out directly:</span>
                        <div className="alternative-links">
                            <a href="mailto:info@zoserve.com" className="alt-link">
                                <span className="material-symbols-outlined text-[20px]">mail</span>
                                <span>info@zoserve.com</span>
                            </a>
                            <a href="https://wa.me/15550192834" target="_blank" rel="noopener noreferrer" className="alt-link">
                                <span className="material-symbols-outlined text-[20px]">chat</span>
                                <span>WhatsApp: +1 (555) 019-2834</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
