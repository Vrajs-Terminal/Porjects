# Vraj Amin - Developer Portfolio

## 📋 Project Overview

A modern, responsive developer portfolio website built for **Vraj Amin**, showcasing projects, technical skills, education, and professional background as a UI/UX Web Developer.

### 🔗 Quick Links
- **GitHub Repository**: https://github.com/Vrajs-Terminal/Porjects.git
- **LinkedIn**: https://linkedin.com/in/vraj-amin
- **Email**: vrajamin45@gmail.com
- **Phone**: +91 96870 19705
- **Location**: Vadodara, Gujarat, India

---

## 🛠️ Technology Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^18.3.1 | UI Framework |
| TypeScript | - | Type Safety |
| Vite | - | Build Tool & Dev Server |
| Tailwind CSS | - | Styling |

### Key Libraries
| Library | Version | Purpose |
|---------|---------|---------|
| Framer Motion | ^12.23.24 | Page transitions & animations |
| GSAP | ^3.13.0 | Advanced animations |
| React Router DOM | ^6.30.1 | Client-side routing |
| React Query | ^5.83.0 | Server state management |
| React Hook Form | ^7.61.1 | Form handling |
| Zod | ^3.25.76 | Schema validation |
| Lucide React | ^0.462.0 | Icons |
| Sonner | ^1.7.4 | Toast notifications |
| Embla Carousel | ^8.6.0 | Carousels |
| Swiper | ^12.0.3 | Advanced sliders |

### UI Components (Shadcn/UI)
- Accordion, Alert, Avatar, Badge, Button, Card
- Carousel, Checkbox, Dialog, Dropdown Menu
- Form, Input, Label, Navigation Menu
- Popover, Progress, Radio Group, Select
- Separator, Sheet, Skeleton, Slider
- Switch, Tabs, Textarea, Toast, Tooltip

---

## 📁 Project Structure

```
src/
├── components/
│   ├── forms/           # Form components
│   │   └── ContactForm.tsx
│   ├── layout/          # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   └── ThemeToggle.tsx
│   ├── portfolio/       # Portfolio-specific components
│   │   ├── CategoryFilter.tsx
│   │   ├── ImageWithLightbox.tsx
│   │   ├── Lightbox.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ProjectNavigation.tsx
│   ├── providers/       # Context providers
│   │   └── ThemeProvider.tsx
│   ├── seo/             # SEO components
│   │   └── SEO.tsx (or similar)
│   ├── ui/              # Reusable UI components (60+ components)
│   └── ErrorBoundary.tsx
├── data/
│   ├── developer.ts     # Developer personal information
│   └── projects.ts      # Portfolio projects data
├── hooks/
│   ├── use-mobile.tsx   # Mobile detection hook
│   ├── use-toast.ts     # Toast hook
│   ├── useMediaQuery.ts # Media query hook
│   └── useScrollPosition.ts # Scroll position hook
├── lib/
│   └── utils.ts         # Utility functions
├── pages/
│   ├── About.tsx        # About page
│   ├── Contact.tsx      # Contact page
│   ├── Home.tsx         # Home page component
│   ├── Index.tsx        # Landing page
│   ├── NotFound.tsx     # 404 page
│   ├── Portfolio.tsx    # Portfolio listing page
│   └── ProjectDetail.tsx # Individual project page
├── types/
│   └── index.ts         # TypeScript interfaces
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles & design tokens
```

---

## 📄 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Index.tsx | Landing/Home page with hero section |
| `/portfolio` | Portfolio.tsx | Project gallery with category filters |
| `/project/:slug` | ProjectDetail.tsx | Individual project details |
| `/about` | About.tsx | Biography, skills, education |
| `/contact` | Contact.tsx | Contact form |
| `/*` | NotFound.tsx | 404 error page |

---

## 📊 Data Models

### DeveloperInfo Interface
```typescript
interface DeveloperInfo {
  name: string;                    // "Vraj Amin"
  tagline: string;                 // "UI/UX Web Developer"
  heroIntroduction: string;        // Hero section text
  biography: string;               // About page biography
  approach: string;                // Development philosophy
  certifications: string[];        // Professional certifications
  skills: {
    programming: string[];         // Java, Python
    webTech: string[];             // HTML, CSS, JavaScript
    frameworks: string[];          // React, Node.js, Git, etc.
    testing: string[];             // Manual Testing, Debugging, etc.
    os: string[];                  // Windows, Mac
  };
  softSkills: string[];            // Problem Solving, Communication, etc.
  languages: string[];             // Gujarati, Hindi, English
  education: string;               // B.Sc Computer Science
  expectedGraduation: string;      // April 2026
  location: string;                // Vadodara, Gujarat, India
  email: string;                   // vrajamin45@gmail.com
  phone: string;                   // +91 96870 19705
  availability: string;            // Open to opportunities
  socialLinks: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  portraitImage: string;           // Profile image URL
}
```

