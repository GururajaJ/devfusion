import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

export default function TableOfContents({ content }) {
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        // Parse headings from the HTML content string using regex
        const regex = /<h([34])>(.*?)<\/h\1>/g;
        const matches = [];
        let match;

        // Reset index matching
        while ((match = regex.exec(content)) !== null) {
            const level = parseInt(match[1]);
            const text = match[2].replace(/<\/?[^>]+(>|$)/g, ""); // Strip nested html
            // Create a clean anchor slug
            const id = text.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            matches.push({ level, text, id });
        }
        setHeadings(matches);
    }, [content]);

    useEffect(() => {
        const handleScroll = () => {
            const elements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
            const scrollPosition = window.scrollY + 150;

            let currentActive = '';
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].offsetTop <= scrollPosition) {
                    currentActive = elements[i].id;
                } else {
                    break;
                }
            }
            if (currentActive) {
                setActiveId(currentActive);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once initially
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    if (headings.length === 0) return null;

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
            setActiveId(id);
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sticky top-24">
            <h3 className="text-sm font-extrabold tracking-wider uppercase text-slate-400 mb-4 flex items-center gap-2">
                <List size={16} />
                Table of Contents
            </h3>
            
            <nav className="flex flex-col gap-2.5">
                {headings.map((h, i) => (
                    <a 
                        key={i} 
                        href={`#${h.id}`}
                        onClick={(e) => handleLinkClick(e, h.id)}
                        className={`text-sm leading-snug transition-all ${
                            h.level === 4 ? 'pl-4 text-xs' : 'font-medium'
                        } ${
                            activeId === h.id 
                            ? 'text-blue-600 font-semibold border-l-2 border-blue-600 pl-2' 
                            : 'text-slate-600 hover:text-blue-600'
                        }`}
                    >
                        {h.text}
                    </a>
                ))}
            </nav>
        </div>
    );
}
