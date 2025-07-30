import React from 'react';


const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about technology and driven by curiosity
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Esakkiammal G, a dedicated 3rd-year Computer Science Engineering student 
              with a passion for creating innovative digital solutions. My journey in technology 
              has been driven by curiosity and a desire to solve real-world problems through code.
            </p>
            <p>
              With expertise in multiple programming languages and a strong foundation in 
              web development, I enjoy building applications that not only function well but 
              also provide exceptional user experiences. I'm constantly learning and adapting 
              to new technologies in this ever-evolving field.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new frameworks, contributing to 
              open-source projects, or working on innovative solutions that can make a 
              positive impact in the tech community.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years of Study</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Award Won</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
