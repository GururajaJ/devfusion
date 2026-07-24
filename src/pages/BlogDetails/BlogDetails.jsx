import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, ChevronLeft, ChevronRight, MessageSquare, PhoneCall } from 'lucide-react';
import { blogs } from '../../data/blogs';
import ShareButtons from '../../components/ShareButtons/ShareButtons';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import RelatedArticles from '../../components/RelatedArticles/RelatedArticles';
import FAQ from '../../components/FAQ/FAQ';
import useSEO from '../../hooks/useSEO';

export default function BlogDetails() {
    const { slug } = useParams();

    // Find the blog item
    const blog = useMemo(() => {
        return blogs.find(b => b.slug === slug);
    }, [slug]);

    // Handle non-existent blogs
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm max-w-md">
                    <h2 className="text-2xl font-black text-slate-800 mb-3">Article Not Found</h2>
                    <p className="text-slate-500 mb-6">The blog post you are looking for does not exist or has been renamed.</p>
                    <Link to="/blog" className="btn btn-primary inline-flex items-center gap-1.5 px-6 py-3 rounded-xl font-bold">
                        <ArrowLeft size={16} />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    // Dynamic SEO Metadata
    useSEO({
        title: blog.metaTitle || `${blog.title} | ZoServe Blog`,
        description: blog.metaDescription || blog.description,
        url: window.location.href,
        type: "article",
        image: blog.image
    });

    // Article schema JSON-LD
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": blog.title,
        "description": blog.description,
        "image": blog.image,
        "datePublished": new Date(blog.date + ", 2026").toISOString().split('T')[0],
        "author": {
            "@type": "Person",
            "name": blog.author.name,
            "jobTitle": blog.author.role
        },
        "publisher": {
            "@type": "Organization",
            "name": "ZoServe",
            "logo": {
                "@type": "ImageObject",
                "url": "https://zoserve.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
        }
    };

    // Previous & Next Navigation
    const currentIndex = blogs.findIndex(b => b.id === blog.id);
    const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

    return (
        <div className="bg-slate-50/50 min-h-screen pt-24 pb-16">
            {/* Inject JSON-LD Article Schema */}
            <script type="application/ld+json">
                {JSON.stringify(articleSchema)}
            </script>

            <div className="max-w-[1200px] w-full mx-auto px-6">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                    <span>/</span>
                    <span className="text-slate-600 truncate">{blog.title}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* Main Content Area */}
                    <article className="w-full lg:w-2/3 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm text-left">
                        {/* Header Details */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                                {blog.category}
                            </span>
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-slate-100 mb-8">
                            <div className="flex items-center gap-3">
                                <img 
                                    src={blog.author.avatar} 
                                    alt={blog.author.name}
                                    className="w-10 h-10 rounded-full object-cover border border-slate-100"
                                />
                                <div className="text-left">
                                    <p className="text-xs font-bold text-slate-800 leading-tight">{blog.author.name}</p>
                                    <p className="text-[10px] text-slate-400">{blog.author.role}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={13} />
                                    {blog.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={13} />
                                    {blog.readTime}
                                </span>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="rounded-2xl overflow-hidden aspect-video mb-10 border border-slate-50">
                            <img 
                                src={blog.image} 
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Article markup content rendering */}
                        <div 
                            className="blog-rich-content text-slate-700 leading-relaxed text-base md:text-lg mb-12"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Share buttons row */}
                        <div className="py-6 border-y border-slate-50 flex items-center justify-between flex-wrap gap-4 mb-10">
                            <ShareButtons url={window.location.href} title={blog.title} />
                        </div>

                        {/* Agency Conversion Lead-Gen Box */}
                        <div className="bg-slate-900 text-white rounded-3xl p-8 text-left my-10 relative overflow-hidden border border-slate-800">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full translate-x-8 -translate-y-8 pointer-events-none"></div>
                            
                            <h3 className="text-2xl font-extrabold mb-3">
                                Need {blog.category === 'AI' ? 'an AI Solution' : blog.category === 'Mobile App Development' ? 'a Mobile App' : 'a Custom Website'}?
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                Partner with ZoServe. We build flat-rate, high-performance software systems. You get full walkthrough documentation and 100% source code ownership from day one.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a 
                                    href="/#contact"
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-center font-bold px-6 py-3.5 rounded-2xl text-sm transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                                >
                                    Get Free Quote
                                </a>
                                <a 
                                    href="https://wa.me/919976184318"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-center font-bold px-6 py-3.5 rounded-2xl text-sm transition-all active:scale-[0.98]"
                                >
                                    Hire Developers
                                </a>
                                <a 
                                    href="mailto:info@zoserve.com"
                                    className="bg-transparent hover:bg-slate-800 text-white text-center font-semibold px-6 py-3.5 rounded-2xl text-sm transition-all"
                                >
                                    Book Consultation
                                </a>
                            </div>
                        </div>

                        {/* FAQ Block */}
                        <FAQ faqs={blog.faqs} />

                        {/* Prev / Next Article Nav */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-8 mt-10">
                            {prevBlog ? (
                                <Link 
                                    to={`/blog/${prevBlog.slug}`}
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-600 group text-left transition-colors"
                                >
                                    <ChevronLeft className="text-slate-400 group-hover:text-blue-600 flex-shrink-0" />
                                    <div className="min-w-0">
                                        <span className="text-[10px] text-slate-400 uppercase font-semibold">PREVIOUS ARTICLE</span>
                                        <h4 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">{prevBlog.title}</h4>
                                    </div>
                                </Link>
                            ) : <div />}
                            
                            {nextBlog && (
                                <Link 
                                    to={`/blog/${nextBlog.slug}`}
                                    className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-600 group text-right transition-colors"
                                >
                                    <div className="min-w-0 flex-grow">
                                        <span className="text-[10px] text-slate-400 uppercase font-semibold">NEXT ARTICLE</span>
                                        <h4 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">{nextBlog.title}</h4>
                                    </div>
                                    <ChevronRight className="text-slate-400 group-hover:text-blue-600 flex-shrink-0" />
                                </Link>
                            )}
                        </div>

                        {/* Comment Placeholder */}
                        <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 mt-10 text-center">
                            <h4 className="font-bold text-slate-800 flex items-center justify-center gap-2 mb-2">
                                <MessageSquare size={16} className="text-slate-400" />
                                Comments &amp; Feedback
                            </h4>
                            <p className="text-xs text-slate-500">Community discussion features are temporarily offline. Have questions? Reach out to our engineers directly.</p>
                        </div>
                    </article>

                    {/* Sidebar Area */}
                    <aside className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-24">
                        <TableOfContents content={blog.content} />
                        
                        <RelatedArticles 
                            currentBlogId={blog.id} 
                            relatedIds={blog.related || []} 
                            allBlogs={blogs} 
                        />
                    </aside>
                </div>
            </div>
        </div>
    );
}
