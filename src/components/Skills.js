import React from 'react';


const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      icon: "🎨"
    },
    {
      title: "Programming Languages",
      description: "Proficient in C, Python, Java, and JavaScript for various development needs.",
      icon: "💻"
    },
    {
      title: "Web Technologies",
      description: "Expert in HTML, CSS, React.js, and modern web development practices.",
      icon: "🌐"
    },
    {
      title: "Problem Solving",
      description: "Strong analytical skills to tackle complex challenges and optimize solutions.",
      icon: "🧩"
    },
    {
      title: "Database Management",
      description: "Experience with database design, queries, and data management systems.",
      icon: "🗄️"
    }
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
