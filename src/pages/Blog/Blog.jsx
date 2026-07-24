import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Compass, TrendingUp } from 'lucide-react';
import { blogs, categories } from '../../data/blogs';
import BlogCard from '../../components/BlogCard/BlogCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Newsletter from '../../components/Newsletter/Newsletter';
import useSEO from '../../hooks/useSEO';

const POSTS_PER_PAGE = 6;

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);

    // Dynamic SEO Head Info
    useSEO({
        title: "Insights, Guides & Tech Knowledge | ZoServe Blog",
        description: "Read the latest guides on web development cost, mobile application architecture, AI implementations, and enterprise ERP scaling from ZoServe.",
        url: window.location.href,
        type: "website"
    });

    // Reset page on search or category filter change
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    // Calculate category counts
    const categoryCounts = useMemo(() => {
        const counts = { All: blogs.length };
        categories.forEach(c => {
            counts[c] = blogs.filter(b => b.category === c).length;
        });
        return counts;
    }, []);

    // Filtered & Sorted Blogs
    const processedBlogs = useMemo(() => {
        let result = [...blogs];

        // 1. Filter by Category
        if (selectedCategory !== 'All') {
            result = result.filter(b => b.category === selectedCategory);
        }

        // 2. Filter by Search Query
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase().trim();
            result = result.filter(b => 
                b.title.toLowerCase().includes(query) || 
                b.description.toLowerCase().includes(query)
            );
        }

        // 3. Sort
        if (sortBy === 'newest') {
            // Blogs are already formatted in simulated date orders, we can sort by id desc
            result.sort((a, b) => b.id - a.id);
        } else if (sortBy === 'oldest') {
            result.sort((a, b) => a.id - b.id);
        } else if (sortBy === 'popular') {
            // Sort by readTime length or specific related articles counts as proxy for popularity
            result.sort((a, b) => (b.related?.length || 0) - (a.related?.length || 0));
        }

        return result;
    }, [selectedCategory, searchQuery, sortBy]);

    // Pagination splits
    const paginatedBlogs = useMemo(() => {
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        return processedBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);
    }, [processedBlogs, currentPage]);

    const totalPages = Math.ceil(processedBlogs.length / POSTS_PER_PAGE);

    // Trending Blogs (Hardcoded top 3 from list for social validation)
    const trendingBlogs = useMemo(() => {
        return blogs.slice(0, 3);
    }, []);

    // Featured Blog (Post #1 or #2)
    const featuredBlog = blogs[0];

    return (
        <div className="bg-slate-50/50 min-h-screen pt-24 pb-16">
            <div className="container px-4 mx-auto">
                {/* Hero Section */}
                <header className="py-12 md:py-16 text-center max-w-3xl mx-auto flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-blue-50 text-blue-700 text-xs font-extrabold uppercase px-4 py-1.5 rounded-full mb-4 tracking-wider border border-blue-100"
                    >
                        ZOSERVE INSIGHTS
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-5"
                    >
                        Insights, Guides &amp; <br />
                        <span className="text-blue-600">Software Development Knowledge</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed font-medium"
                    >
                        Helping agencies, startups, and enterprises build sustainable digital products. No fluff. Just clear blueprints and actionable guidance.
                    </motion.p>
                </header>

                {/* Featured Blog Highlight Banner */}
                {searchQuery === '' && selectedCategory === 'All' && currentPage === 1 && (
                    <motion.section 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center"
                    >
                        <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative border border-slate-50 flex-shrink-0">
                            <img 
                                src={featuredBlog.image} 
                                alt={featuredBlog.title}
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                                <Award size={13} className="text-amber-400" />
                                FEATURED ARTICLE
                            </span>
                        </div>
                        
                        <div className="w-full lg:w-1/2 text-left">
                            <span className="text-xs uppercase font-extrabold text-blue-600 tracking-wider">
                                {featuredBlog.category}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2 mb-4 leading-snug hover:text-blue-600 transition-colors">
                                <Link to={`/blog/${featuredBlog.slug}`}>{featuredBlog.title}</Link>
                            </h2>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                                {featuredBlog.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img 
                                        src={featuredBlog.author.avatar} 
                                        alt={featuredBlog.author.name}
                                        className="w-10 h-10 rounded-full object-cover border"
                                    />
                                    <div>
                                        <p className="text-xs font-bold text-slate-800 leading-tight">{featuredBlog.author.name}</p>
                                        <p className="text-[10px] text-slate-400">{featuredBlog.author.role}</p>
                                    </div>
                                </div>
                                
                                <Link 
                                    to={`/blog/${featuredBlog.slug}`}
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-3 rounded-xl inline-flex items-center gap-1.5 shadow-sm transition-all"
                                >
                                    Read Article
                                    <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Categories Row */}
                <section className="mb-10">
                    <h3 className="text-xs font-extrabold tracking-wider uppercase text-slate-400 mb-4 text-left flex items-center gap-1.5">
                        <Compass size={14} className="text-slate-400" />
                        Explore Categories
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-start pb-2 border-b border-slate-100">
                        <CategoryCard 
                            category="All" 
                            isActive={selectedCategory === 'All'}
                            count={categoryCounts['All']}
                            onClick={() => handleCategorySelect('All')}
                        />
                        {categories.map((c, i) => (
                            <CategoryCard 
                                key={i}
                                category={c}
                                isActive={selectedCategory === c}
                                count={categoryCounts[c]}
                                onClick={() => handleCategorySelect(c)}
                            />
                        ))}
                    </div>
                </section>

                {/* Filter and Search controls */}
                <section className="mb-8">
                    <SearchBar 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </section>

                {/* Main Content Grid & Trending Side panel */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Articles Grid */}
                    <div className="w-full lg:w-2/3">
                        <h3 className="text-xs font-extrabold tracking-wider uppercase text-slate-400 mb-6 text-left">
                            {selectedCategory !== 'All' ? `${selectedCategory} Articles` : 'Latest Articles'} ({processedBlogs.length})
                        </h3>

                        <AnimatePresence mode="wait">
                            {paginatedBlogs.length > 0 ? (
                                <motion.div 
                                    key={selectedCategory + searchQuery + sortBy + currentPage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {paginatedBlogs.map((blog) => (
                                        <BlogCard key={blog.id} blog={blog} />
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm"
                                >
                                    <p className="text-slate-500 font-medium">No articles found matching your query.</p>
                                    <button 
                                        onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                        className="text-blue-600 font-bold text-xs mt-3 underline"
                                    >
                                        Clear Search Filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Pagination Navigation */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-12">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-blue-600 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-sm"
                                >
                                    Previous
                                </button>
                                
                                <span className="text-xs font-bold text-slate-500 px-4">
                                    Page {currentPage} of {totalPages}
                                </span>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-blue-600 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-sm"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Panel */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        {/* Trending Articles Widget */}
                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                            <h3 className="text-xs font-extrabold tracking-wider uppercase text-slate-400 mb-5 flex items-center gap-1.5">
                                <TrendingUp size={15} className="text-blue-600" />
                                Trending Articles
                            </h3>
                            
                            <div className="flex flex-col gap-5">
                                {trendingBlogs.map((blog, idx) => (
                                    <Link 
                                        key={blog.id} 
                                        to={`/blog/${blog.slug}`} 
                                        className="flex gap-4 items-start group text-left"
                                    >
                                        <span className="text-2xl font-black text-slate-200 group-hover:text-blue-600 transition-colors w-6 leading-none">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <span className="text-[9px] uppercase tracking-wider font-extrabold text-blue-600">
                                                {blog.category}
                                            </span>
                                            <h4 className="text-sm font-bold text-slate-800 line-clamp-2 mt-0.5 leading-snug group-hover:text-blue-600 transition-colors">
                                                {blog.title}
                                            </h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Agency Marketing Ad Callout */}
                        <div className="bg-blue-600 text-white rounded-3xl p-8 text-left shadow-lg shadow-blue-500/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-8 -translate-y-8 pointer-events-none"></div>
                            
                            <h4 className="text-xl font-black leading-snug mb-3">
                                Software shouldn't cost a fortune.
                            </h4>
                            <p className="text-blue-100 text-xs leading-relaxed mb-6 font-medium">
                                Zoserve designs custom React web apps, mobile apps, and SaaS systems at direct, fair flat-rates. Get full code ownership and video guides.
                            </p>
                            <a 
                                href="#contact"
                                onClick={(e) => {
                                    // Trigger homepage navigation & quote
                                    window.location.href = "/#contact";
                                }}
                                className="bg-white text-blue-700 hover:bg-slate-50 px-5 py-3 rounded-xl text-xs font-bold tracking-wide transition-all inline-block shadow-sm"
                            >
                                Get a Free Quote Today
                            </a>
                        </div>
                    </div>
                </div>

                {/* Newsletter Box */}
                <Newsletter />
            </div>
        </div>
    );
}
