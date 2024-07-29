export interface Skill {
  name: string;
  icon?: string;
  color?: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
