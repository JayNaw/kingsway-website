import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Programs.css';

const Programs = () => {
  return (
    <div className="programs-page">
      <Helmet>
        <title>Programs — Kings' Way Kindergarten & Primary</title>
        <meta name="description" content="Discover the programs at Kings' Way including kindergarten and primary curricula, co-curricular activities and clubs for holistic development." />
        <meta name="keywords" content="programs, kindergarten, primary, Kings' Way, curriculum, activities" />
        <meta property="og:title" content="Kings' Way Kindagarten & Primary School" />
        <meta property="og:description" content="Providing quality early childhood and primary education in a safe and caring environment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kingswaykindagartenandprinaryschool.com/programs" />
        <meta property="og:image" content="https://www.kingswaykindagartenandprinaryschool.com/logo.png" />
        <link rel="canonical" href="https://www.kingswaykindagartenandprinaryschool.com/programs" />
      </Helmet>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Comprehensive education for every stage of development</p>
        </div>
      </section>

      {/* Kindergarten Program */}
      <section className="section">
        <div className="container">
          <div className="program-section">
            <div className="program-header">
              <div className="program-icon">🎨</div>
              <h2>Kindergarten Program</h2>
            </div>
            <p className="program-intro">
              Our kindergarten program provides a nurturing and stimulating environment 
              where young children discover the joy of learning through play-based activities 
              and structured lessons.
            </p>

            <div className="program-features">
              <div className="feature-item">
                <h4>Baby Class (Ages 3-4)</h4>
                <p>
                  Introduction to school routines, basic social skills, early literacy, 
                  and numeracy concepts through songs, stories, and hands-on activities.
                </p>
              </div>

              <div className="feature-item">
                <h4>Middle Class (Ages 4-5)</h4>
                <p>
                  Building on foundational skills with more structured learning, phonics, 
                  number recognition, creative arts, and developing independence.
                </p>
              </div>

              <div className="feature-item">
                <h4>Top Class (Ages 5-6)</h4>
                <p>
                  Preparing for primary school with advanced literacy and numeracy, 
                  problem-solving activities, and fostering self-confidence and curiosity.
                </p>
              </div>
            </div>

            <div className="program-highlights">
              <h3>Key Features</h3>
              <ul>
                <li>Play-based learning approach</li>
                <li>Qualified and caring teachers</li>
                <li>Safe and colorful learning spaces</li>
                <li>Development of fine and gross motor skills</li>
                <li>Social and emotional development</li>
                <li>Introduction to Christian values</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Program */}
      <section className="section primary-section">
        <div className="container">
          <div className="program-section">
            <div className="program-header">
              <div className="program-icon">📚</div>
              <h2>Primary Program</h2>
            </div>
            <p className="program-intro">
              Our primary program follows the national curriculum while integrating 
              Christian values and character development, preparing students for academic 
              excellence and responsible citizenship.
            </p>

            <div className="program-levels">
              <div className="level-box">
                <h4>Lower Primary (P1-P3)</h4>
                <p>
                  Foundation stage focusing on core literacy and numeracy skills, 
                  developing reading fluency, mathematical concepts, and study habits.
                </p>
              </div>

              <div className="level-box">
                <h4>Upper Primary (P4-P7)</h4>
                <p>
                  Advanced learning stage with comprehensive subject coverage, 
                  exam preparation, critical thinking development, and leadership skills.
                </p>
              </div>
            </div>

            <div className="subjects-offered">
              <h3>Subjects Offered</h3>
              <div className="subjects-grid">
                <div className="subject-card">📖 English</div>
                <div className="subject-card">🔢 Mathematics</div>
                <div className="subject-card">🌍 Science</div>
                <div className="subject-card">🗺️ Social Studies</div>
                <div className="subject-card">⛪ Religious Education</div>
                <div className="subject-card">💻 ICT</div>
                <div className="subject-card">🎨 Creative Arts</div>
                <div className="subject-card">⚽ Physical Education</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="section activities-section">
        <div className="container">
          <h2 className="section-title">Co-curricular Activities</h2>
          <p className="activities-intro">
            Beyond academics, we offer a variety of activities to develop students' 
            talents, interests, and social skills.
          </p>

          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">⚽</div>
              <h3>Sports</h3>
              <ul>
                <li>Football</li>
                <li>Basketball</li>
                <li>Athletics</li>
                <li>Netball</li>
                <li>Volleyball</li>
              </ul>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🎭</div>
              <h3>Arts & Culture</h3>
              <ul>
                <li>Drama Club</li>
                <li>Music & Dance</li>
                <li>Art & Crafts</li>
                <li>Poetry & Debate</li>
                <li>Cultural Activities</li>
              </ul>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🏆</div>
              <h3>Clubs & Societies</h3>
              <ul>
                <li>Scripture Union</li>
                <li>Science Club</li>
                <li>Environmental Club</li>
                <li>Reading Club</li>
                <li>Leadership Club</li>
              </ul>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🎪</div>
              <h3>Special Events</h3>
              <ul>
                <li>Sports Day</li>
                <li>Cultural Day</li>
                <li>Talent Show</li>
                <li>Career Day</li>
                <li>Field Trips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* School Activities */}
      <section className="section school-activities">
        <div className="container">
          <h2 className="section-title">School Activities</h2>
          
          <div className="school-activities-grid">
            <div className="school-activity">
              <h3>Morning Assembly</h3>
              <p>
                Daily gathering for prayers, announcements, and character-building messages 
                to start the day with purpose and unity.
              </p>
            </div>

            <div className="school-activity">
              <h3>Chapel Services</h3>
              <p>
                Regular worship services and spiritual development sessions that strengthen 
                students' faith and relationship with God.
              </p>
            </div>

            <div className="school-activity">
              <h3>Parent-Teacher Meetings</h3>
              <p>
                Regular consultations to discuss student progress, address concerns, 
                and foster strong home-school partnerships.
              </p>
            </div>

            <div className="school-activity">
              <h3>Awards & Recognition</h3>
              <p>
                Celebrating academic excellence, good behavior, and special achievements 
                to motivate and encourage students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
