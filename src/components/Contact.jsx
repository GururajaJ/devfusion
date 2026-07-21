import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('Not sure yet');
    const [budget, setBudget] = useState('Not sure yet');
    const [solveDetails, setSolveDetails] = useState('');
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !solveDetails) {
            setStatus('error');
            setMessage('Please fill in all fields.');
            return;
        }

        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            setMessage(`Thank you, ${name}! We have received your inquiry and will get back to you within 24 hours.`);
            
            setName('');
            setEmail('');
            setSolveDetails('');
            setService('Not sure yet');
            setBudget('Not sure yet');
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

                        <div className="form-grid mt-3">
                            <div className="form-group">
                                <label htmlFor="form-service">What do you want to build?</label>
                                <select 
                                    id="form-service"
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                    disabled={status === 'loading'}
                                    className="modal-select"
                                    style={{ background: 'var(--color-bg-base)', border: '1px solid var(--color-border-light)' }}
                                >
                                    <option value="Landing Page / Website">Landing Page / Website (from $300)</option>
                                    <option value="Web App (custom)">Web App (custom) (from $5,000)</option>
                                    <option value="Mobile App">Mobile App (from $8,000)</option>
                                    <option value="SaaS Tool Development">SaaS Tool Development (from $10,000)</option>
                                    <option value="Not sure yet">Not sure yet</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-budget">Estimated Budget (Optional)</label>
                                <select 
                                    id="form-budget"
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    disabled={status === 'loading'}
                                    className="modal-select"
                                    style={{ background: 'var(--color-bg-base)', border: '1px solid var(--color-border-light)' }}
                                >
                                    <option value="Under $1,000">Under $1,000</option>
                                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                    <option value="$10,000+">$10,000+</option>
                                    <option value="Not sure yet">Not sure yet</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="form-solve">What are you trying to solve?</label>
                            <textarea 
                                id="form-solve" 
                                rows="4" 
                                required 
                                placeholder="E.g., We need to automate our invoicing, build a booking flow for customers, or launch a mobile app..."
                                value={solveDetails}
                                onChange={(e) => setSolveDetails(e.target.value)}
                                disabled={status === 'loading'}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-accent form-submit-btn mt-3"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Sending...' : 'Get a Free Quote'}
                        </button>
                        
                        <p className="text-center text-light text-[11px] mt-2 opacity-80">
                            No spam. Your details stay private.
                        </p>
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
                            <a href="https://wa.me/919976184318" target="_blank" rel="noopener noreferrer" className="alt-link">
                                <span className="material-symbols-outlined text-[20px]">chat</span>
                                <span>WhatsApp: +91 99761 84318</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
