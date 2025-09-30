# Handmade Home Décor Store

A modern, minimal, and visually appealing e-commerce website for a handmade home décor store built with React.js, Tailwind CSS, and Bootstrap.

## Features

- **Modern Hero Section**: Inspired by Dream Machine's landing page with large background image and bold headline
- **Responsive Navigation**: Clean navbar with smooth animations and scroll effects
- **Product Showcase**: Interactive grid with hover animations, filtering, and favorites
- **Category Banners**: Beautiful category sections with gradient overlays
- **Customer Testimonials**: Animated carousel with customer reviews and ratings
- **Newsletter Signup**: Engaging subscription section with benefits
- **Interactive Animations**: Smooth transitions using Framer Motion
- **Mobile-First Design**: Fully responsive across all devices

## Design Features

- **Color Palette**: Soft colors (cream, beige, pastel accents) with modern typography
- **Typography**: Playfair Display for headings, Inter for body text
- **Animations**: Framer Motion for smooth page interactions
- **Components**: Reusable React components (Navbar, Hero, ProductGrid, Footer, etc.)
- **Styling**: Combination of Tailwind CSS utilities and Bootstrap components

## Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3 + Bootstrap 5
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Create React App

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd handmade-decor-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar with scroll effects
│   ├── Hero.js            # Hero section with CTA
│   ├── CategoryBanners.js # Product category showcase
│   ├── ProductGrid.js     # Product grid with filtering
│   ├── CallToAction.js    # CTA section with features
│   ├── Testimonials.js    # Customer reviews carousel
│   ├── Newsletter.js      # Newsletter signup section
│   └── Footer.js          # Footer with links and social media
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Components Overview

### Navbar
- Fixed navigation with scroll effects
- Mobile-responsive hamburger menu
- Shopping cart and user account icons
- Smooth hover animations

### Hero Section
- Large background image with gradient overlay
- Bold headline and call-to-action buttons
- Animated statistics and floating elements
- Scroll indicator

### Category Banners
- Grid layout with hover effects
- Gradient overlays and category icons
- Featured collection banner
- Responsive design

### Product Grid
- Filterable product showcase
- Hover animations and favorite functionality
- Star ratings and sale badges
- Add to cart functionality

### Call to Action
- Parallax background effect
- Feature highlights with icons
- Animated statistics counter
- Floating discount badge

### Testimonials
- Auto-playing carousel
- Customer photos and ratings
- Navigation dots and arrows
- Statistics section

### Newsletter
- Email subscription form
- Subscriber avatars and count
- Benefits showcase
- Success notifications

### Footer
- Comprehensive link sections
- Social media icons
- Contact information
- Scroll to top button

## Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  cream: '#F5F5DC',
  beige: '#F5F5DC',
  'soft-pink': '#F8E8E8',
  'warm-gray': '#8B7D6B',
  'sage-green': '#9CAF88',
  'dusty-rose': '#D4A5A5'
}
```

### Fonts
Modify fonts in `tailwind.config.js` and `index.css`:
```javascript
fontFamily: {
  'serif': ['Playfair Display', 'serif'],
  'sans': ['Inter', 'sans-serif']
}
```

### Images
Replace placeholder images with your own:
- Update image URLs in component files
- Use high-quality images (recommended: Unsplash)
- Maintain aspect ratios for best results

## Performance Optimization

- **Lazy Loading**: Images load as needed
- **Code Splitting**: Components load on demand
- **Optimized Animations**: Smooth 60fps animations
- **Responsive Images**: Multiple sizes for different devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@artisanhome.com or create an issue in the repository.

---

**Made with ❤️ by passionate developers for artisan creators**
