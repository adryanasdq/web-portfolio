import { useEffect, useState, useCallback } from 'react';

const SECTIONS = ['about', 'projects', 'contact'];

export const useScroll = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = window.scrollY;
            
            setScrolled(winScroll > 50);
            if (winScroll < 50) setActiveSection('');

            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (height > 0) {
                const scrolledPercentage = (winScroll / height) * 100;
                setScrollProgress(scrolledPercentage);
            }
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = useCallback((sectionId: string) => {
        if (!sectionId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return { scrolled, scrollProgress, activeSection, scrollToSection };
};