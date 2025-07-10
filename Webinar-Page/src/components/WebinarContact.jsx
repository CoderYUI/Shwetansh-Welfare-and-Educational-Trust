// In WebinarContact.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaLink, FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa'; // For solid icons, use 'fa' prefix for brands
import '../styles/WebinarContact.css'

function WebinarContact() {
  return (
    <section className="webinar-contact">
      <div className="container">
        <h2>📞 Register & Connect With Us!</h2>
        <p>
          Ready to join? Secure your spot for the upcoming webinar. For any queries, feel free to reach out.
        </p>

        <div className="contact-details">
          <p>
            <strong>Registration Link:</strong>{' '}
            <a href="https://yourregistrationlink.com" target="_blank" rel="noopener noreferrer">
              <FaLink style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Register Here
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@swet.org">
              <FaRegEnvelope style={{ verticalAlign: 'middle', marginRight: '5px' }} /> info@swet.org
            </a>
          </p>
          <p>
            <strong>Phone:</strong> <FaPhoneAlt style={{ verticalAlign: 'middle', marginRight: '5px' }} /> +91-9876543210
          </p>
          <p>
            <strong>Follow Us:</strong>{' '}
            <div className="social-links" style={{ display: 'inline-flex', gap: '15px', marginLeft: '10px' }}>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </p>
        </div>

        <p className="call-to-action">
          Don't miss out on valuable insights and networking opportunities!
        </p>
      </div>
    </section>
  );
}

export default WebinarContact;