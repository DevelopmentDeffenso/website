import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function CursorBlob() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            // Hide blob if we are on the home page and haven't scrolled past the hero section
            if (location.pathname === '/') {
                setIsVisible(window.scrollY > window.innerHeight * 0.9);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <div
            className={`fixed pointer-events-none z-[1] w-[400px] h-[400px] rounded-full bg-cyber-blue/15 blur-[100px] will-change-[transform,left,top] transition-[opacity,scale] duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
            style={{
                left: mousePos.x,
                top: mousePos.y,
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
}
