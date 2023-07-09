// components/Features.js

import React from 'react';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h1 className="section-title">Features</h1>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-gem feature-icon"></i>
            <h3 className="feature-title">Beautiful Design</h3>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, recusandae.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-cogs feature-icon"></i>
            <h3 className="feature-title">Flexible and Customizable</h3>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, dolorem!</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-mobile-alt feature-icon"></i>
            <h3 className="feature-title">Responsive Design</h3>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, nisi.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-cloud feature-icon"></i>
            <h3 className="feature-title">Web development</h3>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, atque.</p>
          </div>
          {/* Add more feature cards here */}
        </div>
      </div>
    </section>
  );
};

export default Features;
