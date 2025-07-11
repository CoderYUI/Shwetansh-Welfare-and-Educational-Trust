// src/components/WebinarWhyChoose.jsx
import React from 'react';
import '../styles/WebinarWhyChoose.css'

function WebinarWhyChoose() {
  const benefits = [
    "Learn from Anywhere – All you need is an internet connection",
    "Engage with Experts – Talk, ask, learn directly from professionals",
    "Get Certified – Every session adds value to your resume",
    "Affordable and Accessible – Free or low-cost learning for all",
    "Updated Topics – We focus on what's new, next, and needed"
  ];

  return (
    <section className="webinar-why-choose">
      <div className="container">
        <h2>🌍 Why Choose SWET Webinars?</h2>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WebinarWhyChoose;