import React from 'react';
import Headers from './Header';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Brands from './Brands';
import Footer from './Footer';
import Products from './Products';
import './App.css';

function Home() {
  return (
    <div>
      <Navbar/>
      
      {/* Hero Section */}
      <section id="home">
      <Headers/>
      </section>

      {/* About Section */}
      <section id="about">
      <About/>
      </section>

      {/* Brands Section */}
      <section id="brands">
      <Brands/>
      </section>

      {/* Products Section */}
      <section id="products">
      <Products/>
      </section>

      {/* Contact Section */}
      <section id="contact">
      <Contact/>
      </section>

      <Footer/>
    </div>
  );
}

export default Home;
