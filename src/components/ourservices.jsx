import React from 'react';

const OurServices = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-intro">
          At Shwetansh Welfare and Educational Trust, we offer a variety of programs to empower students and communities.
        </p>
        <div className="services-list">
          <div className="service-card">
            <h3>Olympiads</h3>
            <p>
              We conduct national-level Olympiads to test and enhance students' academic abilities in various subjects.
            </p>
          </div>
          <div className="service-card">
            <h3>Webinars</h3>
            <p>
              Our webinars feature industry experts, educators, and professionals who share insights on trending topics and career guidance.
            </p>
          </div>
          <div className="service-card">
            <h3>Seminars</h3>
            <p>
              We organize in-person and online seminars to foster learning, collaboration, and personal development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
