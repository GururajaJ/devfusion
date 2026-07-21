import React, { useEffect } from 'react';

export default function PrivacyModal({ isOpen, onClose }) {
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

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card modal-card-large animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" aria-label="Close modal" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="privacy-body">
                    <h2 className="privacy-title text-primary mb-1">Privacy Policy</h2>
                    <p className="privacy-date text-muted mb-4">Last updated: July 21, 2026</p>

                    <p className="mb-4">
                        Zoserve ("we," "us," "our") respects your privacy. This page explains what information we collect, how we use it, and how we protect it when you visit zoserve.com or work with us.
                    </p>

                    <h3 className="privacy-h3">Information We Collect</h3>
                    <p className="mb-2">When you contact us through our quote form, email, or WhatsApp, we may collect:</p>
                    <ul className="privacy-list mb-4">
                        <li>Your name and contact details (email, phone number)</li>
                        <li>Project details you share with us</li>
                        <li>Basic website usage data (pages visited, general location, device type) via analytics tools</li>
                    </ul>

                    <h3 className="privacy-h3">How We Use Your Information</h3>
                    <p className="mb-2">We use the information you provide only to:</p>
                    <ul className="privacy-list mb-4">
                        <li>Respond to your inquiries and provide quotes</li>
                        <li>Deliver the services you've requested</li>
                        <li>Improve our website and services</li>
                    </ul>

                    <h3 className="privacy-h3">What We Don't Do</h3>
                    <ul className="privacy-list mb-4">
                        <li>We do not sell, rent, or trade your personal information to third parties.</li>
                        <li>We do not send spam or unsolicited marketing emails.</li>
                        <li>We do not share your project details with anyone outside our team without your permission.</li>
                    </ul>

                    <h3 className="privacy-h3">Data Security</h3>
                    <p className="mb-4">
                        We take reasonable steps to protect your information from unauthorized access, but no method of transmission over the internet is 100% secure.
                    </p>

                    <h3 className="privacy-h3">Analytics</h3>
                    <p className="mb-4">
                        We may use privacy-friendly analytics tools to understand how visitors use our site. This data is anonymized and not used to identify you personally.
                    </p>

                    <h3 className="privacy-h3">Your Rights</h3>
                    <p className="mb-4">
                        You can request to see, correct, or delete any personal information we hold about you at any time by contacting us at <a href="mailto:info@zoserve.com" className="text-primary font-medium">info@zoserve.com</a>.
                    </p>

                    <h3 className="privacy-h3">Changes to This Policy</h3>
                    <p className="mb-4">
                        We may update this policy occasionally. Changes will be posted on this page with an updated date.
                    </p>

                    <h3 className="privacy-h3">Contact Us</h3>
                    <p className="mb-4">
                        If you have questions about this policy, reach out at <a href="mailto:info@zoserve.com" className="text-primary font-medium">info@zoserve.com</a>.
                    </p>

                    <div className="text-right mt-6">
                        <button className="btn btn-primary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
