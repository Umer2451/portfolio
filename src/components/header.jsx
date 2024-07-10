import React from "react";
import "../styles/header.css";
import image from "../images/image.png";
import { useState, useEffect } from "react";
const Header = () => {
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
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profession-div">
          <p className="profession-text">{professions[currentProfessionIndex].title}</p>
          <h1 className="profession-h1">Hello, I am Syed Umer Naeem</h1>
          <p className="description">
            Results-driven React Developer with 2.5 years of experience in designing and implementing user interfaces for web applications. Skilled in JavaScript, React.js, and modern web development practices. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.
          </p>
          <div className="button-flex">
          <button className="project-button">Projects</button>
          <button className="project-linkedin">LinkedIn</button>
          </div>
        </div>
    </header>
  );
};

export default Header;
