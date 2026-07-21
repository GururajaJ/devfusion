import React from 'react';

export default function Logo({ className = "brand-logo", width = 36, height = 36 }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 500 450" 
            fill="none"
            className={className}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <defs>
                <linearGradient id="zoserveCompGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0A84FF" />
                    <stop offset="100%" stopColor="#0052FF" />
                </linearGradient>
            </defs>
            
            <g fill="url(#zoserveCompGrad)">
                <path d="M 150 110 L 225 50 L 415 50 A 32 32 0 1 1 415 110 L 225 110 Z" />
                <polygon points="105,370 375,100 425,100 155,370" />
                <path d="M 350 340 L 275 400 L 85 400 A 32 32 0 1 1 85 340 L 275 340 Z" />
                <polygon points="380,240 435,115 410,130 375,200" />
            </g>
            
            <circle cx="415" cy="80" r="16" fill="currentColor" opacity="0" className="dark:fill-slate-900" />
            <circle cx="415" cy="80" r="16" fill="#0A0F1D" />
            <circle cx="85" cy="370" r="16" fill="#0A0F1D" />
        </svg>
    );
}
