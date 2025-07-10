// src/components/WebinarDeliveryModes.jsx
import React from 'react';
import '../styles/WebinarDeliveryModes.css'

function WebinarDeliveryModes() {
  return (
    <section className="webinar-delivery-modes">
      <div className="container">
        <h2>📍 Modes of Delivery</h2>
        <p>
          Our webinars are delivered in two flexible formats, catering to the convenience and needs of different participants:
        </p>

        {/* Online Webinars */}
        <div className="delivery-mode online-webinars">
          <h3>💻 Online Webinars – By SWET Team and Expert Speakers</h3>
          <p>
            These sessions are conducted via digital platforms and are designed for quick access,
            wide participation, and strong engagement. They often include live polls,
            interactive chats, breakout activities, and digital handouts.
          </p>
          <h4>Online Webinar Features:</h4>
          <ul>
            <li>Join from anywhere using a smartphone or computer</li>
            <li>Real-time engagement with resource persons</li>
            <li>Downloadable materials and slides</li>
            <li>Digital certificate of participation</li>
            <li>Post-session quiz or feedback for active learners</li>
          </ul>
        </div>

        {/* Offline Webinars */}
        <div className="delivery-mode offline-webinars">
          <h3>🏢 Offline Webinars – On-Campus or at Public Venues</h3>
          <p>
            For institutions and communities that prefer a more personal touch, SWET conducts offline webinars
            where our team or invited industry experts visit and conduct the session face-to-face while using
            multimedia tools for live presentation and interaction.
          </p>
          <h4>Offline Webinar Highlights:</h4>
          <ul>
            <li>Live screening of presentations with interactive Q&A</li>
            <li>Panel discussions, demonstrations, and audience engagement</li>
            <li>Group participation for classroom learning</li>
            <li>Certificate distribution and on-the-spot feedback</li>
            <li>Opportunity to connect and collaborate in real time</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WebinarDeliveryModes;