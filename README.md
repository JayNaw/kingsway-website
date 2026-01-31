# Kingsway Primary & Kindergarten Website

A modern, responsive React website for Kingsway Primary & Kindergarten school built with React and Vite.

## Features

- ✅ Modern, professional design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ 7 complete pages (Home, About, Academics, Programs, Gallery, Contact, Apply)
- ✅ Academic results showcase with interactive cards
- ✅ Downloadable admission forms section
- ✅ Contact form and information
- ✅ Smooth animations and transitions
- ✅ SEO-friendly structure
- ✅ Clean, maintainable code

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Styling:** Custom CSS with CSS variables
- **Fonts:** Google Fonts (Playfair Display + Poppins)

## Project Structure

```
kingsway-school/
├── public/
│   ├── admissions/          # PDF files for download
│   └── logo.png             # School logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ResultCard.jsx
│   │   └── ResultCard.css
│   ├── pages/
│   │   ├── Home.jsx & Home.css
│   │   ├── About.jsx & About.css
│   │   ├── Academics.jsx & Academics.css
│   │   ├── Programs.jsx & Programs.css
│   │   ├── Gallery.jsx & Gallery.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Apply.jsx & Apply.css
│   ├── data/
│   │   └── results.js       # Academic results data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist/` folder

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Customization Guide

### 1. Colors & Branding

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-green: #76b82a;
  --primary-yellow: #f4ce14;
  --dark-green: #2d5016;
  /* ... other colors */
}
```

### 2. School Information

Update contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Apply.jsx`

### 3. Academic Results

Edit `src/data/results.js` to update yearly results:

```javascript
export const academicResults = [
  {
    year: '2024',
    totalCandidates: 45,
    divisions: { div1: 12, div2: 18, div3: 10, div4: 5 },
    highlight: 'Outstanding performance...'
  },
  // Add more years...
];
```

### 4. Adding Images

**Gallery Images:**
1. Add images to a new folder: `public/gallery/`
2. Update the `images` array in `src/pages/Gallery.jsx`

**Hero Background:**
- Replace background gradients in `src/pages/Home.css`

### 5. PDF Forms

Add PDF files to `public/admissions/` folder:
- admission-form.pdf
- requirements.pdf
- fees-structure.pdf
- rules-regulations.pdf

### 6. Logo

Replace `public/logo.png` with your school logo (recommended size: 500x500px)

## Pages Overview

### Home (/)
- Hero section with call-to-action
- Welcome message
- Key features
- School levels overview
- Why Choose Kingsway
- Statistics showcase

### About (/about)
- School introduction
- Vision & Mission
- Core values
- School motto
- Why Choose Us section

### Academics (/academics)
- Academic philosophy
- Curriculum overview (4 core subjects)
- Teaching & assessment methods
- 5-year academic results with cards
- Division guide
- Privacy disclaimer

### Programs (/programs)
- Kindergarten program details
- Primary program levels
- Subjects offered
- Co-curricular activities (4 categories)
- School activities

### Gallery (/gallery)
- Photo grid with category filters
- Categories: Classrooms, Events, Sports, Activities
- Lightbox-ready structure

### Contact (/contact)
- Contact information cards
- Contact form
- Map placeholder
- Office hours

### Apply (/apply)
- Admissions introduction
- Contact information card (highlighted)
- Downloadable PDF forms (4 forms)
- Step-by-step admission process
- Support note

## Features Highlights

### Navigation
- Sticky navbar with scroll effect
- Mobile-responsive hamburger menu
- Active page highlighting
- Prominent "Apply Now" button

### Results Display
- Interactive result cards for 5 years
- Division breakdown with color coding
- Pass rate calculation
- Hover effects and animations

### Forms & Downloads
- Contact form with validation
- PDF download functionality
- Clear call-to-action buttons

### Animations
- Fade-in effects on page load
- Smooth transitions
- Hover state animations
- Scroll-triggered effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized with Vite for fast builds
- CSS-only animations (no heavy libraries)
- Lazy loading ready
- Production build size: ~150KB (gzipped)

## Deployment

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push code to GitHub
2. Import project to Vercel
3. Framework preset: Vite
4. Deploy

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder contents to your server
3. Configure server for SPA routing

## Future Enhancements

- [ ] Add actual school photos to gallery
- [ ] Implement backend for contact form
- [ ] Add student portal login
- [ ] Integrate Google Maps for location
- [ ] Add blog/news section
- [ ] Implement online payment integration
- [ ] Add photo lightbox/modal functionality
- [ ] Set up CMS for easy content updates

## Support

For questions or issues:
- Email: info@kingsway.ac.ug
- Phone: +256 XXX XXX XXX

## License

© 2024 Kingsway Primary & Kindergarten. All rights reserved.

---

**Built with ❤️ for Kingsway Primary & Kindergarten**
