import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      name: "Ministre Watches",
      url: "https://ministre-watches.vercel.app",
      description: "Plateforme e-commerce de montres de luxe avec interface moderne",
      tech: ["React", "Vite", "CSS3"]
    },
    {
      name: "OFPPT Click",
      url: "https://ofppt.click",
      description: "Application web pour la gestion des formations OFPPT",
      tech: ["React", "HTML5", "CSS3"]
    }
  ];

  const skills = [
    "React.js", "JavaScript", "HTML5", "CSS3", 
    "Vite", "Node.js", "Git", "Responsive Design",
    "UI/UX", "API Integration"
  ];

  return (
    <div className={`portfolio ${darkMode ? 'dark' : 'light'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          min-height: 100vh;
          font-family: 'Space Mono', monospace;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow-x: hidden;
        }

        .portfolio.light {
          background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
          color: #1a1a2e;
        }

        .portfolio.dark {
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          color: #e0e0e0;
        }

        /* Animated background particles */
        .portfolio::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 195, 113, 0.1) 0%, transparent 50%);
          animation: float 20s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        /* Dark Mode Toggle */
        .theme-toggle {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
          background: ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
          backdrop-filter: blur(10px);
          border: 2px solid ${darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: ${darkMode 
            ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
            : '0 8px 32px rgba(0, 0, 0, 0.1)'};
        }

        .theme-toggle:hover {
          transform: translateY(-2px);
          box-shadow: ${darkMode 
            ? '0 12px 40px rgba(0, 0, 0, 0.4)' 
            : '0 12px 40px rgba(0, 0, 0, 0.15)'};
        }

        .theme-toggle-icon {
          animation: rotate 0.5s ease;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .theme-text {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Header Section */
        .header {
          text-align: center;
          padding: 6rem 2rem 4rem;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : '30px'});
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sparkle-icon {
          display: inline-block;
          animation: sparkle 2s ease-in-out infinite;
          color: #ffc107;
          margin-bottom: 1rem;
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
        }

        .name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 900;
          margin-bottom: 1rem;
          background: ${darkMode 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
          letter-spacing: -2px;
        }

        .title {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 400;
          margin-bottom: 1rem;
          opacity: 0.9;
          letter-spacing: 2px;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1rem;
          opacity: 0.7;
          margin-top: 1rem;
        }

        .location::before {
          content: '📍';
        }

        /* Projects Section */
        .section {
          margin: 4rem 0;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : '30px'});
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-title::after {
          content: '';
          flex: 1;
          height: 2px;
          background: ${darkMode 
            ? 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 100%)' 
            : 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, transparent 100%)'};
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.9)'};
          backdrop-filter: blur(10px);
          border: 2px solid ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: ${darkMode 
            ? '0 20px 60px rgba(0, 0, 0, 0.5)' 
            : '0 20px 60px rgba(0, 0, 0, 0.15)'};
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-description {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'};
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: ${darkMode ? '#a78bfa' : '#f5576c'};
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          gap: 0.75rem;
        }

        /* Skills Section */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .skill-badge {
          background: ${darkMode 
            ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))' 
            : 'linear-gradient(135deg, rgba(240, 147, 251, 0.2), rgba(245, 87, 108, 0.2))'};
          backdrop-filter: blur(10px);
          border: 2px solid ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'};
          padding: 1rem 1.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-badge:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: ${darkMode 
            ? '0 10px 30px rgba(102, 126, 234, 0.3)' 
            : '0 10px 30px rgba(245, 87, 108, 0.2)'};
        }

        /* Contact Section */
        .contact-section {
          margin: 4rem 0;
          text-align: center;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : '30px'});
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
        }

        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: ${darkMode 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: ${darkMode 
            ? '0 10px 30px rgba(102, 126, 234, 0.3)' 
            : '0 10px 30px rgba(245, 87, 108, 0.3)'};
        }

        .contact-btn:hover {
          transform: translateY(-4px);
          box-shadow: ${darkMode 
            ? '0 15px 40px rgba(102, 126, 234, 0.4)' 
            : '0 15px 40px rgba(245, 87, 108, 0.4)'};
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 3rem 2rem;
          opacity: 0.7;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .theme-toggle {
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
          }

          .header {
            padding: 4rem 1rem 3rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-buttons {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
        <span className="theme-toggle-icon">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </span>
        <span className="theme-text">
          {darkMode ? 'Light' : 'Dark'}
        </span>
      </button>

      <div className="container">
        {/* Header */}
        <header className="header">
          <Sparkles size={40} className="sparkle-icon" />
          <h1 className="name">Khadija El Moussaoui</h1>
          <p className="title">Développeuse Web Full Stack</p>
          <div className="location">
            <span>Benguerir, Maroc</span>
          </div>
        </header>

        {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">
            <Code2 size={36} />
            Projets
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-name">
                  {project.name}
                  <ExternalLink size={20} />
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Voir le projet
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Compétences</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2 className="section-title">Contact</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.8 }}>
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
          <div className="contact-buttons">
            <a 
              href="mailto:khadijaelmoussaoui804@gmail.com" 
              className="contact-btn"
            >
              <Mail size={20} />
              Email
            </a>
            <a 
              href="https://github.com/khadijaelmoussaoui804-glitch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 Khadija El Moussaoui • Développé avec React & Vite</p>
        </footer>
      </div>
    </div>
  );
}