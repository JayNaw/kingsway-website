import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classrooms', name: 'Classrooms' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'activities', name: 'Activities' }
  ];

  // Placeholder images - in real implementation, these would be actual images
  const images = [
    { id: 1, category: 'classrooms', title: 'Modern Classroom', description: 'Well-equipped learning spaces', src: '/gallery/play.jpg' },
    { id: 2, category: 'events', title: 'Sports Day', description: 'Annual sports competition', src: '/gallery/kids.jpg' },
    { id: 3, category: 'events', title: 'Celebration Day', description: 'Students during celebration', src: '/gallery/celebration.jpg' },
    { id: 4, category: 'activities', title: 'Sanitation Day', description: 'School cleaning activities', src: '/gallery/sanitation.jpg' },
    { id: 5, category: 'classrooms', title: 'Compound Showcase', description: 'Beautiful school compound', src: '/gallery/compound.jpg' },
    { id: 6, category: 'events', title: 'Tour', description: 'Tour with parents and community', src: '/gallery/guess.jpg' },
    { id: 7, category: 'sports', title: 'Namugongo', description: 'visited Namugongo', src: '/gallery/namugongo.jpg' },
    { id: 8, category: 'activities', title: 'Tour 2', description: 'Second school tour', src: '/gallery/tour1.jpg' },
    { id: 9, category: 'activities', title: 'Tour 3', description: 'Third school tour', src: '/gallery/tour2.jpg' },
    { id: 10, category: 'events', title: 'Community Service', description: 'Students helping the community', src: '/gallery/tour3.jpg' },
    { id: 11, category: 'activities', title: 'Tour 4', description: 'Fourth school tour around lake', src: '/gallery/visit.jpg' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Explore Our Vibrant School Community</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="gallery-filters">
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

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-image-placeholder">
                  <img src={image.src} alt={image.title} className='placeholder-image'/>
                  <div className="image-overlay">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
