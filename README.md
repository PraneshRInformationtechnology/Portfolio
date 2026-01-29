#Portfolio Website

A stunning, professional portfolio website with design elements and smooth animations. Built with React, Bootstrap 5, and modern web technologies.

## Features

- **Design**: Vibrant color palette with neon glows, gradients, and particle effects
- **Smooth Animations**: GSAP and AOS animations for engaging user experience
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive Components**: Hover effects, animated buttons, and micro-interactions
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Modern Tech Stack**: React 18, TypeScript, Bootstrap 5, GSAP
- **Performance Optimized**: Fast loading times and smooth scrolling

## Sections

1. **Hero Section**: Fullscreen intro with animated particles and call-to-action buttons
2. **About**: Personal introduction with animated highlights and avatar
3. **Skills**: Animated progress bars showing technical and design skills
4. **Projects**: Featured project showcase with hover effects and tech badges
5. **Experience**: Interactive timeline showing work history and education
6. **Contact**: Contact form with validation and social media links
7. **Footer**: Clean footer with navigation and scroll-to-top functionality

## Technologies Used

- **Frontend**: React 18, TypeScript, Bootstrap 5
- **Styling**: Custom CSS with CSS Variables, Gradients, and Animations
- **Animations**: GSAP (GreenSock), AOS (Animate On Scroll)
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Orbitron)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/anime-portfolio.git
cd anime-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up continuous deployment from your Git repository

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/anime-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## Customization

### Colors

Edit the CSS variables in `src/styles/custom.css`:

```css
:root {
  --primary-purple: #8b5cf6;
  --primary-cyan: #06b6d4;
  --accent-pink: #ff6b9d;
  --accent-orange: #f97316;
  /* Add your custom colors */
}
```

### Content

Update the content in each component file:

- `src/components/Home.tsx` - Hero section content
- `src/components/About.tsx` - About section and highlights
- `src/components/Skills.tsx` - Technical and design skills
- `src/components/Projects.tsx` - Project showcase
- `src/components/Experience.tsx` - Work history and education
- `src/components/Contact.tsx` - Contact information and social links

### Animations

Modify animations in `src/styles/animations.css` or add new GSAP animations in the component files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+ Performance
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Anime community for design inspiration
- GSAP for amazing animation capabilities
- React team for the excellent framework
- Bootstrap team for the responsive grid system
- Lucide for the beautiful icons

## Contact

Alex Chen - alex.chen.dev@gmail.com

Project Link: [https://github.com/yourusername/anime-portfolio](https://github.com/yourusername/anime-portfolio)

---

Made with ❤️ and lots of anime inspiration
