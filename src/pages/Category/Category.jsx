import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass } from 'lucide-react';
import { blogs } from '../../data/blogs';
import BlogCard from '../../components/BlogCard/BlogCard';
import useSEO from '../../hooks/useSEO';

export default function Category() {
    const { category } = useParams();
    const decodedCategory = decodeURIComponent(category);

    // Filter blogs for the selected category
    const categoryBlogs = useMemo(() => {
        return blogs.filter(b => b.category === decodedCategory);
    }, [decodedCategory]);

    // Dynamic SEO Metadata
    useSEO({
        title: `${decodedCategory} Guides & Articles | ZoServe Blog`,
        description: `Read our comprehensive developer insights, pricing blueprints, and technical scaling articles about ${decodedCategory} on the ZoServe blog.`,
        url: window.location.href,
        type: "website"
    });

    return (
        <div className="bg-slate-50/50 min-h-screen pt-24 pb-16 text-left">
            <div className="container px-4 mx-auto">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8 max-w-5xl mx-auto">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                    <span>/</span>
                    <span className="text-slate-600">Category</span>
                    <span>/</span>
                    <span className="text-slate-600 font-bold">{decodedCategory}</span>
                </nav>

                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 border-b border-slate-100 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="bg-blue-50 text-blue-600 text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full mb-3 inline-block">
                                CATEGORY EXPLORER
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                                {decodedCategory}
                            </h1>
                            <p className="text-slate-500 text-sm md:text-base mt-2 max-w-xl">
                                Detailed guides, blueprints, and strategies relating to {decodedCategory} built by our senior engineering team.
                            </p>
                        </div>

                        <Link 
                            to="/blog"
                            className="bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-bold text-xs px-5 py-3 rounded-xl inline-flex items-center gap-1.5 shadow-sm transition-all self-start md:self-auto"
                        >
                            <ArrowLeft size={14} />
                            View All Categories
                        </Link>
                    </div>

                    {/* Articles Grid */}
                    {categoryBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categoryBlogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
                            <Compass size={40} className="mx-auto text-slate-300 mb-4" />
                            <p className="text-slate-500 font-medium">No articles found in this category yet.</p>
                            <Link 
                                to="/blog"
                                className="text-blue-600 font-bold text-xs mt-3 inline-block underline"
                            >
                                Back to Blog Homepage
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
