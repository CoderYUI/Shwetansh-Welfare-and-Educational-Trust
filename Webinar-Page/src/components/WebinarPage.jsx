// src/components/WebinarPage.jsx
import React from 'react';
import WebinarHero from './WebinarHero';
import WebinarUniqueFeatures from './WebinarUniqueFeatures';
import WebinarDeliveryModes from './WebinarDeliveryModes';
import WebinarTopics from './WebinarTopics';
import WebinarAudience from './WebinarAudience';
import WebinarWhyChoose from './WebinarWhyChoose';
import WebinarContact from './WebinarContact'; 
import '../styles/WebinarPage.css';

function WebinarPage() {
  return (
    <div className="webinar-page">
      <WebinarHero />
      <WebinarUniqueFeatures />
      <WebinarDeliveryModes />
      <WebinarTopics />
      <WebinarAudience />
      <WebinarWhyChoose />
      <WebinarContact />

      {/* We can add a simple Footer here later, or create a separate component for it */}
      <footer className="webinar-footer" style={{ textAlign: 'center', padding: '20px', background: '#e0f2f7', color: '#004d40', marginTop: '40px' }}>
        <p>&copy; {new Date().getFullYear()} SWET. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default WebinarPage;