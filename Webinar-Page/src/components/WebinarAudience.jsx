// src/components/WebinarAudience.jsx
import React from 'react';
import '../styles/WebinarAudience.css'

function WebinarAudience() {
  const audienceList = [
    "High school and college students",
    "Tech aspirants and career explorers",
    "Faculty and school staff",
    "Socially active learners and volunteers",
    "Anyone curious to learn beyond the classroom"
  ];

  return (
    <section className="webinar-audience">
      <div className="container">
        <h2>👨‍🎓 Who Should Join?</h2>
        <ul>
          {audienceList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WebinarAudience;