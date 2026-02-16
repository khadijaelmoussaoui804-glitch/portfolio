import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, ExternalLink, Code2, Sparkles, Send, User, MessageSquare, AtSign, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Créer le contenu de l'email
    const subject = `Nouveau message de ${formData.name}`;
    const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Ouvrir le client email
    window.location.href = `mailto:khadijaelmoussaoui804@gmail.com?subject=${subject}&body=${body}`;
    
    setFormStatus('Message envoyé ! Votre client email va s\'ouvrir.');
    
    // Réinitialiser le formulaire
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('');
    }, 3000);
  };

  const projects = [
    {
      name: "Ministre Watches",
      url: "https://ministre-watches.vercel.app",
      description: "Plateforme e-commerce de montres de luxe avec interface moderne et intuitive. Système de panier, filtrage avancé et galerie responsive.",
      tech: ["React", "Vite", "CSS3"],
      features: ["E-commerce", "Responsive Design", "UI/UX moderne"]
    },
    {
      name: "OFPPT Click",
      url: "https://ofppt.click",
      description: "Application web complète pour la gestion et consultation des formations OFPPT. Interface utilisateur optimisée pour les étudiants et formateurs.",
      tech: ["React", "HTML5", "CSS3"],
      features: ["Gestion des formations", "Interface intuitive", "Multi-utilisateurs"]
    }
  ];

  const technicalSkills = [
    {
      name: "React.js",
      description: "Bibliothèque JavaScript pour créer des interfaces utilisateur interactives et réutilisables",
      level: 90
    },
    {
      name: "JavaScript",
      description: "Langage de programmation pour créer des applications web dynamiques",
      level: 85
    },
    {
      name: "HTML5",
      description: "Langage de balisage pour structurer le contenu web",
      level: 95
    },
    {
      name: "CSS3",
      description: "Langage de style pour concevoir des interfaces élégantes et responsives",
      level: 90
    },
    {
      name: "Vite",
      description: "Outil de build ultra-rapide pour le développement frontend moderne",
      level: 85
    },
    {
      name: "Node.js",
      description: "Environnement d'exécution JavaScript côté serveur",
      level: 75
    },
    {
      name: "Git",
      description: "Système de contrôle de version pour gérer le code source",
      level: 80
    },
    {
      name: "Responsive Design",
      description: "Création d'interfaces adaptatives pour tous les appareils",
      level: 90
    },
    {
      name: "UI/UX",
      description: "Design d'expérience utilisateur intuitive et attrayante",
      level: 85
    },
    {
      name: "API Integration",
      description: "Intégration et utilisation d'APIs REST pour connecter applications et bases de données",
      level: 80
    }
  ];

  const behavioralSkills = [
    "Capacité d'apprentissage rapide",
    "Sens de responsabilité",
    "Travail en équipe",
    "Organisation",
    "Adaptabilité",
    "Réactivité"
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
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

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

        .section {
          margin: 5rem 0;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : '30px'});
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          margin-bottom: 3rem;
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

        /* Projects Section - Full Width Cards */
        .project-card {
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.9)'};
          backdrop-filter: blur(10px);
          border: 2px solid ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 20px;
          padding: 3rem;
          margin-bottom: 2rem;
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

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .project-name {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: ${darkMode ? '#a78bfa' : '#f5576c'};
          text-decoration: none;
          font-weight: 700;
          padding: 0.75rem 1.5rem;
          border: 2px solid ${darkMode ? '#a78bfa' : '#f5576c'};
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: ${darkMode ? '#a78bfa' : '#f5576c'};
          color: white;
          transform: translateX(5px);
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .project-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .detail-group {
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.03)' 
            : 'rgba(0, 0, 0, 0.02)'};
          padding: 1.5rem;
          border-radius: 15px;
        }

        .detail-title {
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          opacity: 0.7;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'};
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .feature-list {
          list-style: none;
        }

        .feature-list li {
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feature-list li::before {
          content: '✓';
          color: ${darkMode ? '#a78bfa' : '#f5576c'};
          font-weight: bold;
          font-size: 1.2rem;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .skill-category {
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.9)'};
          backdrop-filter: blur(10px);
          border: 2px solid ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 20px;
          padding: 2rem;
        }

        .skill-category-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: ${darkMode 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skill-item {
          margin-bottom: 2rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 700;
          font-size: 1rem;
        }

        .skill-percentage {
          font-size: 0.875rem;
          opacity: 0.7;
        }

        .skill-description {
          font-size: 0.85rem;
          opacity: 0.7;
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .skill-bar {
          width: 100%;
          height: 8px;
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)'};
          border-radius: 10px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: ${darkMode 
            ? 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' 
            : 'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)'};
          border-radius: 10px;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideIn 1.5s ease-out;
        }

        @keyframes slideIn {
          from { width: 0; }
        }

        .behavioral-skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .behavioral-skill {
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.9)'};
          backdrop-filter: blur(10px);
          border: 2px solid ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'};
          padding: 1.25rem;
          border-radius: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .behavioral-skill::before {
          content: '✓';
          color: ${darkMode ? '#a78bfa' : '#f5576c'};
          font-weight: bold;
          font-size: 1.5rem;
        }

        .behavioral-skill:hover {
          transform: translateY(-4px);
          box-shadow: ${darkMode 
            ? '0 10px 30px rgba(102, 126, 234, 0.3)' 
            : '0 10px 30px rgba(245, 87, 108, 0.2)'};
        }

        /* Contact Form */
        .contact-form {
          max-width: 800px;
          margin: 2rem auto;
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.9)'};
          backdrop-filter: blur(10px);
          border: 2px solid ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 20px;
          padding: 3rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          background: ${darkMode 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(0, 0, 0, 0.02)'};
          border: 2px solid ${darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)'};
          border-radius: 15px;
          font-family: 'Space Mono', monospace;
          font-size: 1rem;
          color: ${darkMode ? '#e0e0e0' : '#1a1a2e'};
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: ${darkMode ? '#a78bfa' : '#f5576c'};
          box-shadow: 0 0 0 3px ${darkMode 
            ? 'rgba(167, 139, 250, 0.1)' 
            : 'rgba(245, 87, 108, 0.1)'};
        }

        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          padding: 1.25rem 2rem;
          background: ${darkMode 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
          color: white;
          border: none;
          border-radius: 50px;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: ${darkMode 
            ? '0 10px 30px rgba(102, 126, 234, 0.3)' 
            : '0 10px 30px rgba(245, 87, 108, 0.3)'};
        }

        .submit-btn:hover {
          transform: translateY(-4px);
          box-shadow: ${darkMode 
            ? '0 15px 40px rgba(102, 126, 234, 0.4)' 
            : '0 15px 40px rgba(245, 87, 108, 0.4)'};
        }

        .form-status {
          margin-top: 1rem;
          padding: 1rem;
          background: ${darkMode 
            ? 'rgba(167, 139, 250, 0.2)' 
            : 'rgba(76, 175, 80, 0.2)'};
          border-radius: 10px;
          text-align: center;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 3rem;
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

          .project-card {
            padding: 2rem;
          }

          .project-details {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .behavioral-skills {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <button className="theme-toggle" onClick={toggleDarkMode}>
        <span className="theme-toggle-icon">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </span>
        <span className="theme-text">
          {darkMode ? 'Light' : 'Dark'}
        </span>
      </button>

      <div className="container">
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
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-name">
                  {project.name}
                  <ExternalLink size={24} />
                </h3>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Voir le projet
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <div className="detail-group">
                  <div className="detail-title">Technologies</div>
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="detail-group">
                  <div className="detail-title">Fonctionnalités</div>
                  <ul className="feature-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Compétences</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Compétences Techniques</h3>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Compétences Comportementales</h3>
              <div className="behavioral-skills">
                {behavioralSkills.map((skill, index) => (
                  <div key={index} className="behavioral-skill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <h2 className="section-title">
            <MessageSquare size={36} />
            Contact
          </h2>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.8 }}>
            Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter !
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                <User size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Votre Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Ex: Ahmed Benali"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                <AtSign size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Votre Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="exemple@email.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                <MessageSquare size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Votre Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Décrivez votre projet ou votre demande..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={20} />
              Envoyer le message
            </button>

            {formStatus && (
              <div className="form-status">
                <CheckCircle size={20} />
                {formStatus}
              </div>
            )}
          </form>

          <div className="contact-buttons">
            <a 
              href="mailto:khadijaelmoussaoui804@gmail.com" 
              className="contact-btn"
            >
              <Mail size={20} />
              Email Direct
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

        <footer className="footer">
          <p>© 2024 Khadija El Moussaoui • Développé avec React & Vite</p>
        </footer>
      </div>
    </div>
  );
}