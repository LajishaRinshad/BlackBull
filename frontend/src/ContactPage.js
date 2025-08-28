import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}api/forma`, formData);
      setSent(true);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.log('Message not sent');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>Ready to experience quality? Contact us today for the best tyres, batteries, and automotive products in Dubai.</p>
        </div>
        <div className="contact-hero-overlay"></div>
      </div>

      {/* Main Contact Section */}
      <div className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>We're here to help with all your automotive needs. Reach out to us through any of these channels.</p>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-icon">
                    <a href="https://goo.gl/maps/FGb8HnYLp2d9U8aa7" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                  </div>
                  <div className="contact-details">
                    <h3>Address</h3>
                    <p>
                      Shop No. 32,<br />
                      Chinese Dragon Bldg.,<br />
                      Deira, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <a href="tel:00971523635864">
                      <i className="fas fa-phone-alt"></i>
                    </a>
                  </div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>
                      +971 4 224 5756<br />
                      +971 52 363 5864
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <a href="mailto:contact@blackbulltyres.com">
                      <i className="fas fa-envelope-open-text"></i>
                    </a>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>
                      contact@blackbulltyres.com<br />
                      varasheed783@gmail.com
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-fax"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Fax</h3>
                    <p>+971 4 224 2269</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span className="day">Monday - Saturday</span>
                    <span className="time">8:30 AM - 8:30 PM</span>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <label>Full Name</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label>Email Address</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <label>Phone Number</label>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                    <label>Message</label>
                  </div>

                  {sent && (
                    <div className="success-message">
                      <i className="fas fa-check-circle"></i>
                      Message sent successfully!
                    </div>
                  )}

                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? (
                      <div className="loading-spinner">
                        <div className="spinner"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2>Find Us</h2>
            <p>Visit our location in Deira, Dubai</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0029357247463!2d55.309182815010985!3d25.27048668386216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a57107a63%3A0x92c5d35bab6c2e96!2sChinese%20Dragon%20Building%20-%2029%20D%20St%20-%20Naif%20-%20Dubai!5e0!3m2!1sen!2sae!4v1598363528083!5m2!1sen!2sae"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Black Bull Tyres Location - Deira, Dubai"
              ></iframe>
            </div>
          </div>

          {/* Additional Info */}
          <div className="contact-cta">
            <div className="cta-content">
              <h2>Need Immediate Assistance?</h2>
              <p>For urgent inquiries or immediate support, call us directly or reach out via WhatsApp.</p>
              <div className="cta-buttons">
                <a href="tel:00971523635864" className="cta-btn primary">
                  <i className="fas fa-phone"></i>
                  Call Now
                </a>
                <a href="https://api.whatsapp.com/send?phone=+971523635864" target="_blank" rel="noopener noreferrer" className="cta-btn secondary">
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage; 