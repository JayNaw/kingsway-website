import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us - we'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Have questions about admissions, programs, or anything else? 
                We're here to help! Reach out to us using any of the methods below.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Address</h4>
                    <p>Kampala, Uganda<br />Plot XXX, Street Name<br />P.O. Box XXXX</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>+256 XXX XXX XXX<br />+256 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>info@kingsway.ac.ug<br />admissions@kingsway.ac.ug</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">🕐</div>
                  <div className="info-content">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="visit-note">
                <h3>Visit Our School</h3>
                <p>
                  We welcome parents and guardians to visit our campus and see our facilities. 
                  Please call ahead to schedule a tour with our admissions team.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us A Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+256 XXX XXX XXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us On The Map</h2>
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <p>Map integration placeholder</p>
            <small>In production, this would show an embedded Google Maps location</small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
