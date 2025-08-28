import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            {/* Hero Banner */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1>About Black Bull Tyres</h1>
                    <p>Leading Dubai's Tyre Industry Since 2015</p>
                </div>
                <div className="about-hero-overlay"></div>
            </div>

            {/* Main Content */}
            <div className="about-content">
                <div className="container">
                    {/* Company Story */}
                    <div className="about-story">
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p>
                                Being an independent business that commenced its operation in Dubai in 2015, 
                                <strong> Black Bull Tyres & Rims Trading LLC</strong> is proud to operate as one among 
                                the leading tyre wholesalers in the region. We are honoured to stand as a company 
                                guaranteeing value for money and ensuring customer satisfaction with its great service 
                                as well as its extensive stock of quality products including tyres, batteries, 
                                lubricants and tubes from top brands around the world.
                            </p>
                            <p>
                                With over 8 years of experience in the UAE market, we have built a reputation 
                                for reliability, quality, and exceptional customer service. Our commitment to 
                                excellence has made us a trusted partner for businesses and individuals across Dubai.
                            </p>
                        </div>
                        <div className="story-image">
                            <img src={require('./img/slides/tyre1.jpeg')} alt="Black Bull Tyres Warehouse" />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="mission-vision">
                        <div className="mission">
                            <div className="icon">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide the highest quality tyre products and exceptional service to our customers, 
                                ensuring safety and performance on every journey while maintaining competitive prices 
                                and building lasting relationships.
                            </p>
                        </div>
                        <div className="vision">
                            <div className="icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To become the most trusted and preferred tyre supplier in Dubai, known for our 
                                comprehensive product range, expert knowledge, and unwavering commitment to 
                                customer satisfaction.
                            </p>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="why-choose-us">
                        <h2>Why Choose Black Bull Tyres?</h2>
                        <div className="features-grid">
                            <div className="feature">
                                <div className="feature-icon">
                                    <i className="fas fa-medal"></i>
                                </div>
                                <h4>Premium Quality</h4>
                                <p>We stock only the finest brands and ensure every product meets the highest quality standards.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <h4>Fast Delivery</h4>
                                <p>Quick and reliable delivery across Dubai with our efficient logistics network.</p>
                            </div>
                            
                            <div className="feature">
                                <div className="feature-icon">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <h4>Best Prices</h4>
                                <p>Competitive pricing without compromising on quality or service standards.</p>
                            </div>
                            
                            <div className="feature">
                                <div className="feature-icon">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <h4>Trusted Partner</h4>
                                <p>Building long-term relationships with customers through reliability and integrity.</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="about-gallery">
                        <h2>Our Facilities</h2>
                        <div className="gallery-grid">
                            <div className="gallery-item">
                                <img src={require('./img/slides/tyre2.jpeg')} alt="Tyre Warehouse" />
                            </div>
                            <div className="gallery-item">
                                <img src={require('./img/slides/tyre3.jpeg')} alt="Quality Tyres" />
                            </div>
                            <div className="gallery-item">
                                <img src={require('./img/slides/tyre4.jpeg')} alt="Premium Brands" />
                            </div>
                            <div className="gallery-item">
                                <img src={require('./img/slides/tyre5.jpeg')} alt="Customer Service" />
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Happy Customers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">35+</div>
                            <div className="stat-label">Global Brands</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support Available</div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default About;