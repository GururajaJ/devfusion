import { useEffect } from 'react';

export default function useSEO({ title, description, url, category, type = 'article', image = '' }) {
    useEffect(() => {
        // Set document title
        if (title) {
            document.title = title;
        }

        // Set meta description
        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.setAttribute('name', 'description');
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', description);
        }

        // Set Canonical link
        if (url) {
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.setAttribute('rel', 'canonical');
                document.head.appendChild(canonical);
            }
            canonical.setAttribute('href', url);
        }

        // Helper to update meta tag
        const setMetaTag = (property, attrName, value) => {
            if (!value) return;
            let meta = document.querySelector(`meta[${attrName}="${property}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attrName, property);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', value);
        };

        // Open Graph Meta Tags
        setMetaTag('og:title', 'property', title);
        setMetaTag('og:description', 'property', description);
        setMetaTag('og:url', 'property', url);
        setMetaTag('og:type', 'property', type);
        if (image) {
            setMetaTag('og:image', 'property', image);
        }

        // Twitter Card Meta Tags
        setMetaTag('twitter:card', 'name', 'summary_large_image');
        setMetaTag('twitter:title', 'name', title);
        setMetaTag('twitter:description', 'name', description);
        if (image) {
            setMetaTag('twitter:image', 'name', image);
        }

        // Clean up or reset if needed
    }, [title, description, url, type, image]);
}
