import roldoradoImage from '@/assets/roldorado-webpage.png';
import refurbedImage from '@/assets/refurbed-checkout.png';

export const projects = [
  {
    name: 'Rol Dorado',
    description: 'Community platform for a Spanish tabletop roleplaying group. Event listing, member onboarding, and content management. Built and maintained as a side project.',
    image: roldoradoImage,
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    link: 'https://roldorado.com/'
  },
  {
    name: 'Refurbed — Checkout & Payments',
    description: 'Owned the checkout and payments front-end for a refurbished electronics marketplace. Iterated on conversion, integrated Stripe, and shipped A/B tests across the full funnel.',
    image: refurbedImage,
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS', 'Vite', 'A/B Testing', 'Stripe', 'Jest', 'Cypress'],
    link: 'https://www.refurbed.de/checkout/'
  }
];
