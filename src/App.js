import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css'; // Make sure to create this file for styling
import backgroundImage from "../src/images/firesky.png";

export default function App() {
  const [interacted, setInteracted] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleUserInteraction = () => {
    setInteracted(true);
    setShowCard(true); // Show the card after interaction
  };

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('mousedown', handleUserInteraction);
      canvas.addEventListener('touchstart', handleUserInteraction);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousedown', handleUserInteraction);
        canvas.removeEventListener('touchstart', handleUserInteraction);
      }
    };
  }, []);

  return (
    <main className="app-container">
      <img className="background-image" src={backgroundImage} alt="Background" />
      <div className="content">
        {!interacted && <h1 className="overlay-text">Welcome to Umer's Journey</h1>}
        <Spline scene="https://prod.spline.design/idr5dfTdKVlkRr1X/scene.splinecode" />
        {showCard && (
          <div className={`card-overlay ${showCard ? 'card-show' : ''}`}>
            <div className={`card ${showCard ? 'card-show' : ''}`}>
              <h2>About Me</h2>
              <p>This is where you can write about yourself.</p>
            </div>
          </div>
        )}
        {!interacted && <div className="swipe-text">Swipe to interact</div>}
      </div>
    </main>
  );
}