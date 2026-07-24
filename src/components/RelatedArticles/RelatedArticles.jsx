import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

export default function RelatedArticles({ currentBlogId, relatedIds, allBlogs }) {
    // Find related articles by ID and filter out current
    const relatedBlogs = allBlogs
        .filter(b => relatedIds.includes(b.id) && b.id !== currentBlogId)
        .slice(0, 3); // Max 3 items

    if (relatedBlogs.length === 0) return null;

    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-lg font-extrabold text-slate-900 mb-5 pb-3 border-b border-slate-50">
                Related Articles
            </h3>
            
            <div className="flex flex-col gap-4">
                {relatedBlogs.map((blog) => (
                    <Link 
                        key={blog.id} 
                        to={`/blog/${blog.slug}`}
                        className="flex gap-4 group items-start hover:bg-slate-50/50 p-2 rounded-xl transition-all"
                    >
                        <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="w-16 h-16 rounded-lg object-cover border border-slate-100 flex-shrink-0"
                        />
                        <div className="flex-grow min-w-0">
                            <span className="text-[10px] uppercase tracking-wider font-extrabold text-blue-600">
                                {blog.category}
                            </span>
                            <h4 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors mt-0.5">
                                {blog.title}
                            </h4>
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-1">
                                <Clock size={10} />
                                {blog.readTime}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
