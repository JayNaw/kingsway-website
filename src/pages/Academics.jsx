import React from 'react';
import ResultCard from '../components/ResultCard';
import { academicResults, divisionGuide } from '../data/results';
import './Academics.css';

const Academics = () => {
  return (
    <div className="academics-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Academics at Kings' Way</h1>
          <p>Building Future Leaders with Faith and Excellence</p>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="section">
        <div className="container">
          <div className="academic-intro">
            <h2 className="section-title">Our Academic Philosophy</h2>
            <p className="intro-text">
              At Kings' Way Primary & Kindergarten, we believe that academic excellence goes 
              hand in hand with character development and spiritual growth. Our approach to 
              education is holistic, ensuring that every child develops intellectually, 
              morally, and spiritually.
            </p>
            <p className="intro-text">
              We provide a nurturing environment where students are challenged to reach their 
              full potential through engaging lessons, innovative teaching methods, and 
              continuous assessment that tracks individual progress.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title">Curriculum Overview</h2>
          
          <div className="curriculum-grid">
            <div className="curriculum-card">
              <div className="curriculum-icon">🎨</div>
              <h3>Fancy School Recreation</h3>
              <p>
                Creative and engaging activities that foster imagination, artistic expression, 
                and recreational skills through structured play and learning.
              </p>
            </div>

            <div className="curriculum-card">
              <div className="curriculum-icon">✨</div>
              <h3>Shinnity Routines</h3>
              <p>
                Daily routines and practices that instill discipline, time management, 
                and consistency in students' academic and personal lives.
              </p>
            </div>

            <div className="curriculum-card">
              <div className="curriculum-icon">🏛️</div>
              <h3>3hinity Courtation</h3>
              <p>
                Comprehensive educational approach integrating mind, body, and spirit 
                for holistic student development and character formation.
              </p>
            </div>

            <div className="curriculum-card">
              <div className="curriculum-icon">🎵</div>
              <h3>Bred by God's</h3>
              <p>
                Faith-based education rooted in Christian principles, biblical teachings, 
                and spiritual values that shape character and worldview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching & Assessment */}
      <section className="section teaching-section">
        <div className="container">
          <h2 className="section-title">Teaching & Assessment</h2>
          
          <div className="teaching-grid">
            <div className="teaching-card">
              <h3>Teaching Methods</h3>
              <ul>
                <li>Interactive and student-centered learning</li>
                <li>Use of modern teaching aids and technology</li>
                <li>Collaborative group activities</li>
                <li>Practical hands-on experiences</li>
                <li>Differentiated instruction for diverse learners</li>
              </ul>
            </div>

            <div className="teaching-card">
              <h3>Assessment Approach</h3>
              <ul>
                <li>Continuous assessment throughout the term</li>
                <li>Regular homework and classwork evaluation</li>
                <li>Mid-term and end-of-term examinations</li>
                <li>Progress reports for parent engagement</li>
                <li>Individual student performance tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Results */}
      <section className="section results-section">
        <div className="container">
          <h2 className="section-title">Academic Results Overview</h2>
          <p className="results-intro">
            Our students consistently demonstrate excellence in national examinations. 
            Below is a summary of our Primary Leaving Examination (PLE) results over 
            the past five years.
          </p>

          {/* Division Guide */}
          <div className="division-guide">
            <h3>Division Guide</h3>
            <div className="guide-grid">
              {Object.entries(divisionGuide).map(([key, value]) => (
                <div key={key} className={`guide-item ${key}`}>
                  <span className="guide-label">{key.toUpperCase().replace('DIV', 'Division ')}</span>
                  <span className="guide-range">{value.range}</span>
                  <span className="guide-desc">{value.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results Cards */}
          <div className="results-grid">
            {academicResults.map((result, index) => (
              <ResultCard key={index} result={result} />
            ))}
          </div>

          {/* Privacy Disclaimer */}
          <div className="privacy-note">
            <p>
              <strong>Privacy Notice:</strong> Individual student results and names are 
              kept confidential. The data presented above represents aggregate performance 
              statistics and does not identify individual students. For specific inquiries 
              about your child's performance, please contact the school administration.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-academic">
        <div className="container">
          <div className="cta-content-academic">
            <h2>Join Our Community of Excellence</h2>
            <p>Give your child the gift of quality Christian education</p>
            <a href="/apply" className="btn btn-primary">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
