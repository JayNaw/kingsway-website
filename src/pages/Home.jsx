import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Kings' Way — Kindergarten & Primary School | Home</title>
        <meta name="description" content="Kings' Way Kindergarten & Primary: Christian-based education building leaders with faith, excellence and strong academics in Kalongo, Agago." />
        <meta name="keywords" content="Kings' Way, kindergarten, primary school, Christian school, education, admissions, Uganda" />
        <meta property="og:title" content="Kings' Way Kindagarten & Primary School" />
        <meta property="og:description" content="Providing quality early childhood and primary education in a safe and caring environment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kingswaykindagartenandprinaryschool.com/" />
        <meta property="og:image" content="https://www.kingswaykindagartenandprinaryschool.com/logo.png" />
        <link rel="canonical" href="https://www.kingswaykindagartenandprinaryschool.com/" />
      </Helmet>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title fade-in-up">
              Welcome to <span className="highlight">Kings' Way</span>
            </h1>
            <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
              Kindergarten & Primary School
            </p>
            <p className="hero-tagline fade-in-up" style={{ animationDelay: '0.4s' }}>
              Building Pure Leaders with Faith, Grace & Excellence
            </p>
            <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/apply" className="btn btn-primary">Apply Now</Link>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 Q300,70 600,40 T1200,40 L1200,0 L0,0 Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-badge">
              <img src="/logo.png" alt="Kingsway Logo" />
            </div>
            <h2 className="section-title">Christian Education</h2>
            <p className="welcome-text">
              At Kings' Way Kindergarten and Primary, we provide a nurturing environment where 
              children develop academically, spiritually, and socially. Our Christian-based 
              education focuses on building character, fostering excellence, and preparing 
              students to become leaders with integrity and faith.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/Icon1.png" alt="Competent and Trained Teachers" />
              </div>
              <h3>Competent and Trained Teachers</h3>
              <p>Expert educators dedicated to student success</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icon2.png" alt="Guidance and Counselling" />
              </div>
              <h3>Guidance and Counselling</h3>
              <p>Supporting holistic student development</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icon3.png" alt="Co-curricular Activities" />
              </div>
              <h3>Co-curricular Activities</h3>
              <p>Well-rounded education beyond academics</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icon4.png" alt="Best at Grooming Leaders" />
              </div>
              <h3>Best at Grooming Leaders</h3>
              <p>Building tomorrow's leaders today</p>
            </div>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="section levels-section">
        <div className="container">
          <h2 className="section-title">Our History, Streams & Values</h2>
          
          <div className="levels-grid">
            <div className="level-card">
              <div className="level-icon">🏫</div>
              <h3>Our History</h3>
              <p>
                Learn about our journey of excellence in education and our commitment 
                to nurturing young minds with Christian values and academic rigor.
              </p>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>

            <div className="level-card">
              <div className="level-icon">🎓</div>
              <h3>Our Streams</h3>
              <p>
                We offer comprehensive programs from Kindergarten through Primary 7, 
                with dedicated streams for each level to ensure focused learning.
              </p>
              <Link to="/programs" className="btn btn-outline">Learn More</Link>
            </div>

            <div className="level-card">
              <div className="level-icon">🎯</div>
              <h3>Our Values</h3>
              <p>
                Guided by Christian principles, we instill values of integrity, 
                excellence, faith, and service in every student.
              </p>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Kings' Way?</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-number">10</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📸</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Thousand Photoshoots</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📖</div>
              <div className="stat-number">200</div>
              <div className="stat-label">Holistic Assessment Points</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">34:1</div>
              <div className="stat-label">Safe Clocking Community</div>
            </div>
          </div>

          <div className="values-showcase">
            <div className="values-item">
              <span className="values-number">1.</span>
              <div className="values-content">
                <h4>Rapport Due</h4>
                <p>Strong relationships between teachers, students, and parents</p>
              </div>
            </div>
            <div className="values-item">
              <span className="values-number">2.</span>
              <div className="values-content">
                <h4>Tenacic Transitions</h4>
                <p>Seamless progression through educational levels</p>
              </div>
            </div>
            <div className="values-item">
              <span className="values-number">3.</span>
              <div className="values-content">
                <h4>Cutting Technology</h4>
                <p>Modern learning tools and resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Community?</h2>
            <p>Start your child's journey to excellence today</p>
            <div className="cta-buttons">
              <Link to="/apply" className="btn btn-primary">Apply Now</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
