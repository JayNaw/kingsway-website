import React from 'react';
import './Apply.css';

const Apply = () => {
  const downloadForms = [
    {
      title: 'Admission Application Form',
      description: 'Complete this form to apply for admission to Kingsway Primary & Kindergarten',
      filename: 'admission-form.pdf',
      icon: '📝'
    },
    {
      title: 'School Requirements',
      description: 'List of required documents and items for new students',
      filename: 'requirements.pdf',
      icon: '📋'
    },
    {
      title: 'Fees Structure',
      description: 'Detailed breakdown of school fees and payment schedules',
      filename: 'fees-structure.pdf',
      icon: '💰'
    },
    {
      title: 'School Rules & Regulations',
      description: 'Important guidelines and conduct expectations for all students',
      filename: 'rules-regulations.pdf',
      icon: '📖'
    }
  ];

  const handleDownload = (filename) => {
    // In production, this would trigger actual PDF download
    alert(`Downloading: ${filename}\n\nNote: In production, this would download the actual PDF file from /public/admissions/${filename}`);
  };

  return (
    <div className="apply-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Admissions</h1>
          <p>Join the Kingsway Family Today</p>
        </div>
      </section>

      {/* Admissions Introduction */}
      <section className="section">
        <div className="container">
          <div className="admissions-intro">
            <h2>Welcome to Kingsway Admissions</h2>
            <p>
              We are delighted that you are considering Kingsway Primary & Kindergarten 
              for your child's education. At Kingsway, we are committed to providing a 
              nurturing, faith-based learning environment where every child can thrive 
              academically, spiritually, and socially.
            </p>
            <p>
              Our admissions process is designed to be straightforward and supportive. 
              Below you'll find all the information and resources you need to begin your 
              child's journey with us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Card */}
      <section className="section contact-card-section">
        <div className="container">
          <h2 className="section-title">Contact Admissions Office</h2>
          
          <div className="primary-contact-card">
            <div className="contact-header">
              <div className="contact-badge">
                <img src="/logo.png" alt="Kingsway Logo" />
              </div>
              <div>
                <h3>Kingsway Primary & Kindergarten</h3>
                <p className="contact-subtitle">Admissions Office</p>
              </div>
            </div>

            <div className="contact-details-grid">
              <div className="contact-detail">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <h4>Phone</h4>
                  <p>+256 XXX XXX XXX</p>
                  <p>+256 XXX XXX XXX</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">✉️</div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <p>admissions@kingsway.ac.ug</p>
                  <p>info@kingsway.ac.ug</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <h4>Location</h4>
                  <p>Kampala, Uganda</p>
                  <p>Plot XXX, Street Name</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">🕐</div>
                <div className="detail-content">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <p className="cta-text">
                Call us today to schedule a school tour or discuss your child's admission!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Forms Section */}
      <section className="section download-section">
        <div className="container">
          <h2 className="section-title">Download Admission Forms</h2>
          <p className="download-intro">
            Download the following documents to complete your child's admission process. 
            All forms are in PDF format and can be printed, filled out, and submitted to 
            the school office.
          </p>

          <div className="download-grid">
            {downloadForms.map((form, index) => (
              <div key={index} className="download-card">
                <div className="download-icon">{form.icon}</div>
                <h3>{form.title}</h3>
                <p>{form.description}</p>
                <button 
                  className="btn btn-primary download-btn"
                  onClick={() => handleDownload(form.filename)}
                >
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Admission Process</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Download & Complete Forms</h3>
                <p>
                  Download the admission application form above and fill it out completely 
                  with accurate information about your child and family.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Gather Required Documents</h3>
                <p>
                  Prepare all necessary documents including birth certificate, previous 
                  school records, passport photos, and any other documents listed in the 
                  requirements form.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Submit Application</h3>
                <p>
                  Bring the completed forms and documents to our admissions office during 
                  working hours. Our staff will review your application and guide you 
                  through the next steps.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Interview & Assessment</h3>
                <p>
                  Schedule an interview with the admissions team and an age-appropriate 
                  assessment for your child to help us understand their learning needs.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Receive Admission Decision</h3>
                <p>
                  We will notify you of the admission decision within 5-7 working days. 
                  Upon acceptance, you'll receive further instructions for enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Note */}
      <section className="section support-section">
        <div className="container">
          <div className="support-card">
            <h2>We're Here to Help</h2>
            <p>
              Parents and guardians are encouraged to visit the school for personalized 
              guidance during the admission process. Our admissions team is ready to answer 
              your questions, show you around our facilities, and help you understand how 
              Kingsway can be the perfect fit for your child's educational journey.
            </p>
            <div className="support-buttons">
              <a href="/contact" className="btn btn-primary">Contact Us</a>
              <a href="/about" className="btn btn-outline">Learn More About Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
