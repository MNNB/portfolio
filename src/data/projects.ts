export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  categories: string[];
  slug: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Digital Banking App',
    description: 'A modern banking experience reimagined for the digital age',
    thumbnail: '/images/projects/brutalist-placeholder.jpg',
    categories: ['UX Design', 'UI Design', 'Mobile'],
    slug: 'digital-banking-app'
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Seamless shopping experience with focus on accessibility',
    thumbnail: '/images/projects/brutalist-placeholder.jpg',
    categories: ['Web Design', 'UX Research', 'Development'],
    slug: 'ecommerce-platform'
  },
  {
    id: '3',
    title: 'Health & Wellness',
    description: 'Wellness tracking app with focus on mental health',
    thumbnail: '/images/projects/brutalist-placeholder.jpg',
    categories: ['Product Design', 'UX Design', 'Mobile'],
    slug: 'health-wellness-app'
  }
]; 