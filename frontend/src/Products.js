import React from 'react';
import './Products.css';

const Products = () => {
    const productCategories = [
        {
            id: 1,
            name: 'Tyres',
            image: require('./img/slides/pdt1.png'),
            link: '/products/tyres'
        },
        {
            id: 2,
            name: 'Batteries',
            image: require('./img/slides/pdt2.jpg'),
            link: '/products/batteries'
        },
        {
            id: 3,
            name: 'Lubricants',
            image: require('./img/slides/pdt3.jpg'),
            link: '/products/lubricants'
        },
        {
            id: 4,
            name: 'Tubes',
            image: require('./img/slides/tubes.jpg'),
            link: '/products/tubes'
        }
    ];

    return (
        <section className="products-section">
            <div className="container">
                <div className="section-header">
            <h2>Our Products</h2>
                    <p>Discover our comprehensive range of automotive products</p>
                </div>
                
                <div className="products-grid">
                    {productCategories.map((product, index) => (
                        <div 
                            key={product.id} 
                            className="product-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <a href={product.link} className="product-link-wrapper">
                                <div className="product-image-container">
                                    <img 
                                        src={product.image} 
                                        alt={`${product.name} products`}
                                        className="product-image"
                                    />
                                    <div className="product-overlay">
                                        <h3>{product.name}</h3>
                            </div>
                        </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;