import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery, sortBy, setSortBy }) {
    return (
        <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Input field */}
            <div className="relative w-full md:max-w-md flex-grow">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, guides, knowledge bases..."
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm"
                />
            </div>
            
            {/* Filters / Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 whitespace-nowrap">
                    <SlidersHorizontal size={14} />
                    Sort By:
                </span>
                
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:border-blue-600 cursor-pointer shadow-sm"
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                </select>
            </div>
        </div>
    );
}
