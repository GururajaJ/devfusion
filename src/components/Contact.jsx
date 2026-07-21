import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('Other');
    const [solveDetails, setSolveDetails] = useState('');
    
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !companyName || !email || !country || !phone) {
            setStatus('error');
            setMessage('Please fill in all fields.');
            return;
        }

        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            setMessage(`Thank you, ${name}! We have received your inquiry and will get back to you within 24 hours.`);
            
            setName('');
            setCompanyName('');
            setEmail('');
            setCountry('');
            setPhone('');
            setSolveDetails('');
            setService('Other');
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
                                <label htmlFor="form-name">Name *</label>
                                <input 
                                    type="text" 
                                    id="form-name" 
                                    required 
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-company">Company Name *</label>
                                <input 
                                    type="text" 
                                    id="form-company" 
                                    required 
                                    placeholder="Enter your company name"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="form-email">Email Address *</label>
                            <input 
                                type="email" 
                                id="form-email" 
                                required 
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-grid mt-3">
                            <div className="form-group">
                                <label htmlFor="form-country">Country *</label>
                                <input 
                                    type="text" 
                                    id="form-country" 
                                    required 
                                    placeholder="Enter your country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-phone">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    id="form-phone" 
                                    required 
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="form-service">What do you want to build? *</label>
                            <select 
                                id="form-service"
                                required
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                disabled={status === 'loading'}
                                className="modal-select"
                                style={{ background: 'var(--color-bg-base)', border: '1px solid var(--color-border-light)' }}
                            >
                                <option value="Landing Page / Website">Landing Page / Website</option>
                                <option value="Web App (custom)">Web App (custom)</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="SaaS Tool Development">SaaS Tool Development</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="form-solve">What is your need</label>
                            <textarea 
                                id="form-solve" 
                                rows="4" 
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
                            {status === 'loading' ? 'Sending...' : 'Get Demo Access →'}
                        </button>
                        
                        <p className="text-center text-light text-[11px] mt-2 opacity-80">
                            By clicking, you agree to our <a href="#privacy" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Privacy Policy</a>
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
