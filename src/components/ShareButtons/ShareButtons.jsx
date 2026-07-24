import React, { useState } from 'react';
import { Link as LinkIcon, Check } from 'lucide-react';

export default function ShareButtons({ url, title }) {
    const [copied, setCopied] = useState(false);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Share:</span>
            
            <div className="flex items-center gap-2">
                {/* Twitter / X */}
                <a 
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-500 hover:border-blue-500 transition-colors flex items-center justify-center"
                    aria-label="Share on X"
                >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-700 transition-colors flex items-center justify-center"
                    aria-label="Share on LinkedIn"
                >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                    </svg>
                </a>
                
                {/* Facebook */}
                <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-800 hover:border-blue-800 transition-colors flex items-center justify-center"
                    aria-label="Share on Facebook"
                >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75"/>
                    </svg>
                </a>
                
                {/* Copy Link */}
                <button 
                    onClick={handleCopy}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors relative flex items-center justify-center cursor-pointer"
                    aria-label="Copy link"
                >
                    {copied ? <Check size={14} className="text-emerald-600" /> : <LinkIcon size={14} />}
                </button>
            </div>
        </div>
    );
}
