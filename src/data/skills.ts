import type { Skill } from '../types/skills';

export const frontendSkills: Skill[] = [
  { name: 'Vue', color: '#41b883', level: 1, icon: 'mdi:vuejs' },
  { name: 'Nuxt', color: '#00c48c', level: 0.5, icon: 'mdi:nuxt' },
  { name: 'JavaScript', color: '#f0db4f', level: 0.9, icon: 'mdi:language-javascript' },
  { name: 'TypeScript', color: '#3178c6', level: 0.9, icon: 'mdi:language-typescript' },
  { name: 'HTML', color: '#e34f26', level: 0.9, icon: 'mdi:language-html5' },
  { name: 'CSS', color: '#2965f1', level: 0.9, icon: 'mdi:language-css3' },
  { name: 'TailwindCSS', color: '#38bdf8', level: 0.9, icon: 'mdi:tailwind' },
  { name: 'React', color: '#61dafb', level: 0.65, icon: 'mdi:react' },
  { name: 'Astro', color: '#ff5f57', level: 0.5, icon: 'mdi:astro' },
  { name: 'Three.js', color: '#ffdd57', level: 0.3, icon: 'mdi:three-js' }
];

export const backendSkills: Skill[] = [
  { name: 'Node.js', color: '#339933', level: 0.5, icon: 'mdi:nodejs' },
  { name: 'PHP', color: '#777BB4', level: 0.3, icon: 'mdi:language-php' },
  { name: 'Java', color: '#f89820', level: 0.5, icon: 'mdi:language-java' },
  { name: 'C++', color: '#f89820', level: 0.3, icon: 'mdi:language-cplusplus' },
];

export const designSkills: Skill[] = [
  { name: 'Figma', color: '#f24e1e', level: 0.3, icon: 'mdi:figma' },
  { name: 'Canva', color: '#f24e1e', level: 0.5, icon: 'mdi:canva' }
];