import React, { useState, useEffect } from 'react';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState(initialService || 'Not sure yet');
    const [budget, setBudget] = useState('Not sure yet');
    const [solveDetails, setSolveDetails] = useState('');
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (isOpen) {
            setService(initialService || 'Not sure yet');
        }
    }, [initialService, isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !solveDetails) {
            setStatus('error');
            setMessage('Please fill in all required fields.');
            return;
        }

        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            setMessage(`Thank you, ${name}! Your inquiry has been received. We'll get back to you within 24 hours.`);
            setTimeout(() => {
                setName('');
                setEmail('');
                setSolveDetails('');
                setStatus(null);
                setMessage('');
                onClose();
            }, 2500);
        }, 1000);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" aria-label="Close modal" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="modal-header">
                    <span className="section-tagline">Upfront Quote</span>
                    <h3 className="modal-title">Get a Free Upfront Quote</h3>
                    <p className="modal-subtitle">
                        Share your goals with us, and we'll reply with a transparent flat rate.
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="modal-success-box text-center">
                        <span className="material-symbols-outlined success-icon">task_alt</span>
                        <h4>Quote Request Sent!</h4>
                        <p>{message}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="modal-form">
                        <div className="form-group mb-3">
                            <label htmlFor="modal-name">Your Name *</label>
                            <input 
                                type="text" 
                                id="modal-name" 
                                required 
                                placeholder="Jane Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="modal-email">Email Address *</label>
                            <input 
                                type="email" 
                                id="modal-email" 
                                required 
                                placeholder="jane@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="modal-service">What do you want to build?</label>
                            <select 
                                id="modal-service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                disabled={status === 'loading'}
                                className="modal-select"
                            >
                                <option value="Landing Page / Website">Landing Page / Website (from $300)</option>
                                <option value="Web App (custom)">Web App (custom) (from $5,000)</option>
                                <option value="Mobile App">Mobile App (from $8,000)</option>
                                <option value="SaaS Tool Development">SaaS Tool Development (from $10,000)</option>
                                <option value="Not sure yet">Not sure yet</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="modal-budget">Estimated Budget Range (Optional)</label>
                            <select 
                                id="modal-budget"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                disabled={status === 'loading'}
                                className="modal-select"
                            >
                                <option value="Under $1,000">Under $1,000</option>
                                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                <option value="$10,000+">$10,000+</option>
                                <option value="Not sure yet">Not sure yet</option>
                            </select>
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="modal-solve">What are you trying to solve? *</label>
                            <textarea 
                                id="modal-solve" 
                                rows="3" 
                                required 
                                placeholder="E.g., We need to automate our invoicing, build a booking flow for customers, or launch a mobile app..."
                                value={solveDetails}
                                onChange={(e) => setSolveDetails(e.target.value)}
                                disabled={status === 'loading'}
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <div className="form-status error mb-3">
                                {message}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="btn btn-primary modal-submit-btn mb-2"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Submitting...' : 'Submit Quote Request'}
                        </button>
                        
                        <p className="text-center text-muted text-[11px]">
                            No spam. Your details stay private.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
