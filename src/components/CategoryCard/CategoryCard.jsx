import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CategoryCard({ category, isActive, count, onClick }) {
    const content = (
        <span className="flex items-center gap-2">
            <span>{category}</span>
            {count !== undefined && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                    {count}
                </span>
            )}
        </span>
    );

    const baseClass = `inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium cursor-pointer transition-all duration-200 ${
        isActive 
        ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200" 
        : "bg-white border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 shadow-sm"
    }`;

    if (onClick) {
        return (
            <motion.button
                type="button"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(category);
                }}
                className={baseClass}
            >
                {content}
            </motion.button>
        );
    }

    return (
        <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <Link 
                to={`/blog/category/${encodeURIComponent(category)}`}
                className={baseClass}
            >
                {content}
            </Link>
        </motion.div>
    );
}
