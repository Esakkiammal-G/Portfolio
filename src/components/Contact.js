import React from 'react';

const Contact = () => {
  return (
    <div className="contact-info">
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Get In Touch</h3>
      
      <div className="contact-item">
        <div className="contact-icon">📧</div>
        <div className="contact-details">
          <h4>Email</h4>
          <p>
            <a href="mailto:esakkiammalg.ug22.cs@francisxavier.ac.in">
              esakkiammalg.ug22.cs@francisxavier.ac.in
            </a>
          </p>
        </div>
      </div>
      
      <div className="contact-item">
        <div className="contact-icon">💼</div>
        <div className="contact-details">
          <h4>LinkedIn</h4>
          <p>
            <a href="https://www.linkedin.com/in/esakkiammal-g" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/esakkiammal-g
            </a>
          </p>
        </div>
      </div>
      
      <div className="contact-item">
        <div className="contact-icon">🐙</div>
        <div className="contact-details">
          <h4>GitHub</h4>
          <p>
            <a href="https://github.com/esakkiammal-g" target="_blank" rel="noopener noreferrer">
              github.com/esakkiammal-g
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
