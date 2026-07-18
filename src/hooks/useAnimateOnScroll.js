import { useEffect, useRef } from 'react';

/**
 * Custom React Hook that sets up an Intersection Observer
 * to apply viewport-based scroll entrance animations.
 */
export default function useAnimateOnScroll() {
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
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully enters
        });

        const container = containerRef.current;
        if (container) {
            const targets = container.querySelectorAll(
                '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in'
            );
            targets.forEach(target => observer.observe(target));
        }

        return () => {
            if (container) {
                const targets = container.querySelectorAll(
                    '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in'
                );
                targets.forEach(target => observer.unobserve(target));
            }
        };
    }, []);

    return containerRef;
}
