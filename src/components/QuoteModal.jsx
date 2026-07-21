import React, { useState, useEffect } from 'react';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState(initialService || 'Web App (custom)');
    const [details, setDetails] = useState('');
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (initialService) {
            setService(initialService);
        }
    }, [initialService]);

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

        if (!name || !email || !details) {
            setStatus('error');
            setMessage('Please fill in all required fields.');
            return;
        }

        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            setMessage(`Thank you, ${name}! Your quote request has been sent. We will get back to you within 24 hours.`);
            setTimeout(() => {
                setName('');
                setEmail('');
                setDetails('');
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
                        Share your requirements, and we'll review them to get back to you within 24 hours with a transparent flat rate.
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
                            <label htmlFor="modal-service">Project Type</label>
                            <select 
                                id="modal-service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                disabled={status === 'loading'}
                                className="modal-select"
                            >
                                <option value="Landing Page / Website">Landing Page / Website (from $3)</option>
                                <option value="Web App (custom)">Web App (custom) (from $5)</option>
                                <option value="Mobile App (iOS/Android)">Mobile App (iOS/Android) (from $80)</option>
                                <option value="SaaS Tool Development">SaaS Tool Development (from $100)</option>
                                <option value="Other / Consultation">Other / Custom Software</option>
                            </select>
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="modal-details">Project Requirements *</label>
                            <textarea 
                                id="modal-details" 
                                rows="3" 
                                required 
                                placeholder="Describe what you want to build (key features, tech preferences, or target audience)..."
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
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
                            className="btn btn-primary modal-submit-btn"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Submitting...' : 'Submit Quote Request'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
