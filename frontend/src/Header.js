import React, { useState, useEffect } from 'react';
import './Header.css';

const Headers = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        
        // Trigger animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero-section">
            {/* Animated Background */}
            <div className="hero-background">
                <div className="bg-layer bg-layer-1" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
                <div className="bg-layer bg-layer-2" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
                <div className="bg-layer bg-layer-3" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
            </div>

            {/* Main Content */}
            <div className="hero-content">
                <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
                    <div className="hero-badge">
                        <span>🏆 Premium Quality</span>
                    </div>
                    
                    <h1 className="hero-title">
                        <span className="title-line">DISCOVER</span>
                        <span className="title-line highlight">BLACK BULL</span>
                        <span className="title-line">DISCOVER</span>
                        <span className="title-line">QUALITY</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        Leading tyre distributor in Dubai with premium brands and exceptional service
                    </p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">25+</span>
                            <span className="stat-label">Brands</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>
                    
                    <div className="hero-actions">
                        <button 
                            className="btn btn-primary"
                            onClick={() => scrollToSection('products')}
                        >
                            <span>Explore Products</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('contact')}
                        >
                            <span>Get Quote</span>
                            <i className="fas fa-phone"></i>
                        </button>
                    </div>
                </div>
                
                <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
                    <div className="logo-showcase">
                        <div className="company-logo">
                            <img src={require('./img/logo.png')} alt="Black Bull Tyres Logo" />
                        </div>
                        <div className="logo-glow"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
                <span>Scroll to explore</span>
            </div>
        </div>
    );
};

export default Headers;