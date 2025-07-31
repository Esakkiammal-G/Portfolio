import React, { useEffect, useState } from 'react';


const Profile = () => {
  return (
    <section id="profile">
      <div className="profile-section">
        <div className="profile-container">
          <div className="profile-text">
            <div className="subtitle">Computer Science Student</div>
            <h2>Hello, I'm <span className="text-gradient">Esakkiammal</span></h2>
            <p>
              A passionate Computer Science Engineering student with expertise in web development, 
              programming, and innovative problem-solving. I create efficient, user-friendly solutions 
              and continuously explore new technologies to make a positive impact in the tech world.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="profile-image-container">
            <img
              src="/images/profile.jpg"
              alt="Esakkiammal G"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
