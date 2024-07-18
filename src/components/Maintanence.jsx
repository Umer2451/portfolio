import React from 'react';
import "../UnderMaintanence.css";
import Projects from './portfolio/projects';
import finanApp from "../images/MoneyMaps.png"

const UnderMaintenance = () => {
    const projectData = [
        {
            "id": 2,
            "image": finanApp,
            "title": "Map Money (Made with Redux, React and Firestore)",
            "p": "https://umer2451.github.io/moneyapp/",
        }]
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <h1 className="maintenance-heading">🚧 Under Maintenance 🚧</h1>
        <p className="maintenance-message">
          Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience!
          You can check one of my other projects below while this link is maintaining.:
        </p>
        {projectData.map((data) => (
        <Projects key={data.id} image={data.image} title={data.title} function={data.p}></Projects>
      ))}
      </div>
    </div>
  );
};

export default UnderMaintenance;
