# Portfolio Website - Eniyavan Balakrishnan

A modern, responsive portfolio website built with Vite.js, React.js, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist aesthetic with gradient accents
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Components**:
  - Hero section with typing animation
  - Skills with progress bars
  - Experience timeline
  - Project filtering
  - Contact form
- **Performance Optimized**: Fast loading and optimized bundle size

## Tech Stack

- **Framework**: Vite.js + React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation with dark mode toggle
│   │   ├── Hero.jsx           # Hero section
│   │   ├── About.jsx          # About section
│   │   ├── Skills.jsx         # Skills showcase
│   │   ├── Experience.jsx     # Work experience timeline
│   │   ├── Projects.jsx       # Projects with filtering
│   │   ├── Education.jsx      # Education & certifications
│   │   ├── Contact.jsx        # Contact form
│   │   └── Footer.jsx         # Footer with back-to-top
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/
│   └── resume.pdf            # Add your resume here
└── package.json
```

## Customization

1. **Personal Information**: Update contact details in `Contact.jsx`
2. **Projects**: Modify project data in `Projects.jsx`
3. **Experience**: Update work history in `Experience.jsx`
4. **Skills**: Customize skills and proficiency in `Skills.jsx`
5. **Resume**: Add your resume PDF to the `public/` folder
6. **Colors**: Adjust theme colors in `tailwind.config.js`

## Performance Features

- Code splitting
- Lazy loading
- Optimized animations
- SEO meta tags
- Fast initial load time

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Eniyavan Balakrishnan**
- Email: eniyavanksb@gmail.com
- Phone: +91 77089 87657
- Location: Thanjavur, India
