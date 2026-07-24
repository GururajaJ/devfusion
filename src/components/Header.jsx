import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header({ onOpenQuoteModal }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

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

    const handleCtaClick = (e) => {
        e.preventDefault();
        setMobileOpen(false);
        if (onOpenQuoteModal) {
            onOpenQuoteModal('Other');
        }
    };

    // Calculate base path prefix for anchor links if we are not on the homepage
    const isHome = location.pathname === '/';
    const pathPrefix = isHome ? '' : '/';

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className={`container header-container ${mobileOpen ? 'mobile-open' : ''}`}>
                <Link to="/" className="brand-wrapper" onClick={handleLinkClick}>
                    <Logo width={36} height={36} />
                    <span className="logo">Zo<span className="logo-accent">serve</span></span>
                </Link>
                <nav className="nav-menu">
                    <a href={`${pathPrefix}#about`} className="nav-link" onClick={handleLinkClick}>About</a>
                    <a href={`${pathPrefix}#different`} className="nav-link" onClick={handleLinkClick}>Why Us</a>
                    <a href={`${pathPrefix}#services`} className="nav-link" onClick={handleLinkClick}>Services</a>
                    <a href={`${pathPrefix}#pricing`} className="nav-link" onClick={handleLinkClick}>Pricing</a>
                    <a href={`${pathPrefix}#faq`} className="nav-link" onClick={handleLinkClick}>FAQ</a>
                    <Link to="/blog" className={`nav-link ${location.pathname.startsWith('/blog') ? 'text-blue-600 font-bold' : ''}`} onClick={handleLinkClick}>Blog</Link>
                    <button className="btn btn-primary mobile-cta border-none cursor-pointer" onClick={handleCtaClick}>Get a Free Quote</button>
                </nav>
                <button className="btn btn-primary nav-cta border-none cursor-pointer" onClick={handleCtaClick}>Get a Free Quote</button>
                <button className="mobile-nav-toggle" aria-label="Toggle Menu" onClick={toggleMobileMenu}>
                    <span className="material-symbols-outlined">
                        {mobileOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>
        </header>
    );
}
