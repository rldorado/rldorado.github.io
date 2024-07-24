import type { Skill } from '../types/skills';

export const skills: Skill[] = [
  { name: 'Vue', color: '#41b883', level: 1, related: ['JavaScript', 'TypeScript'] },
  { name: 'JavaScript', color: '#f0db4f', level: 0.9, related: ['TypeScript', 'Node.js'] },
  { name: 'TypeScript', color: '#3178c6', level: 0.9, related: ['JavaScript'] },
  { name: 'Tailwind', color: '#38bdf8', level: 0.9, related: ['CSS'] },
  { name: 'React', color: '#61dafb', level: 0.65, related: ['JavaScript'] },
  { name: 'Node.js', color: '#339933', level: 0.5, related: ['JavaScript'] },
  { name: 'HTML', color: '#e34f26', level: 0.9, related: ['CSS'] },
  { name: 'CSS', color: '#2965f1', level: 0.9, related: ['HTML'] },
  { name: 'Astro', color: '#ff5f57', level: 0.5, related: ['HTML', 'JavaScript'] },
  { name: 'Three.js', color: '#ffdd57', level: 0.3, related: ['JavaScript'] }
];