### Project Interface
```typescript
interface Project {
  id: string;
  title: string;
  category: 'web-apps' | 'frontend' | 'fullstack' | 'ui-ux';
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
}

interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  caption?: string;
}
```

---

## 🎨 Features

### ✅ Implemented Features
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Theme**: Toggle between themes with persistence
- **Page Transitions**: Smooth animations using Framer Motion
- **Code Splitting**: Lazy loading for better performance
- **SEO Optimized**: Meta tags and structured data
- **Accessibility**: Skip to content, ARIA labels, semantic HTML
- **Contact Form**: Form validation with Zod
- **Image Lightbox**: Full-screen image viewing
- **Project Filtering**: Filter by category
- **Error Boundary**: Graceful error handling
- **Toast Notifications**: User feedback system
- **Scroll Animations**: Reveal elements on scroll

### 🎯 Current Projects Showcased
1. **Invite-Only Social Media App** (Fullstack)
   - Private social media with authentication
   - Technologies: HTML, CSS, JavaScript, Backend Auth

2. **AR/VR Campus View Website** (Frontend)
   - Virtual campus tour interface
   - Technologies: HTML, CSS, JavaScript, UI Components

3. **Personal Portfolio Website** (UI/UX)
   - Responsive portfolio showcase
   - Technologies: HTML, CSS, JavaScript, Responsive Design

---

## 👤 Developer Information

### Personal Details
- **Name**: Vraj Amin
- **Role**: UI/UX Web Developer
- **Education**: Bachelor of Computer Science, Parul University, Vadodara
- **Expected Graduation**: April 2026

### Technical Skills
| Category | Skills |
|----------|--------|
| Programming | Java (OOP), Python |
| Web Technologies | HTML, CSS, JavaScript |
| Frameworks & Tools | React, Node.js, Git, VS Code, Browser Dev Tools |
| Testing | Manual Testing, Bug Reporting, Website Maintenance, Debugging |
| Operating Systems | Windows, Mac |

### Soft Skills
- Problem Solving
- Clear Communication
- Team Collaboration
- Leadership
- Time Management
- Adaptability
- Quick Learner

### Certifications
- NPTEL (IIT): Computer Networks
- NPTEL (IIT): Theory of Computation

### Languages
- Gujarati, Hindi, English

---

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
```typescript
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [tailwindcss(), react(), componentTagger()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Path Aliases
- `@/` → `src/` (e.g., `@/components`, `@/data`, `@/hooks`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or bun package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/Vrajs-Terminal/Porjects.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

### Build for Production
```bash
npm run build
# or
bun run build
```

---

## 📝 How to Update Content

### Update Personal Information
Edit `src/data/developer.ts`:
```typescript
export const developerInfo: DeveloperInfo = {
  name: 'Your Name',
  tagline: 'Your Title',
  email: 'your@email.com',
  // ... other fields
};
```

### Add New Projects
Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: '4',
    title: 'New Project Name',
    category: 'frontend', // or 'fullstack', 'ui-ux', 'web-apps'
    year: '2025',
    slug: 'new-project-slug',
    coverImage: 'image-url',
    description: 'Project description',
    technologies: ['React', 'TypeScript'],
    images: [
      { id: '4-1', src: 'image-url', alt: 'Alt text', aspectRatio: 'landscape' }
    ]
  },
  // ... existing projects
];
```

### Update Social Links
In `src/data/developer.ts`:
```typescript
socialLinks: {
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  portfolio: 'https://your-portfolio.com'
}
```

---

## 🎨 Theming

The project uses CSS custom properties for theming. Edit `src/index.css` to customize:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... more tokens */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode tokens */
}
```

---

## 📞 Contact Information

- **Email**: vrajamin45@gmail.com
- **Phone**: +91 96870 19705
- **LinkedIn**: [linkedin.com/in/vraj-amin](https://linkedin.com/in/vraj-amin)
- **GitHub**: [github.com/Vrajs-Terminal/Porjects](https://github.com/Vrajs-Terminal/Porjects.git)
- **Location**: Vadodara, Gujarat, India
- **Availability**: Open to internships and professional opportunities

---

## 📜 License

This project is a personal portfolio. All rights reserved.

---

*Last Updated: December 26, 2024*
