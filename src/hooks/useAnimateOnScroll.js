import { useEffect, useRef } from 'react';

/**
 * Custom React Hook that sets up an Intersection Observer
 * to apply viewport-based scroll entrance animations.
 * Can take a trigger parameter (like pathname) to scan new DOM nodes on route changes.
 */
export default function useAnimateOnScroll(trigger) {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -30px 0px' // Trigger slightly before element enters
        });

        const container = containerRef.current;
        let targets = [];
        
        if (container) {
            targets = Array.from(container.querySelectorAll(
                '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in'
            ));
            targets.forEach(target => observer.observe(target));
        }

        return () => {
            targets.forEach(target => {
                try {
                    observer.unobserve(target);
                } catch (e) {
                    // Ignore elements already unmounted
                }
            });
        };
    }, [trigger]);

    return containerRef;
}
