import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ blog }) {
    return (
        <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group"
        >
            <Link to={`/blog/${blog.slug}`} className="block overflow-hidden relative aspect-video">
                <img 
                    src={blog.image} 
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {blog.category}
                </span>
            </Link>
            
            <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={13} />
                        {blog.readTime}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-3">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                
                <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                    {blog.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                        <img 
                            src={blog.author.avatar} 
                            alt={blog.author.name}
                            className="w-8 h-8 rounded-full object-cover border border-slate-100"
                        />
                        <div className="text-left">
                            <p className="text-xs font-semibold text-slate-800 leading-tight">{blog.author.name}</p>
                            <p className="text-[10px] text-slate-400 leading-none">{blog.author.role}</p>
                        </div>
                    </div>
                    
                    <Link 
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform"
                    >
                        Read More
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
