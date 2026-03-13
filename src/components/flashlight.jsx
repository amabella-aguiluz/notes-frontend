// src/components/Flashlight.jsx
import React, { useState, useEffect } from 'react';

const Flashlight = () => {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // Start off-screen

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                transition: 'background 0.05s ease-out', // Makes movement feel smoother
                background: `radial-gradient(
          400px at ${mousePos.x}px ${mousePos.y}px, 
          transparent 0%, 
        rgba(0, 0, 0, 0) 10%,  
        rgba(0, 0, 0, 0.2) 40%, 
        rgba(0, 0, 0, 0.5) 80%, 
        rgba(0, 0, 0, 1) 500%)`
            }}
        />
    );
};

export default Flashlight;