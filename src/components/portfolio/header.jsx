import React from "react";
import "../portfolio/styles/header.css";
import image from "../../images/image.png";
import { useState, useEffect } from "react";

const Header = ({ projectsRef }) => {
  const professions = [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "Frontend Developer" },
    { id: 3, title: "Backend Developer" },
    { id: 4, title: "MERN Stack Developer" },
    { id: 5, title: "React Developer" },
    { id: 6, title: "Kony / Infinity Developer" },
    { id: 7, title: "React Native Developer" },
    { id: 8, title: "Full Stack Developer" },
  ];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfessionIndex(
        (prevIndex) => (prevIndex + 1) % professions.length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">Umer Naeem</h1>
        <nav className="header-nav">
          <div className="flex-container">
            <div className="image-container">
              <img
                src={image}
                alt="Yellow Splash"
                className="yellow-bg-image"
              />
            </div>
          </div>
          <ul>
            <li>
            <a onClick={scrollToProjects} href="#projects">Projects</a>
            </li>
            <li>
            <a href="#contact">Contact</a>
            </li>
            <li>
            <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profession-div">
          <p className="profession-text">{professions[currentProfessionIndex].title}</p>
          <h1 className="profession-h1">Hello, I am Syed Umer Naeem</h1>
          <p className="description">
            Results-driven React Developer with over 3 years of experience in designing and implementing user interfaces for web applications. Skilled in JavaScript, React.js, and modern web development practices. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.
          </p>
          <div className="button-flex-portfolio">
          <button onClick={scrollToProjects} className="project-button">Projects</button>
          <button   onClick={() => window.location.href = 'https://www.linkedin.com/in/umernaeem2451/'} className="project-linkedin">LinkedIn</button>
          </div>
        </div>
    </header>
  );
};

export default Header;
