import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: 'Home', path: '/', icon: 'fas fa-home' },
        { name: 'Brands', path: '/brands', icon: 'fas fa-tags' },
        { name: 'Products', path: '/tyres', icon: 'fas fa-box' },
        { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo">
                    <Link to="/" onClick={closeMenu}>
                        <div className="logo-container">
                            <img src={require('./img/logo.png')} alt="Black Bull Tyres Logo" className="logo-image" />
                            <div className="logo-text">
                                <span className="logo-brand">BLACK BULL</span>
                                <span className="logo-tagline">TYRES</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-menu">
                    {navItems.map((item) => (
                        <li key={item.name} className="nav-item">
                            <Link 
                                to={item.path} 
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                <i className={item.icon}></i>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* WhatsApp Icon */}
                <div className="nav-whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=+971523635864" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <Link to="/" className="mobile-logo" onClick={closeMenu}>
                        <div className="mobile-logo-container">
                            <img src={require('./img/logo.png')} alt="Black Bull Tyres Logo" className="mobile-logo-image" />
                            <span>BLACK BULL TYRES</span>
                        </div>
                    </Link>
                    <button className="close-menu" onClick={closeMenu}>
                        ×
                    </button>
                </div>
                
                <ul className="mobile-nav-items">
                    {navItems.map((item) => (
                        <li key={item.name} className="mobile-nav-item">
                            <Link 
                                to={item.path} 
                                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                <i className={item.icon}></i>
                                {item.name}
                            </Link>
                </li>
                    ))}
            </ul>

                <div className="mobile-contact">
                    <h3>Contact Info</h3>
                    <div className="mobile-contact-item">
                        <i className="fas fa-envelope"></i>
                        <span>contact@blackbulltyres.com</span>
                    </div>
                    <div className="mobile-contact-item">
                        <i className="fab fa-whatsapp"></i>
                        <span>+971 52 363 5864</span>
                    </div>
                </div>
        </div>
        </nav>
    );
};

export default Navbar;