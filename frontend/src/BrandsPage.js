import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './BrandsPage.css';

const BrandsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Brand data categorized by quality/prestige level (following original order)
  const brandsData = {
    premium: [
      { name: 'Bridgestone', logo: require('./img/brands/Bridgestone_logo.jpg'), description: 'Premium Japanese tyre manufacturer', country: 'Japan' },
      { name: 'Dunlop', logo: require('./img/brands/dunlop-logo.webp'), description: 'High-performance British tyre brand', country: 'UK' },
      { name: 'Yokohama', logo: require('./img/brands/Yokohama_Logo.jpg'), description: 'Advanced Japanese tyre technology', country: 'Japan' },
      { name: 'Hankook', logo: require('./img/brands/Hankook-Logo.png'), description: 'Korean premium tyre manufacturer', country: 'Korea' },
      { name: 'Kumho', logo: require('./img/brands/Kumho.jpg'), description: 'Quality Korean tyre brand', country: 'Korea' },
      { name: 'Triangle', logo: require('./img/brands/Triangle-Tire-Logo-Featured.jpg'), description: 'Chinese premium tyre manufacturer', country: 'China' }
    ],
    performance: [
      { name: 'Firestone', logo: require('./img/brands/firestone.png'), description: 'American performance tyre brand', country: 'USA' },
      { name: 'Falken', logo: require('./img/brands/falken-logo.jpg'), description: 'High-performance Japanese tyres', country: 'Japan' },
      { name: 'CEAT', logo: require('./img/brands/CEAT-logo.jpg'), description: 'Indian performance tyre manufacturer', country: 'India' },
      { name: 'Apollo', logo: require('./img/brands/Apollo.png'), description: 'Indian premium tyre brand', country: 'India' },
      { name: 'MRF', logo: require('./img/brands/mrf.jpg'), description: 'Indian performance tyre leader', country: 'India' }
    ],
    commercial: [
      { name: 'Incoe', logo: require('./img/brands/incoe.jpg'), description: 'Indonesian commercial vehicle batteries', country: 'Indonesia' },
      { name: 'Sumitomo', logo: require('./img/brands/Logo-Sumitomo.jpg'), description: 'Japanese commercial tyre specialist', country: 'Japan' },
      { name: 'Total', logo: require('./img/brands/total.jpg'), description: 'French energy and lubricants brand', country: 'France' },
      { name: 'Dongah', logo: require('./img/brands/dongah.jpg'), description: 'Korean tube manufacturer', country: 'Korea' },
      { name: 'JK', logo: require('./img/brands/jk.jpg'), description: 'Indian commercial tyre brand', country: 'India' },
      { name: 'Maxpart', logo: require('./img/brands/maxpart.jpg'), description: 'Indonesian battery manufacturer', country: 'Indonesia' },
      { name: 'Tolins', logo: require('./img/brands/tolins.jpg'), description: 'Indian specialty tyre manufacturer', country: 'India' },
      { name: 'Challenger', logo: require('./img/brands/challenger.jpg'), description: 'Indian specialty tyre brand', country: 'India' },
      { name: 'Nexen', logo: require('./img/brands/nexen.jpg'), description: 'Korean specialty tyres', country: 'Korea' },
      { name: 'Suzuki', logo: require('./img/brands/suzuki.png'), description: 'Japanese battery manufacturer', country: 'Japan' }
    ],
    budget: [
      { name: 'Accelera', logo: require('./img/brands/accelera.jpg'), description: 'Indonesian affordable quality batteries', country: 'Indonesia' },
      { name: 'Forceum', logo: require('./img/brands/forceum.jpg'), description: 'Indonesian budget-friendly battery option', country: 'Indonesia' },
      { name: 'GT', logo: require('./img/brands/gt.jpg'), description: 'Indonesian value for money batteries', country: 'Indonesia' },
      { name: 'Citrol', logo: require('./img/brands/citrol.png'), description: 'Indonesian economical battery choice', country: 'Indonesia' },
      { name: 'SBK', logo: require('./img/brands/sbk.jpg'), description: 'Indonesian budget battery manufacturer', country: 'Indonesia' },
      { name: 'Deestone', logo: require('./img/brands/deestone.jpg'), description: 'Indonesian affordable tyre brand', country: 'Indonesia' },
      { name: 'Nextera', logo: require('./img/brands/nextera.jpg'), description: 'Indonesian cost-effective battery solution', country: 'Indonesia' },
      { name: 'Thunderer', logo: require('./img/brands/thunderer.png'), description: 'Indonesian budget-friendly battery option', country: 'Indonesia' },
      { name: 'Xcruiser', logo: require('./img/brands/xcruiser.jpeg'), description: 'Indonesian economical battery brand', country: 'Indonesia' },
      { name: 'Platinum', logo: require('./img/brands/platinum.jpg'), description: 'Indonesian value battery manufacturer', country: 'Indonesia' },
      { name: 'LingLong', logo: require('./img/brands/LingLong.jpg'), description: 'Chinese budget tyre brand', country: 'China' },
      { name: 'Goodride', logo: require('./img/brands/goodride.jpg'), description: 'Chinese affordable tyres', country: 'China' },
      { name: 'Maxlife', logo: require('./img/brands/maxlife.png'), description: 'Indonesian budget battery option', country: 'Indonesia' },
      { name: 'Westlake', logo: require('./img/brands/westlake.jpg'), description: 'Chinese economical tyres', country: 'China' },
      { name: 'Infinity', logo: require('./img/brands/infinity.png'), description: 'Indonesian budget-friendly battery brand', country: 'Indonesia' },
      { name: 'Powertrack', logo: require('./img/brands/powertrack.jpeg'), description: 'Indonesian economical battery choice', country: 'Indonesia' },
      { name: 'Hilo', logo: require('./img/brands/hilo-tires.png'), description: 'Indonesian budget battery manufacturer', country: 'Indonesia' },
      { name: 'ARL', logo: require('./img/brands/arl.jpg'), description: 'Indonesian affordable battery brand', country: 'Indonesia' },
      { name: 'Petromax', logo: require('./img/brands/petromax.jpeg'), description: 'Indonesian budget battery option', country: 'Indonesia' },
      { name: 'Black Lion', logo: require('./img/brands/blacklion.jpg'), description: 'Indonesian economical battery brand', country: 'Indonesia' },
      { name: 'Stanley', logo: require('./img/brands/stanley.jpeg'), description: 'Indonesian budget-friendly batteries', country: 'Indonesia' },
      { name: 'Powerplus', logo: require('./img/brands/powerplus.jpeg'), description: 'Indonesian affordable battery manufacturer', country: 'Indonesia' },
      { name: 'Crystal', logo: require('./img/brands/crystal.jpg'), description: 'Indonesian budget battery brand', country: 'Indonesia' },
      { name: 'Mirage', logo: require('./img/brands/mirage.jpg'), description: 'Indonesian economical battery option', country: 'Indonesia' },
      { name: 'Aptany', logo: require('./img/brands/Aptany.jpg'), description: 'Indonesian budget battery manufacturer', country: 'Indonesia' },
      { name: 'Double King', logo: require('./img/brands/doubleKing.jpeg'), description: 'Indonesian affordable battery brand', country: 'Indonesia' },
      { name: 'Imax', logo: require('./img/brands/imax.jpg'), description: 'Indonesian budget battery option', country: 'Indonesia' },
      { name: 'Double Star', logo: require('./img/brands/doubleStar.jpg'), description: 'Indonesian economical battery brand', country: 'Indonesia' },
      { name: 'Honor', logo: require('./img/brands/honor.jpeg'), description: 'Indonesian budget-friendly batteries', country: 'Indonesia' },
      { name: 'Unicar', logo: require('./img/brands/unicar.jpg'), description: 'Indonesian affordable battery manufacturer', country: 'Indonesia' }
    ]
  };

  const getAllBrands = () => {
    return Object.values(brandsData).flat();
  };

  const getFilteredBrands = () => {
    if (activeCategory === 'all') {
      return getAllBrands();
    }
    return brandsData[activeCategory] || [];
  };

  return (
    <div className="brands-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="brands-hero">
        <div className="brands-hero-content">
          <h1>Our Premium Brands</h1>
          <p>Discover the world's leading tyre manufacturers trusted by Black Bull Tyres</p>
                    </div>
        <div className="brands-hero-overlay"></div>
      </div>

      {/* Main Brands Section */}
      <div className="brands-main">
        <div className="container">
          {/* Introduction */}
          <div className="brands-intro">
            <h2>Trusted by Leading Manufacturers</h2>
            <p>
              At Black Bull Tyres, we partner with the world's most reputable tyre manufacturers 
              to bring you the highest quality products. From premium performance tyres to 
              budget-friendly options, we have the perfect tyre for every vehicle and budget.
            </p>
                            </div>
         
          {/* Category Filter */}
          <div className="brands-filter">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Brands ({getAllBrands().length})
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'premium' ? 'active' : ''}`}
              onClick={() => setActiveCategory('premium')}
            >
              Premium ({brandsData.premium.length})
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveCategory('performance')}
            >
              Performance ({brandsData.performance.length})
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveCategory('commercial')}
            >
              Commercial ({brandsData.commercial.length})
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'budget' ? 'active' : ''}`}
              onClick={() => setActiveCategory('budget')}
            >
              Budget ({brandsData.budget.length})
            </button>
                            </div>
         
          {/* Brands Grid */}
          <div className={`brands-grid ${isVisible ? 'visible' : ''}`}>
            {getFilteredBrands().map((brand, index) => (
              <div key={brand.name} className="brand-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="brand-logo">
                  <img src={brand.logo} alt={`${brand.name} logo`} />
                </div>
                <div className="brand-info">
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>
                  <span className="brand-country">{brand.country}</span>
        </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="brands-stats">
            <div className="stat-item">
              <div className="stat-number">35+</div>
              <div className="stat-label">Global Brands</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10</div>
              <div className="stat-label">Countries</div>
        </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Tyre Models</div>
              </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="brands-cta">
            <h2>Ready to Find Your Perfect Tyre?</h2>
            <p>Contact us today to discuss your specific requirements and get expert advice on the best tyre for your vehicle.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">
                <i className="fas fa-phone"></i>
                Get Quote
              </a>
              <a href="/products" className="cta-btn secondary">
                <i className="fas fa-tire"></i>
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrandsPage;
