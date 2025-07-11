// src/components/WebinarHero.jsx
import React from 'react';
import '../styles/WebinarHero.css'

function WebinarHero() {
  return (
    <section className="webinar-hero">
      <div className="hero-content">
        <h1>Unlock Your Potential: A Guide to Sustainable Community Development</h1>
        <p>Join our expert panel to explore innovative strategies for impactful social change.</p>
        <div className="hero-details">
          <p><strong>Date:</strong> July 20, 2025</p>
          <p><strong>Time:</strong> 2:00 PM IST</p>
          <p><strong>Featuring:</strong> Expert Speaker Names</p>
        </div>
        <button className="register-button">Register Now to Secure Your Spot</button>
        <p className="small-text">Limited seats available. Registration closes July 18, 2025.</p>
      </div>
    </section>
  );
}

export default WebinarHero;