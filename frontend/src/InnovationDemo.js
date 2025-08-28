import React, { useState, useEffect } from 'react';
import './InnovationDemo.css';

const InnovationDemo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            title: "Glassmorphism Navbar",
            description: "Modern glassmorphism effect with backdrop blur and smooth transitions",
            icon: "fas fa-layer-group"
        },
        {
            title: "Parallax Background",
            description: "Multi-layered parallax background with depth and movement",
            icon: "fas fa-mountain"
        },
        {
            title: "Interactive Animations",
            description: "Smooth scroll animations and hover effects throughout",
            icon: "fas fa-magic"
        }
    ];

    return (
        <div className={`innovation-demo ${isVisible ? 'visible' : ''}`}>
            <div className="demo-header">
                <h2>Innovation Showcase</h2>
                <p>Experience the cutting-edge features of our new design</p>
            </div>
            
            <div className="demo-features">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className={`demo-feature ${index === activeFeature ? 'active' : ''}`}
                        onClick={() => setActiveFeature(index)}
                    >
                        <div className="feature-icon">
                            <i className={feature.icon}></i>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                        <div className="feature-glow"></div>
                    </div>
                ))}
            </div>

            <div className="demo-stats">
                <div className="stat-card">
                    <div className="stat-circle">
                        <span className="stat-number">60%</span>
                    </div>
                    <h4>Faster Loading</h4>
                </div>
                <div className="stat-card">
                    <div className="stat-circle">
                        <span className="stat-number">90%</span>
                    </div>
                    <h4>Better UX</h4>
                </div>
                <div className="stat-card">
                    <div className="stat-circle">
                        <span className="stat-number">100%</span>
                    </div>
                    <h4>Mobile Responsive</h4>
                </div>
            </div>
        </div>
    );
};

export default InnovationDemo; 