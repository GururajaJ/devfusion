import React, { useState, useEffect } from 'react';

import { insertLead } from '../supabase';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState(initialService || 'Other');
    const [solveDetails, setSolveDetails] = useState('');
    
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setService(initialService || 'Other');
            const timer = setTimeout(() => setIsVisible(true), 30);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !companyName || !email || !country || !phone) {
            setStatus('error');
            setMessage('Please fill in all required fields.');
            return;
        }

        setStatus('loading');

        try {
            await insertLead({
                name,
                company_name: companyName,
                email,
                country,
                phone,
                service,
                solve_details: solveDetails
            });
            
            setStatus('success');
            setMessage(`Thank you, ${name}! Your demo request has been received. We'll get back to you within 24 hours.`);
            setTimeout(() => {
                setName('');
                setCompanyName('');
                setEmail('');
                setCountry('');
                setPhone('');
                setSolveDetails('');
                setStatus(null);
                setMessage('');
                onClose();
            }, 2500);
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'Failed to submit request. Please try again.');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={`modal-card animate-scale-in ${isVisible ? 'visible' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" aria-label="Close modal" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="modal-header">
                    <span className="section-tagline">Limited Time Offer</span>
                    <h3 className="modal-title">Watch the 3 Minutes Demo</h3>
                    <p className="modal-subtitle">
                        Enter your details to get instant access to our expert demo.
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="modal-success-box text-center">
                        <span className="material-symbols-outlined success-icon">task_alt</span>
                        <h4>Demo Request Sent!</h4>
                        <p>{message}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="modal-form">
                        <div className="form-group mb-3">
                            <label htmlFor="modal-name">Name *</label>
                            <input 
                                type="text" 
                                id="modal-name" 
                                required 
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="modal-company">Company Name *</label>
                            <input 
                                type="text" 
                                id="modal-company" 
                                required 
                                placeholder="Enter your company name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="modal-email">Email Address *</label>
                            <input 
                                type="email" 
                                id="modal-email" 
                                required 
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-grid mb-3">
                            <div className="form-group">
                                <label htmlFor="modal-country">Country *</label>
                                <input 
                                    type="text" 
                                    id="modal-country" 
                                    required 
                                    placeholder="Enter your country" 
                                    value={country} 
                                    onChange={(e) => setCountry(e.target.value)} 
                                    disabled={status === 'loading'} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="modal-phone">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    id="modal-phone" 
                                    required 
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="modal-service">What do you want to build? *</label>
                            <select 
                                id="modal-service"
                                required
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                disabled={status === 'loading'}
                                className="modal-select"
                            >
                                <option value="Landing Page / Website">Landing Page / Website</option>
                                <option value="Web App (custom)">Web App (custom)</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="SaaS Tool Development">SaaS Tool Development</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="modal-solve">What is your need</label>
                            <textarea 
                                id="modal-solve" 
                                rows="3" 
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
                            {status === 'loading' ? 'Submitting...' : 'Get Demo Access →'}
                        </button>
                        
                        <p className="text-center text-muted text-[11px]">
                            By clicking, you agree to our <a href="#privacy" onClick={(e) => { e.preventDefault(); onClose(); }} style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Privacy Policy</a>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
