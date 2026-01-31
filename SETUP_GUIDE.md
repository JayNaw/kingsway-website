# Kingsway School Website - Setup Guide

## Quick Start (3 Steps)

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from: https://nodejs.org/
- Install the LTS version
- Verify installation by opening terminal/command prompt and typing:
  ```bash
  node --version
  npm --version
  ```

### Step 2: Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```

This will download all required packages. Wait for it to complete.

### Step 3: Start the Website
```bash
npm run dev
```

The website will open at: **http://localhost:3000**

Press `Ctrl+C` to stop the server.

---

## For Production Deployment

### Build the Website
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for hosting.

### Test Production Build
```bash
npm run preview
```

---

## Customization Checklist

### ✅ Before Launch

1. **Update School Information**
   - [ ] Replace logo in `public/logo.png`
   - [ ] Update contact details in `src/pages/Contact.jsx`
   - [ ] Update contact details in `src/pages/Apply.jsx`
   - [ ] Update footer information in `src/components/Footer.jsx`

2. **Add Content**
   - [ ] Add actual academic results in `src/data/results.js`
   - [ ] Add school photos to `public/gallery/`
   - [ ] Update gallery in `src/pages/Gallery.jsx`
   - [ ] Add PDF forms to `public/admissions/`

3. **Customize Colors** (Optional)
   - [ ] Edit CSS variables in `src/index.css`
   - [ ] Update primary colors to match your branding

4. **Review Text**
   - [ ] Check all pages for placeholder text
   - [ ] Update phone numbers (currently showing +256 XXX XXX XXX)
   - [ ] Update email addresses
   - [ ] Update physical address

---

## File Locations Reference

### School Logo
- **Location:** `public/logo.png`
- **Used in:** Navbar, Footer, About, Apply pages
- **Recommended Size:** 500x500 pixels, PNG format

### Contact Information
- **Footer:** `src/components/Footer.jsx` (line ~30-50)
- **Contact Page:** `src/pages/Contact.jsx` (line ~35-70)
- **Apply Page:** `src/pages/Apply.jsx` (line ~60-100)

### Academic Results
- **File:** `src/data/results.js`
- **Format:**
  ```javascript
  {
    year: '2024',
    totalCandidates: 45,
    divisions: { div1: 12, div2: 18, div3: 10, div4: 5 },
    highlight: 'Your achievement description'
  }
  ```

### Gallery Photos
1. Create folder: `public/gallery/`
2. Add images: `photo1.jpg`, `photo2.jpg`, etc.
3. Update `src/pages/Gallery.jsx` images array

### PDF Forms
- **Location:** `public/admissions/`
- **Files needed:**
  - admission-form.pdf
  - requirements.pdf
  - fees-structure.pdf
  - rules-regulations.pdf

---

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

1. Create account at https://netlify.com
2. Drag and drop the `dist` folder (after running `npm run build`)
3. Your site is live!

**OR** connect GitHub:
1. Push code to GitHub
2. Connect GitHub to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel

1. Create account at https://vercel.com
2. Import GitHub repository
3. Vercel auto-detects Vite settings
4. Deploy!

### Option 3: Traditional Hosting (cPanel, FTP)

1. Run `npm run build`
2. Upload contents of `dist/` folder to your hosting
3. Configure `.htaccess` for single-page app routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Troubleshooting

### Problem: `npm install` fails
**Solution:** 
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Make sure you're using Node.js v16 or higher

### Problem: Port 3000 is already in use
**Solution:**
- Change port in `vite.config.js`:
  ```javascript
  server: { port: 3001 }
  ```

### Problem: Logo not showing
**Solution:**
- Check `public/logo.png` exists
- Clear browser cache (Ctrl+Shift+R)
- Restart dev server

### Problem: PDFs not downloading
**Solution:**
- Ensure PDF files are in `public/admissions/` folder
- Check exact filenames match those in Apply.jsx
- Rebuild the project

---

## Common Tasks

### Change Primary Color
Edit `src/index.css`:
```css
:root {
  --primary-green: #76b82a;  /* Change this hex color */
}
```

### Add a New Page
1. Create `src/pages/NewPage.jsx`
2. Create `src/pages/NewPage.css`
3. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/newpage" element={<NewPage />} />
   ```
4. Add link in navbar: `src/components/Navbar.jsx`

### Update Academic Year
1. Open `src/data/results.js`
2. Add new year object at the beginning of the array
3. Keep 5 most recent years

---

## Support & Help

### Need Help?

1. Check this guide first
2. Review README.md
3. Search error messages online
4. Contact: info@kingsway.ac.ug

### Useful Resources

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- CSS Tricks: https://css-tricks.com

---

## Version History

- **v1.0** - Initial website with all 7 pages
- Features: Responsive design, academic results, contact forms, admission downloads

---

**Good luck with your website! 🎉**
