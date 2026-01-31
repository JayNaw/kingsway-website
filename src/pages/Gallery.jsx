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
    { id: 1, category: 'classrooms', title: 'Modern Classroom', description: 'Well-equipped learning spaces' },
    { id: 2, category: 'events', title: 'Sports Day', description: 'Annual sports competition' },
    { id: 3, category: 'sports', title: 'Football Training', description: 'Students during sports practice' },
    { id: 4, category: 'activities', title: 'Art Class', description: 'Creative arts activities' },
    { id: 5, category: 'classrooms', title: 'Computer Lab', description: 'ICT learning facility' },
    { id: 6, category: 'events', title: 'Cultural Day', description: 'Celebrating diversity' },
    { id: 7, category: 'sports', title: 'Athletics Meet', description: 'Track and field events' },
    { id: 8, category: 'activities', title: 'Music Class', description: 'Developing musical talents' },
    { id: 9, category: 'classrooms', title: 'Science Lab', description: 'Hands-on science experiments' },
    { id: 10, category: 'events', title: 'Graduation', description: 'P7 graduation ceremony' },
    { id: 11, category: 'sports', title: 'Basketball Team', description: 'Our basketball champions' },
    { id: 12, category: 'activities', title: 'Drama Performance', description: 'School play presentation' }
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
                  <div className="placeholder-icon">📷</div>
                  <div className="image-overlay">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="gallery-note">
            <p>
              <strong>Note:</strong> This is a sample gallery structure. In the production version, 
              actual school photos would be displayed here. Images can be easily added by placing 
              them in the appropriate folder and updating the image array.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
