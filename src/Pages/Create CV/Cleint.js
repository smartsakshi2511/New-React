// ClientSection.js

import React from 'react';
 

const ClientSection = () => {
  return (
    <section className="client-section">
      <div className="container">
        <h2>Our Clients</h2>
        <div className="client-list">
          {/* Add your client logos/images here */}
          <img src="client1.png" alt="Client 1" />
          <img src="client2.png" alt="Client 2" />
          <img src="client3.png" alt="Client 3" />
        </div>
        <div className="form-container">
          <h3>Contact Us</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
