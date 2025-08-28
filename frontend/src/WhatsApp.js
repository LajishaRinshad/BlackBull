import React from 'react';
import './WhatsApp.css';

const WhatsApp = () => {
    return (

      <div>
        <div className="whatsapp">
          <a href="https://api.whatsapp.com/send?phone=+971523635864" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp-square fa-3x w-app"></i>
          </a> 
        </div>        
      </div>
        
    )
}

export default WhatsApp;