import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileOpen(prev => !prev);
    };

    const handleLinkClick = () => {
        setMobileOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className={`container header-container ${mobileOpen ? 'mobile-open' : ''}`}>
                <a href="#" className="brand-wrapper" onClick={handleLinkClick}>
                    <Logo width={36} height={36} />
                    <span className="logo">Zo<span className="logo-accent">serve</span></span>
                </a>
                <nav className="nav-menu">
                    <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
                    <a href="#different" className="nav-link" onClick={handleLinkClick}>Why Us</a>
                    <a href="#services" className="nav-link" onClick={handleLinkClick}>Services</a>
                    <a href="#pricing" className="nav-link" onClick={handleLinkClick}>Pricing</a>
                    <a href="#faq" className="nav-link" onClick={handleLinkClick}>FAQ</a>
                    <a href="#contact" className="btn btn-primary mobile-cta" onClick={handleLinkClick}>Get a Free Quote</a>
                </nav>
                <a href="#contact" className="btn btn-primary nav-cta" onClick={handleLinkClick}>Get a Free Quote</a>
                <button className="mobile-nav-toggle" aria-label="Toggle Menu" onClick={toggleMobileMenu}>
                    <span className="material-symbols-outlined">
                        {mobileOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>
        </header>
    );
}
