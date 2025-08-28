import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Tyres.css';

const Tyres = () => {
  const [activeCategory, setActiveCategory] = useState('tyres');

  const productData = {
    tyres: [
      { id: 1, name: 'Tyre Model 1', image: require('./img/tyres/t1.jpeg'), alt: 'Premium tyre model 1' },
      { id: 2, name: 'Tyre Model 2', image: require('./img/tyres/t2.jpg'), alt: 'Premium tyre model 2' },
      { id: 3, name: 'Tyre Model 3', image: require('./img/tyres/t3.jpeg'), alt: 'Premium tyre model 3' },
      { id: 4, name: 'Tyre Model 4', image: require('./img/tyres/t4.jpeg'), alt: 'Premium tyre model 4' },
      { id: 5, name: 'Tyre Model 5', image: require('./img/tyres/t5.jpeg'), alt: 'Premium tyre model 5' },
      { id: 6, name: 'Tyre Model 6', image: require('./img/tyres/t6.jpeg'), alt: 'Premium tyre model 6' },
      { id: 7, name: 'Tyre Model 7', image: require('./img/tyres/t7.jpeg'), alt: 'Premium tyre model 7' },
      { id: 8, name: 'Tyre Model 8', image: require('./img/tyres/t8.jpg'), alt: 'Premium tyre model 8' },
      { id: 9, name: 'Tyre Model 9', image: require('./img/tyres/t9.jpeg'), alt: 'Premium tyre model 9' },
      { id: 10, name: 'Tyre Model 10', image: require('./img/tyres/t10.jpg'), alt: 'Premium tyre model 10' },
      { id: 11, name: 'Tyre Model 11', image: require('./img/tyres/t11.jpeg'), alt: 'Premium tyre model 11' },
      { id: 12, name: 'Tyre Model 12', image: require('./img/tyres/t12.jpg'), alt: 'Premium tyre model 12' },
      { id: 13, name: 'Tyre Model 13', image: require('./img/tyres/t13.jpeg'), alt: 'Premium tyre model 13' },
      { id: 14, name: 'Tyre Model 14', image: require('./img/tyres/t14.jpg'), alt: 'Premium tyre model 14' },
      { id: 15, name: 'Tyre Model 15', image: require('./img/tyres/t15.jpg'), alt: 'Premium tyre model 15' },
      { id: 16, name: 'Tyre Model 16', image: require('./img/tyres/t16.jpg'), alt: 'Premium tyre model 16' },
      { id: 17, name: 'Tyre Model 17', image: require('./img/tyres/t17.jpg'), alt: 'Premium tyre model 17' },
      { id: 18, name: 'Tyre Model 18', image: require('./img/tyres/t18.jpg'), alt: 'Premium tyre model 18' },
      { id: 19, name: 'Tyre Model 19', image: require('./img/tyres/t19.jpg'), alt: 'Premium tyre model 19' },
      { id: 20, name: 'Tyre Model 20', image: require('./img/tyres/t20.jpg'), alt: 'Premium tyre model 20' },
      { id: 21, name: 'Tyre Model 21', image: require('./img/tyres/t21.jpg'), alt: 'Premium tyre model 21' }
    ],
    batteries: [
      { id: 1, name: 'Battery Model 1', image: require('./img/batteries/bat1.jpeg'), alt: 'High-performance battery 1' },
      { id: 2, name: 'Battery Model 2', image: require('./img/batteries/bat2.jpeg'), alt: 'High-performance battery 2' },
      { id: 3, name: 'Battery Model 3', image: require('./img/batteries/bat3.jpeg'), alt: 'High-performance battery 3' },
      { id: 4, name: 'Battery Model 4', image: require('./img/batteries/bat4.jpeg'), alt: 'High-performance battery 4' },
      { id: 5, name: 'Battery Model 5', image: require('./img/batteries/bat5.jpeg'), alt: 'High-performance battery 5' },
      { id: 6, name: 'Battery Model 6', image: require('./img/batteries/bat6.jpeg'), alt: 'High-performance battery 6' },
      { id: 7, name: 'Battery Model 7', image: require('./img/batteries/bat7.jpeg'), alt: 'High-performance battery 7' },
      { id: 8, name: 'Battery Model 8', image: require('./img/batteries/bat8.jpeg'), alt: 'High-performance battery 8' },
      { id: 9, name: 'Battery Model 9', image: require('./img/batteries/bat9.jpeg'), alt: 'High-performance battery 9' },
      { id: 10, name: 'Battery Model 10', image: require('./img/batteries/bat10.jpeg'), alt: 'High-performance battery 10' },
      { id: 11, name: 'Battery Model 11', image: require('./img/batteries/bat11.jpeg'), alt: 'High-performance battery 11' },
      { id: 12, name: 'Battery Model 12', image: require('./img/batteries/bat12.jpeg'), alt: 'High-performance battery 12' },
      { id: 13, name: 'Battery Model 13', image: require('./img/batteries/bat13.jpeg'), alt: 'High-performance battery 13' },
      { id: 14, name: 'Battery Model 14', image: require('./img/batteries/bat14.jpeg'), alt: 'High-performance battery 14' },
      { id: 15, name: 'Battery Model 15', image: require('./img/batteries/bat15.jpeg'), alt: 'High-performance battery 15' }
    ],
    lubricants: [
      { id: 1, name: 'Lubricant Model 1', image: require('./img/lubricants/lub1.jpeg'), alt: 'Quality lubricant 1' },
      { id: 2, name: 'Lubricant Model 2', image: require('./img/lubricants/lub2.jpeg'), alt: 'Quality lubricant 2' },
      { id: 3, name: 'Lubricant Model 3', image: require('./img/lubricants/lub3.jpeg'), alt: 'Quality lubricant 3' },
      { id: 4, name: 'Lubricant Model 4', image: require('./img/lubricants/lub4.jpeg'), alt: 'Quality lubricant 4' },
      { id: 5, name: 'Lubricant Model 5', image: require('./img/lubricants/lub5.jpeg'), alt: 'Quality lubricant 5' },
      { id: 6, name: 'Lubricant Model 6', image: require('./img/lubricants/lub6.jpeg'), alt: 'Quality lubricant 6' },
      { id: 7, name: 'Lubricant Model 7', image: require('./img/lubricants/lub7.jpeg'), alt: 'Quality lubricant 7' },
      { id: 8, name: 'Lubricant Model 8', image: require('./img/lubricants/lub8.jpeg'), alt: 'Quality lubricant 8' },
      { id: 9, name: 'Lubricant Model 9', image: require('./img/lubricants/lub9.jpeg'), alt: 'Quality lubricant 9' },
      { id: 10, name: 'Lubricant Model 10', image: require('./img/lubricants/lub10.jpeg'), alt: 'Quality lubricant 10' },
      { id: 11, name: 'Lubricant Model 11', image: require('./img/lubricants/lub11.jpeg'), alt: 'Quality lubricant 11' },
      { id: 12, name: 'Vehicle Polish', image: require('./img/lubricants/vehicle-polish.jpg'), alt: 'Professional vehicle polish' }
    ],
    tubes: [
      { id: 1, name: 'Dongah Tube', image: require('./img/tubes/dongah.jpeg'), alt: 'Dongah inner tube' },
      { id: 2, name: 'Nexen Tube', image: require('./img/tubes/nexen.jpeg'), alt: 'Nexen inner tube' },
      { id: 3, name: 'ARL Tube', image: require('./img/tubes/arl.jpeg'), alt: 'ARL inner tube' }
    ]
  };

  const categories = [
    { id: 'tyres', name: 'Tyres', icon: '🛞', count: productData.tyres.length },
    { id: 'batteries', name: 'Batteries', icon: '🔋', count: productData.batteries.length },
    { id: 'lubricants', name: 'Lubricants', icon: '🛢️', count: productData.lubricants.length },
    { id: 'tubes', name: 'Tubes', icon: '⚫', count: productData.tubes.length }
  ];

  return (
    <div className="tyres-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="tyres-hero">
        <div className="tyres-hero-content">
          <div className="hero-badge">
            <span>🏆 Premium Quality</span>
          </div>
          <h1>Our Products</h1>
          <p>Comprehensive range of automotive products from Black Bull Tyres</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Varieties</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">35+</span>
              <span className="stat-label">Brands</span>
                    </div>
                </div>
                </div>
            </div>
            
      {/* Category Filter */}
      <div className="category-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">({category.count})</span>
              </button>
            ))}
                        </div>
                    </div> 
                </div>

      {/* Products Grid */}
      <div className="products-section">
        <div className="container">
          <div className={`products-grid ${activeCategory === 'tyres' ? 'tyres-layout' : ''} ${activeCategory === 'lubricants' ? 'lubricants-layout' : ''} ${activeCategory === 'tubes' ? 'tubes-layout' : ''}`}>
            {productData[activeCategory].map((product, index) => (
              <div 
                key={product.id} 
                className="product-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`product-image-container ${activeCategory === 'tyres' ? 'tyres-image' : ''} ${activeCategory === 'lubricants' ? 'lubricants-image' : ''} ${activeCategory === 'tubes' ? 'tubes-image' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="product-image"
                  />
                  <div className="product-overlay">
                    <div className="product-details">
                      <h3>{product.name}</h3>
                      <a href="/contact" className="enquire-btn">
                        <span>Enquire Now</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                        </div>
                    </div>
                </div>
                        </div>
            ))}
                        </div>
                    </div>
                </div>

      {/* CTA Section */}
      <div className="tyres-cta">
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

      <Footer />
    </div>
  );
};

export default Tyres;
