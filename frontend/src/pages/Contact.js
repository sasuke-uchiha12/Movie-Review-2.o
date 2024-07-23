import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span>Contact</span>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h2>Contact</h2>
              <ul className="contact-detail">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <address>
                    <span>cinephile. INC</span> <br />
                    Developer Street, earth - ♾️
                  </address>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <a href="tel:1590912831">+1 590 912 831</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto: cinephile-team7@cinephile.com">cinephile-team7@cinephile.com</a>
                </li>
              </ul>
              <div className="contact-form">
                <input type="text" className="name" placeholder="Name..." />
                <input type="text" className="email" placeholder="Email..." />
                <input type="text" className="website" placeholder="if any Website..." />
                <textarea className="message" placeholder="Message..."></textarea>
                <input type="submit" value="Send Message " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
