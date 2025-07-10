// src/components/WebinarTopics.jsx
import React from 'react';
import '../styles/WebinarTopics.css'

function WebinarTopics() {
  const topics = [
    "Innovation in Technology and Startups",
    "AI & Machine Learning Simplified",
    "Sustainability & Smart Living",
    "Digital Careers: Freelancing, Tech Jobs, and Remote Work",
    "Mental Wellness and Motivation for Youth",
    "Women in Tech and Inclusion in STEM",
    "Resume, Interview & Career Readiness Sessions"
  ];

  return (
    <section className="webinar-topics">
      <div className="container">
        <h2>📚 Topics Covered in SWET Webinars</h2>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <p>
          Each webinar is aligned with SWET’s core mission of empowerment through education — bringing awareness,
          direction, and practical tools for self-growth.
        </p>
      </div>
    </section>
  );
}

export default WebinarTopics;