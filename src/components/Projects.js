import React from "react";

const projects = [
  {
    title: "Pepper Spraying Alert Necklace",
    description: "An innovative women's safety device that received the Best Paper award at ICFTA'24. Features real-time alert system and GPS tracking for enhanced security.",
    imageUrl: "journal presentation.jpg",
    link: "https://fortune.com/2015/10/20/necklace-prevent-assault",
    showLink: "https://fortune.com/2015/10/20/necklace-prevent-assault"
  },
  {
    title: "Safest Wood Saw",
    description: "An intelligent safety system for wood cutting machines that automatically stops when detecting human proximity. Developed for MSME to enhance workplace safety.",
    imageUrl: "wood.png",
    link: "https://woodworkerlodge.com/whats-the-safest-type-of-power-saw/#:~:text=The%20safest%20type%20of%20power%20saw,#:~:text=The%20safest%20type%20of%20power%20saw,",
    showLink: "https://woodworkerlodge.com/whats-the-safest-type-of-power-saw/#:~:text=The%20safest%20type%20of%20power%20saw,#:~:text=The%20safest%20type%20of%20power%20saw,"
  },
  {
    title: "Warehouse Management System",
    description: "A comprehensive web-based system for managing warehouse operations including inventory tracking, order management, and reporting features.",
    imageUrl: "wms.jpg",
    link: "https://github.com/Esakkiammal-G/Warehouse-Management-System",
    showLink: "https://esakkiammal-g.github.io/Warehouse-Management-System/"
  },
  {
    title: "Apple Website Clone",
    description: "A pixel-perfect recreation of Apple's website showcasing advanced CSS techniques, responsive design, and smooth animations. Built during training at Infosmite.",
    imageUrl: "apple.jpeg",
    link: "https://github.com/Esakkiammal-G/apple-clone",
    showLink: "https://esakkiammal-g.github.io/apple-clone/"
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and achievements
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link primary">
                    View Code
                  </a>
                  <a href={project.showLink} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
