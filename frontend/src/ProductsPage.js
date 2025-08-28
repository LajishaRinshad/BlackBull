import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="products-page">
        <Navbar/>
      
      {/* Hero Section */}
      <div className="products-hero">
        <div className="products-hero-content">
          <div className="hero-badge">
            <span>🏆 Premium Quality</span>
          </div>
          <h1>Our Products</h1>
          <p>Comprehensive range of automotive products from Black Bull Tyres</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Product Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Product Varieties</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">35+</span>
              <span className="stat-label">Premium Brands</span>
                    </div>
                </div>
                </div>
            </div>
            
      {/* Products Section */}
      <div className="products-main">
        <Products/>
        </div>

      {/* CTA Section */}
      <div className="products-cta">
        <div className="container">
          <h2>Ready to Find Your Perfect Match?</h2>
          <p>Explore our comprehensive range of automotive products and find the perfect solution for your vehicle</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-btn primary">
              <span>Get Quote</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="/brands" className="cta-btn secondary">
              <span>View Brands</span>
              <i className="fas fa-star"></i>
            </a>
                        </div>
                    </div>
                </div>

        <Footer/>
    </div>
  );
};

export default ProductsPage;
