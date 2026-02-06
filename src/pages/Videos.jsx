import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Videos.css';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'events', name: 'Events' },
    { id: 'activities', name: 'Activities' },
    { id: 'educational', name: 'Educational' },
    { id: 'sports', name: 'Sports' }
  ];

  // Video content - update these paths based on your videos folder
  const videos = [
    { 
      id: 1, 
      category: 'activities', 
      title: 'Kids Playing on a Swing', 
      description: 'Kids enjoying playtime on a swing', 
      src: 'src/videos/kids-playing-on-a-swing.mp4',
    },
    { 
      id: 2, 
      category: 'educational', 
      title: 'English Class P4', 
      description: 'Exciting moments from English class', 
      src: 'src/videos/english-class-p4.mp4',
    },
    { 
      id: 3, 
      category: 'educational', 
      title: 'English Class P5', 
      description: 'English class activities for primary 5 students', 
      src: 'src/videos/english-class.mp4',
    },
    { 
      id: 4, 
      category: 'educational', 
      title: 'Learning in Action', 
      description: 'Students engaged in learning activities', 
      src: 'src/videos/learning-in-action.mp4',
    },
    { 
      id: 5, 
      category: 'educational', 
      title: 'Religion Class', 
      description: 'Students participating in religion class', 
      src: 'src/videos/relegion-class.mp4',
    },
    { 
      id: 6, 
      category: 'activities', 
      title: 'Workshop', 
      description: 'Workshop held in school for teachers to intergrate learning at Kings Way', 
      src: 'src/videos/workshop.mp4',
    },
    { 
      id: 7, 
      category: 'activities', 
      title: 'Curriculum review', 
      description: 'Curriculum review for the start of the year', 
      src: 'src/videos/curriculum-review.mp4',
    },
    { 
      id: 8, 
      category: 'activities', 
      title: 'Class room activities', 
      description: 'Students participating in class room activities', 
      src: 'src/videos/classroom.mp4',
    },
    { 
      id: 9, 
      category: 'event', 
      title: 'Workshop', 
      description: 'Teachers having a bit of fun at the Teachers Workshop', 
      src: 'src/videos/abit-of-fun.mp4',
    },
    { 
      id: 10, 
      category: 'event', 
      title: 'Teachers beginning of term meeting', 
      description: 'Teachers attending their beggining of term meeting', 
      src: 'src/videos/term.mp4',
    }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="videos-page">
      <Helmet>
        <title>Videos — Kings' Way School</title>
        <meta name="description" content="Watch videos from Kings' Way events, activities and educational programs showcasing our school community and learning environment." />
        <meta name="keywords" content="videos, Kings' Way, events, activities, educational, school" />
        <meta property="og:title" content="Kings' Way Kindergarten & Primary School" />
        <meta property="og:description" content="Providing quality early childhood and primary education in a safe and caring environment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kingswaykindagartenandprinaryschool.com/videos" />
        <meta property="og:image" content="https://www.kingswaykindagartenandprinaryschool.com/logo.png" />
        <link rel="canonical" href="https://www.kingswaykindagartenandprinaryschool.com/videos" />
      </Helmet>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Video Library</h1>
          <p>Explore Our School Through Videos</p>
        </div>
      </section>

      {/* Videos Content */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="videos-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="videos-grid">
            {filteredVideos.length > 0 ? (
              filteredVideos.map(video => (
                <div key={video.id} className="video-item">
                  <div className="video-player">
                    <video
                      width="100%"
                      height="100%"
                      controls
                      poster={video.thumbnail}
                      className="video-element"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="video-info">
                    <h4>{video.title}</h4>
                    <p>{video.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-videos">
                <p>No videos available in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
