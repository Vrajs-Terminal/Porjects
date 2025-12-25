import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Invite-Only Social Media App',
    category: 'fullstack',
    year: '2024',
    slug: 'invite-only-social-media',
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A private social media web application with user authentication and restricted access to ensure controlled platform usage. Built with secure login functionality and session handling to address user privacy concerns.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Backend Authentication'],
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Social media app login interface',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'User dashboard with feed',
        aspectRatio: 'landscape'
      },
      {
        id: '1-3',
        src: 'https://images.unsplash.com/photo-1522542550221-31fd8575f7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Secure session management',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '2',
    title: 'AR/VR Campus View Website',
    category: 'frontend',
    year: '2024',
    slug: 'arvr-campus-view',
    coverImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'An interactive campus viewing website that allows prospective students to explore university facilities through a virtual interface. Features campus navigation and interactive views for remote users.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'UI Components'],
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Virtual campus tour interface',
        aspectRatio: 'landscape'
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Interactive campus map',
        aspectRatio: 'landscape'
      },
      {
        id: '2-3',
        src: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Campus building explorer',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    category: 'ui-ux',
    year: '2024',
    slug: 'personal-portfolio',
    coverImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A responsive personal portfolio website showcasing projects, technical skills, and professional background. Built with responsive design principles ensuring cross-device compatibility.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Portfolio homepage design',
        aspectRatio: 'landscape'
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Projects showcase section',
        aspectRatio: 'landscape'
      },
      {
        id: '3-3',
        src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Mobile responsive view',
        aspectRatio: 'portrait'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
