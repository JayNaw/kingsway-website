import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our journey, values, and commitment to excellence</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-logo">
              <img src="/logo.png" alt="Kingsway Logo" />
            </div>
            <div className="about-intro-content">
              <h2>Who We Are</h2>
              <p>
                Kingsway Primary & Kindergarten is a Christian-based educational institution 
                dedicated to nurturing young minds with faith, excellence, and character. 
                Established with a vision to build pure leaders, we combine academic rigor 
                with spiritual growth to prepare students for a successful future.
              </p>
              <p>
                Our school provides a safe, supportive, and stimulating environment where 
                children can explore their potential, develop critical thinking skills, and 
                grow in their relationship with God. With experienced teachers, modern facilities, 
                and a comprehensive curriculum, we ensure every child receives the best education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vm-card vision-card">
              <div className="vm-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be a leading Christian educational institution that nurtures holistic 
                development, producing leaders of integrity who will positively impact 
                their communities and the world with faith and excellence.
              </p>
            </div>

            <div className="vm-card mission-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide quality Christ-centered education that develops students 
                academically, spiritually, socially, and physically, preparing them to 
                become responsible citizens and faithful servants of God.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">1</div>
              <h3>Faith in God</h3>
              <p>
                We believe in God as the foundation of all knowledge and wisdom. 
                Our educational approach is grounded in Christian principles and biblical teachings.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">2</div>
              <h3>Academic Excellence</h3>
              <p>
                We are committed to providing high-quality education that challenges 
                students to reach their full potential and excel in all areas of learning.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">3</div>
              <h3>Integrity & Character</h3>
              <p>
                We instill values of honesty, respect, responsibility, and moral uprightness 
                in every student, preparing them to be leaders of good character.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">4</div>
              <h3>Holistic Development</h3>
              <p>
                We focus on developing the whole child—intellectually, spiritually, 
                emotionally, socially, and physically—for balanced growth.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">5</div>
              <h3>Innovation & Creativity</h3>
              <p>
                We encourage creative thinking, problem-solving, and innovation, 
                equipping students with skills for the 21st century.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">6</div>
              <h3>Community & Service</h3>
              <p>
                We promote a sense of community and teach students the importance 
                of serving others and making positive contributions to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Motto */}
      <section className="section motto-section">
        <div className="container">
          <div className="motto-content">
            <div className="motto-badge">
              <img src="/logo.png" alt="Kingsway Logo" />
            </div>
            <h2>Our Motto</h2>
            <p className="motto-text">"In God We Trust"</p>
            <p className="motto-description">
              This motto reflects our unwavering belief that God is the source of all 
              wisdom, guidance, and strength. We trust in His divine providence as we 
              educate and nurture the leaders of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Kingsway?</h2>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">👨‍🏫</div>
              <h4>Qualified Teachers</h4>
              <p>Experienced, certified educators passionate about student success</p>
            </div>

            <div className="why-card">
              <div className="why-icon">📚</div>
              <h4>Comprehensive Curriculum</h4>
              <p>Balanced academic program aligned with national standards</p>
            </div>

            <div className="why-card">
              <div className="why-icon">⛪</div>
              <h4>Christian Foundation</h4>
              <p>Faith-based education that nurtures spiritual growth</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🏫</div>
              <h4>Modern Facilities</h4>
              <p>Well-equipped classrooms and learning resources</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h4>Parent Partnership</h4>
              <p>Strong home-school collaboration for student success</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🎨</div>
              <h4>Co-curricular Activities</h4>
              <p>Sports, arts, music, and clubs for holistic development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
